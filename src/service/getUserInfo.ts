import { request } from '@/util';

export async function getUserInfo() {
  return request<User>('/api/getUserInfoByToken', 'POST');
}
