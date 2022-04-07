import { request } from '@/util';

export async function getDynamic() {
  return request<MomentModel[]>('api/getDynamic');
}
