import Http from '@/helpers/http';

const http = new Http();

export const chatAI = async question => {
  try {
    const data = await http.post('/al/chat', question);
    return data;
  } catch (error) {
    return error;
  }
};

export const oldChatAI = async userId => {
  try {
    const data = await http.get(`/users/${userId}/conversations`);
    return data;
  } catch (error) {
    return error;
  }
};

export const oldMessageChatDetails = async (id, userId) => {
  try {
    const data = await http.get(`/conversations/${id}/${userId}`);
    return data;
  } catch (error) {
    return error;
  }
};
