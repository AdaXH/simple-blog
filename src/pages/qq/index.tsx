import { useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useMount } from '@/util';
import { getOpenid } from './service';

export const QQWrap = () => {
  const location = useLocation();
  useMount(async () => {
    try {
      if (location.hash) {
        const [param] = location.hash.split('&');
        // eslint-disable-next-line
        const [_, access_token] = param.split('=');
        if (access_token) {
          Cookies.remove('user');
          Cookies.remove('token');
          await getOpenid({ access_token });
          window.opener?.close();
          window.location.href = '/';
        }
      }
    } catch {
      window.close();
    }
  });
  return <div className="qq-wrap">connecting</div>;
};
