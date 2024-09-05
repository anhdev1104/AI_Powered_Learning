<?php
namespace App\Repositories\Conversation;

use App\Repositories\Conversation\ConversationRepositoryInterface;
use App\Models\Conversation;

class ConversationRepository implements ConversationRepositoryInterface {
    public function all() {
        return Conversation::all();
    }
    public function find($id) {
        return Conversation::with('messages')->find($id);
    }
    public function paginate($limit) {
        $conversation = Conversation::with('messages');
        return $limit ? $conversation->paginate($limit) : $conversation->get();
    }
    public function create(array $data) {
        return Conversation::create($data);
    }
    public function update($id, array $data) {
        $conversation = Conversation::find($id);
        return $conversation->update($data);
    }
    public function delete($id) {
        $conversation = Conversation::find($id);
        return $conversation->delete();
    }
}