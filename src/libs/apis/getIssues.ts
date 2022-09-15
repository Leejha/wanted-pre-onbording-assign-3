import { Issue } from 'types/issue';
import client from './client';

export const getIssues = async () => {
  const response = await client.get<Issue[]>('');
  console.log(response);
  return response.data;
};
