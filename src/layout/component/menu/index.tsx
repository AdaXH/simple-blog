import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { MENU } from './constant';
import './index.less';

export const Menu: React.FC<{ pathname: string }> = memo(
  ({ pathname }) => {
    const navigate = useNavigate();
    const gotoPage = (path: string) => {
      navigate(path);
    };
    return (
      <div className="menu">
        {MENU.map(({ className = '', path, text, icon }) => (
          <div
            className={`menu-item ${className}`}
            data-current={pathname === path}
            key={path}
            onClick={() => gotoPage(path)}
          >
            {text && text()}
            {icon && <i className={`iconfont ${icon}`} />}
          </div>
        ))}
      </div>
    );
  },
  (pre, next) => pre.pathname === next.pathname,
);
