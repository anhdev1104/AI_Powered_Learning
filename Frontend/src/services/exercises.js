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
