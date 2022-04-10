import { useLocation, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useMount } from '@/util';
import { getOpenid } from './service';

export const QQWrap = () => {
  const location = useLocation();
  const navigate = useNavigate();
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
        }
      }
    } finally {
      window.opener?.close();
      // window.location.href = '/';
      navigate('/');
    }
  });
  return <div className="qq-wrap">connecting</div>;
};
