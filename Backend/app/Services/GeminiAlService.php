<?php
namespace App\Services;

use Gemini\Laravel\Facades\Gemini;
use App\Repositories\Message\MessageRepositoryInterface;
use App\Repositories\Conversation\ConversationRepositoryInterface;
use App\Repositories\Exercise\ExerciseRepositoryInterface;
use App\Repositories\ExerciseResult\ExerciseResultRepositoryInterface;
use App\Repositories\Solution\SolutionRepositoryInterface;

class GeminiAlService {
    private $gemini;
    private $conversationRepository;
    private $messageRepository;
    private $exerciseRepository;
    private $solutionRepository;
    private $exerciseResultRepository;
    private $keywords = [
        'lập trình', 'iphone', 'code', 'phần mềm', 'phần cứng', 'công nghệ', 
        'web', 'ứng dụng', 'developer', 'programming', 'API', 
        'framework', 'database', 'javascript', 'PHP', 'Python', 
        'Java', 'HTML', 'CSS', 'network', 'machine learning', 
        'AI', 'algorithm', 'cloud', 'devops', 'docker', 'kubernetes',
        'linux', 'windows', 'macOS', 'mobile', 'android', 'ios', 
        'react', 'vue', 'angular', 'nodejs', 'typescript', 'ruby', 
        'rails', 'laravel', 'django', 'flask', 'swift', 'objective-c',
        'C', 'C++', 'C#', 'golang', 'Rust', 'perl', 'bash', 
        'shell script', 'command line', 'git', 'version control',
        'software engineering', 'data science', 'big data', 'data mining',
        'blockchain', 'cryptocurrency', 'bitcoin', 'ethereum', 'security', 
        'encryption', 'cybersecurity', 'penetration testing', 'ethical hacking',
        'web development', 'frontend', 'backend', 'fullstack', 'REST API',
        'GraphQL', 'microservices', 'serverless', 'cloud computing',
        'AWS', 'Azure', 'Google Cloud', 'CI/CD', 'continuous integration', 
        'continuous delivery', 'testing', 'unit testing', 'integration testing',
        'UI/UX', 'user interface', 'user experience', 'design patterns',
        'software architecture', 'refactoring', 'optimization', 'scalability',
        'performance tuning', 'monitoring', 'logging', 'error handling',
        'debugging', 'troubleshooting', 'agile', 'scrum', 'kanban', 
        'project management', 'product management', 'versioning', 
        'release management', 'automation', 'scripting', 'hardware',
        'IoT', 'Internet of Things', 'robotics', 'AI', 'deep learning',
        'neural networks', 'NLP', 'natural language processing', 
        'computer vision', 'image processing', 'signal processing',
        'virtual reality', 'augmented reality', 'game development',
        '3D modeling', 'animation', 'rendering', 'graphics', 
        'GPU', 'CPU', 'motherboard', 'RAM', 'SSD', 'HDD',
        'power supply', 'cooling system', 'networking', 'firewall',
        'VPN', 'proxy', 'load balancer', 'router', 'switch',
        'DNS', 'DHCP', 'HTTP', 'HTTPS', 'FTP', 'SMTP', 
        'POP3', 'IMAP', 'SSL', 'TLS', 'encryption', 
        'cybersecurity', 'authentication', 'authorization', 
        'OAuth', 'JWT', 'SSL', 'TLS', 'XSS', 'SQL Injection',
        'CSRF', 'data encryption', 'privacy', 'GDPR', 
        'compliance', 'cloud storage', 'databases', 'NoSQL',
        'SQL', 'PostgreSQL', 'MySQL', 'MariaDB', 'SQLite',
        'MongoDB', 'CouchDB', 'Cassandra', 'Redis', 'Memcached',
        'Elasticsearch', 'Kibana', 'Logstash', 'Hadoop', 'Spark',
        'Kafka', 'RabbitMQ', 'ActiveMQ', 'Zookeeper', 'HDFS',
        'MapReduce', 'data warehouse', 'ETL', 'data lakes',
        'AI ethics', 'bioinformatics', 'quantum computing',
        'augmented reality', 'virtual reality', 'smart contracts',
        'dapps', 'decentralized finance', 'FinTech', 'InsurTech',
        'MedTech', 'HealthTech', 'RegTech', 'AdTech', 'EdTech',
        'AgriTech', 'PropTech', 'GreenTech', 'CleanTech',
        '5G', 'edge computing', 'serverless architecture', 'content delivery network',
        'CDN', 'web scraping', 'web crawling', 'data engineering', 
        'data visualization', 'predictive analytics', 'sentiment analysis',
        'chatbots', 'virtual assistants', 'RPA', 'robotic process automation',
        'metadata', 'data governance', 'data quality', 'data integration',
        'data lakes', 'data marts', 'data pipeline', 'data modeling',
        'data science lifecycle', 'ETL pipelines', 'MLops', 'data ethics',
        'computational science', 'scientific computing', 'numerical methods',
        'high-performance computing', 'distributed computing', 'cloud-native',
        'container orchestration', 'containerization', 'infrastructure as code',
        'Terraform', 'Ansible', 'Puppet', 'Chef', 'K8s', 'Kubernetes',
        'docker-compose', 'CI/CD pipelines', 'build automation', 'deployment automation',
        'security operations', 'incident response', 'risk management', 'vulnerability management',
        'penetration testing', 'ethical hacking', 'red teaming', 'blue teaming',
        'cyber threat intelligence', 'threat hunting', 'digital forensics',
        'privacy by design', 'privacy engineering', 'GDPR compliance', 'data subject rights',
        'digital transformation', 'technology adoption', 'enterprise architecture',
        'IT governance', 'ITIL', 'IT service management', 'business continuity',
        'disaster recovery', 'IT asset management', 'endpoint security',
        'network security', 'application security', 'cloud security', 'identity management',
        'access control', 'IAM', 'identity and access management', 'single sign-on',
        'multi-factor authentication', 'biometrics', 'behavioral biometrics', 
        'security auditing', 'security policy', 'security framework', 'security compliance'
    ];
    
    
    public function __construct(Gemini $gemini, ConversationRepositoryInterface $conversationRepository, MessageRepositoryInterface $messageRepository, ExerciseRepositoryInterface $exerciseRepository, SolutionRepositoryInterface $solutionRepository, ExerciseResultRepositoryInterface $exerciseResultRepository) {
        $this->gemini = $gemini;
        $this->conversationRepository = $conversationRepository;
        $this->messageRepository = $messageRepository;
        $this->exerciseRepository = $exerciseRepository;
        $this->solutionRepository = $solutionRepository;
        $this->exerciseResultRepository = $exerciseResultRepository;
    }

