import { useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';
import { sleep, useMount } from '@/util';
import { qqLogin } from './service';

export const QQWrap = () => {
  const location = useLocation();
  useMount(async () => {
    try {
      if (location.hash) {
        const [param] = location.hash.split('&');
        // eslint-disable-next-line
        const [_, access_token] = param.split('=');
        if (access_token) {
          const token = await qqLogin({ access_token });
          Cookies.set('token', token);
          await sleep(1000);
          window.opener?.postMessage('success', '/');
        }
      }
    } finally {
      window.close();
    }
  });
  return <div className="qq-wrap">connecting</div>;
};
