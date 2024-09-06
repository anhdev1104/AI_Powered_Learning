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

            $id = null;

            if (isset($data['id'])) {
                $id = $data['id'];
            }

            $user_id = $data['user_id'];
            $prompt = $data['prompt'];

            $res = $this->geminiAlService->generateText($prompt, $user_id, $id);

            return response()->json(['data' => $res, 'user_id' => $user_id], 200);
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()], 400);
        }
    }

    public function checkExercise(Request $request) {
        try {
            $request->validate([
                'exercise_id' => 'required',
                'user_id' => 'required',
                'language' => 'required',
                'prompt' => 'required'
            ]);
            $exercise_id = $request->input('exercise_id');
            $prompt = $request->input('prompt');
            $user_id = $request->input('user_id');
            $language = $request->input('language');
            $res = $this->geminiAlService->checkExercise($exercise_id, $prompt, $user_id, $language);

            return response()->json(['data' => $res], 200);
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()], 400);
        }
    }
}
