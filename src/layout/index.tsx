// import { useToggle } from '@/util';
import React, { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu } from './component/menu';
// import { Simple } from './component/simple';
// import './index.less';

export const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();
  // const [visible, { setFalse }] = useToggle(pathname === '/');
  // if (visible) return <Simple showMenu={setFalse} />;
  return (
    <>
      {children}
      <Menu pathname={pathname} />
    </>
  );
};
