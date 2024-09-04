<?php
namespace App\Services;

use Gemini\Laravel\Facades\Gemini;

class GeminiAlService {
    public function generateText($prompt) {
        try {
            $instruction = "Bạn là một AI hỗ trợ về lập trình và công nghệ. Chỉ trả lời các câu hỏi liên quan đến lập trình, công nghệ, phần mềm, phần cứng, phát triển web, lập trình ứng dụng, hoặc các chủ đề công nghệ khác. Nếu câu hỏi không liên quan đến các lĩnh vực này, hãy trả lời rằng 'Xin lỗi bạn, nội dung này nằm ngoài phạm vi hỗ trợ của tôi'. Hãy đảm bảo trả lời một cách chi tiết và chính xác.";
            $text = $instruction . "\n\n" . $prompt;
            
            $response = Gemini::geminiPro()->generateContent($text);

            return $response->text();
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}