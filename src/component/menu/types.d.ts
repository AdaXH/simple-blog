interface MenuModel {
  path: string;
  title: string;
}

interface MenuProps {
  menus?: MenuModel[];
  logo: string;
  extrc?: React.ReactNode;
  onClickLogo?: VoidFunction;
}
