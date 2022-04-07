import { request } from '@/util';

export async function getConfigv2() {
  return request<Config>('api/getConfigv2');
}
