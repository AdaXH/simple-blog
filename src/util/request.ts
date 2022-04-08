import { toast } from '@/component/toast';
import Cookies from 'js-cookie';
import { NO_ERRPR_APIS } from './constants';

type Method = 'GET' | 'POST';
/**
 * request
 * @param apiUrl 请求的url
 * @param method 请求的方法
 * @param data 参数
 * @returns {T} 返回泛型
 */
export function request<T>(api: string, method: Method = 'GET', data?: Record<string, any>): Promise<T> {
  return new Promise((resolve, reject) => {
    const isGet = method === 'GET';
    const cfg: Record<string, any> = {};
    if (!isGet) {
      cfg.body = !isGet ? JSON.stringify(data) : '';
    }
    fetch(api, {
      method,
      headers: {
        'content-type': 'application/json',
        accept: 'application/json',
        authorization: Cookies.get('token') || 'null',
        withCredentials: 'true',
      },
      ...cfg,
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.success) throw data.errorMsg || '网络异常';
        resolve(data.data || data.user);
      })
      .catch((e) => {
        reject(e);
        if (!NO_ERRPR_APIS.includes(api)) {
          toast(e);
        }
      });
  });
}
