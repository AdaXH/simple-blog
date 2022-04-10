import { UserCtx } from '@/contexts';
import { qqSign } from '@/util';
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
          <i className="iconfont icon-user1"></i>
          <div className="menu-extra-menu-item-qq" data-hasLogin={hasLogin} onClick={qqLogin}>
            {hasLogin ? (
              <>
                <div
                  className="menu-extra-menu-item-qq-avatar"
                  style={{ backgroundImage: `url(${userCtx?.avatar})` }}
                ></div>
                <div>Hi ~ {userCtx?.name}</div>
              </>
            ) : (
              <>
                LOGIN WITH <i className="iconfont icon-QQ"></i>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
