import { request } from '@/util';

export async function queryMsg(data: Page) {
  return request<{ list: MsgModel[]; totalCount: number }>('/api/getAllMessagev2', 'POST', data);
}

export async function leaveMsg(data: Partial<MsgModel>) {
  return request<MsgModel>('/api/leaveMsgv2', 'POST', data);
}
