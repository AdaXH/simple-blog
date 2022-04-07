import { request, stringify } from '@/util';

export async function getOpenid(data: Record<string, any>) {
  return request(stringify('api/qq_login', { ...data, unionid: 1, fmt: 'json' }));
}
