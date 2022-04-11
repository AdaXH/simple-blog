import { request, stringify } from '@/util';

export async function qqLogin(data: Record<string, any>) {
  return request<string>(stringify('api/qq_login', { ...data, unionid: 1, fmt: 'json' }));
}
