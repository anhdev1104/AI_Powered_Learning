<?php

namespace App\Http\Controllers\Apis\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\ConversationService;

class ConversationController extends Controller
{
    private $conversationService;
    public function __construct(ConversationService $conversationService) {
        $this->conversationService = $conversationService;
    }

    public function paginate(Request $request) {
        try {
            $conversations = $this->conversationService->getPaginate($request);
            return response()->json($conversations, 200);
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()], 400);
        }
    }
}
