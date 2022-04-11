import { UserCtx } from '@/contexts';
import { qqSign, signOut } from '@/util';
import { useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.less';

export const Menu: React.FC<MenuProps> = ({ logo, menus, onClickLogo }) => {
  const navigate = useNavigate();
  const userCtx = useContext(UserCtx);
  const hasLogin = useMemo<boolean>(() => !!userCtx?._id, [userCtx?._id]);
  const qqLogin = () => {
    if (hasLogin) return;
    qqSign();
    window.addEventListener('message', (e) => {
      if (e.data === 'success') {
        window.location.reload();
      }
    });
  };
  return (
    <div className="menu">
      <div className="menu-logo" onClick={onClickLogo}>
        {logo}
      </div>
      {menus?.map((item) => (
        <div className="menu-item" key={item.path} onClick={() => navigate(item.path)}>
          {item.title}
        </div>
      ))}
      <div className="menu-extra">
        <a className="menu-extra-menu-item" href="https://github.com/adaxh" target="_blank" rel="noreferrer">
          <i className="iconfont icon-github"></i>
        </a>
        <div className="menu-extra-menu-item">
          <i className="iconfont icon-user1" onClick={qqLogin}></i>
          {hasLogin && (
            <div className="menu-extra-menu-item-qq">
              <div
                className="menu-extra-menu-item-qq-avatar"
                style={{ backgroundImage: `url(${userCtx?.avatar})` }}
              ></div>
              <div>
                <i className="iconfont icon-exit" onClick={() => signOut()}></i>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
