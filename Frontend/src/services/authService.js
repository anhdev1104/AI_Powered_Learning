import Http from '@/helpers/http';

const http = new Http();

export const register = async dataAccount => {
  try {
    const data = await http.post('/auth/register', dataAccount);
    return data;
  } catch (error) {
    return error;
  }
};

export const login = async account => {
  try {
    const data = await http.post('/auth/login', account);
    return data;
  } catch (error) {
    return error;
  }
};
