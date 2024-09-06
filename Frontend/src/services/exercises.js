import Http from '@/helpers/http';

const http = new Http();

export const listExercises = async () => {
  try {
    const data = await http.get('/categories');
    return data;
  } catch (error) {
    return error;
  }
};

export const exerciseDetails = async slug => {
  try {
    const data = await http.get(`/exercises/${slug}`);
    return data;
  } catch (error) {
    return error;
  }
};

export const checkResult = async prompt => {
  try {
    const data = await http.post('/al/check-exercise', prompt);
    return data;
  } catch (error) {
    return error;
  }
};
