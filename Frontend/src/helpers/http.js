import axios from 'axios';
import Cookies from 'js-cookie';

export const API_URL = 'https://daddy.id.vn/api/v1';

class Http {
  constructor() {
    this.api = axios.create({
      baseURL: API_URL,
      timeout: 10000,
    });

    // Add a request interceptor
    this.api.interceptors.request.use(
      function (config) {
        const token = Cookies.get('access_token');
        if (token) {
          config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );

    // Add a response interceptor
    this.api.interceptors.response.use(
      function (response) {
        return response;
      },
      function (error) {
        return Promise.reject(error);
      }
    );
  }

  async get(url, config = {}) {
    try {
      const response = await this.api.get(url, config);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }

  async post(url, data, config = {}) {
    try {
      const response = await this.api.post(url, data, config);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }

  async put(url, data, config = {}) {
    try {
      const response = await this.api.put(url, data, config);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }

  async patch(url, data, config = {}) {
    try {
      const response = await this.api.patch(url, data, config);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }

  async delete(url) {
    try {
      const response = await this.api.delete(url);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }
}

export default Http;
