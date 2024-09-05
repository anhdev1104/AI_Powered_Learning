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
