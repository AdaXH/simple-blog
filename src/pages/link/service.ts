import { request } from '@/util';

export async function queryLink() {
  return request<LinkModel[]>('api/queryFriends');
}
