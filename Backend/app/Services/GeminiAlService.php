<?php
namespace App\Services;

use Gemini\Laravel\Facades\Gemini;
use App\Repositories\Message\MessageRepositoryInterface;
use App\Repositories\Conversation\ConversationRepositoryInterface;

class GeminiAlService {
    private $gemini;
    private $conversationRepository;
    private $messageRepository;
    public function __construct(Gemini $gemini, ConversationRepositoryInterface $conversationRepository, MessageRepositoryInterface $messageRepository) {
        $this->gemini = $gemini;
        $this->conversationRepository = $conversationRepository;
        $this->messageRepository = $messageRepository;
    }

    public function generateText($prompt, $user_id, $id = null) {
        try {
            $conversation = '';
            $idNew = $id;
            $instruction = "Ai chào bạn bạn hãy chào lại và bạn là một AI hỗ trợ về lập trình và công nghệ. Chỉ trả lời các câu hỏi liên quan đến lập trình, công nghệ, phần mềm, phần cứng, phát triển web, lập trình ứng dụng, hoặc các chủ đề công nghệ khác. Nếu câu hỏi không liên quan đến các lĩnh vực này, hãy trả lời rằng 'Xin lỗi bạn, nội dung này nằm ngoài phạm vi hỗ trợ của tôi'. Hãy đảm bảo trả lời một cách chi tiết và chính xác.";
            $text = $instruction . "\n\n" . $prompt;
            

            $response = $this->gemini::geminiPro()->generateContent($text);
            $resData = $response->text();
            if (!isset($id)) {
                $conversation = $this->conversationRepository->create([
                    'title' => $prompt,
                    'user_id' => $user_id
                ]);

                $idNew = $conversation->id;
            }

            $this->messageRepository->create([
                'conversation_id' => $idNew,
                'sender_type' => 'user',
                'message_text' => $prompt
            ]);

            $this->messageRepository->create([
                'conversation_id' => $idNew,
                'sender_type' => 'al',
                'message_text' => $resData
            ]);

            return $resData;
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}