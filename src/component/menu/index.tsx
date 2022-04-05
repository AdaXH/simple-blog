import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.less';

interface MenuProps {
  menus?: MenuModel[];
  logo: string;
  extrc?: ReactNode;
}

export const Menu: React.FC<MenuProps> = ({ logo, extrc, menus }) => {
  const navigate = useNavigate();
  return (
    <div className="menu">
      <div className="menu-logo">{logo}</div>
      {menus?.map((item) => (
        <div className="menu-item" key={item.path} onClick={() => navigate(item.path)}>
          {item.title}
        </div>
      ))}
      <div className="menu-extra">{extrc}</div>
    </div>
  );
};
