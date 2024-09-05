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

    public function show($id) {
        try {
            $conversation = $this->conversationService->findById($id);
            if (empty($conversation)) {
                return response()->json(['error' => 'Conversation not found!'], 404);
            }
            return response()->json(['data' => $conversation], 200);
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()], 400);
        }
    }

    public function delete($id) {
        try {
            $this->conversationService->delete($id);
            return response()->json(['message' => 'Deleted Conversation successfully'], 203);
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()], 400);
        }
    }
}
