import axios from 'axios';
import { SERVER_URL } from 'libs/utils/constants';

const client = axios.create({});

client.defaults.baseURL = SERVER_URL;

client.interceptors.request.use(
  (config) => {
    if (!config.headers) {
      throw new Error('헤더가 존재하지 않습니다.');
    }

    config.headers.Accept = 'application/vnd.github+json';
    config.headers.Authorization = `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default client;
