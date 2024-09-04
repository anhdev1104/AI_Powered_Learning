<?php

namespace App\Http\Controllers\Apis\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\ChatAlRequest;
use App\Services\GeminiAlService;

class ChatAlController extends Controller
{
    private $geminiAlService;
    public function __construct(GeminiAlService $geminiAlService) {
        $this->geminiAlService = $geminiAlService;
    }
    public function chatBox(ChatAlRequest $request) {
        try {
            $data = $request->validated();

            $user_id = $data['user_id'];
            $prompt = $data['prompt'];

            $res = $this->geminiAlService->generateText($prompt);

            return response()->json(['data' => $res, 'user_id' => $user_id], 200);
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()], 400);
        }
    }
}