    public function generateText($prompt, $user_id, $id = null) {
        try {
            $conversation = '';
            $idNew = $id;
            $keywordsList = implode(', ', $this->keywords);
            $instruction = "Ai chào bạn bạn hãy chào lại và bạn là một AI hỗ trợ về lập trình và công nghệ. Chỉ trả lời các câu hỏi liên quan đến code, lập trình, công nghệ, phần mềm, phần cứng, phát triển web, lập trình ứng dụng, các chủ đề công nghệ khác hoặc các từ khóa liên quan như {$keywordsList}. Nếu câu hỏi không liên quan đến các lĩnh vực này, hãy từ chối trả lời 1 cách hợp lý";
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
                'sender_type' => 'aI',
                'message_text' => $resData
            ]);

            return $resData;
        } catch (\Throwable $th) {
            throw $th;
        }
    }
    public function checkExercise($exercise_id, $prompt, $user_id, $language) {
        try {
            $dataExercise = $this->exerciseRepository->find($exercise_id);
            $text = "";
            $instruction = "Hãy giải bài tập nếu bài tập đúng trả về 'passed' nếu sai trả về 'failed'";
            foreach ($dataExercise->exerciseExample as $item) {
                $text .= "
                    input: {$item->input}
                    \n
                    output: {$item->output}
                    \n
                    Explanation: {$item->description}
                    \n
                ";
            }

            $exercise = "Exercise: \n {$dataExercise->title} \n {$dataExercise->description} \n\n {$text}";
            $promptData = "Solution: \n {$prompt}";

            $inputData = $instruction ."\n". $exercise ."\n".$promptData;

            $response = $this->gemini::geminiPro()->generateContent($inputData);
            $resData = $response->text();
            $checkSolution = $this->solutionRepository->checkExist($user_id, $exercise_id);
            if (empty($checkSolution)) {
                $solution = $this->solutionRepository->create([
                    'code' => $prompt,
                    'language' => $language,
                    'exercise_id' => $exercise_id,
                    'user_id' => $user_id,
                ]);
    
                $exercise_ressult = $this->exerciseResultRepository->create([
                    'status' => $resData,
                    'solution_id' => $solution->id
                ]);
            }else {
                $this->solutionRepository->update($checkSolution->id, [
                    'code' => $prompt,
                ]);
                $this->exerciseResultRepository->updateSolutionId($checkSolution->id, [
                    'status' => $resData,
                ]);
            }

            return $resData;
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}