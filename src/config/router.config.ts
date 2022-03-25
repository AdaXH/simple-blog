export default [
  {
    title: '',
    path: '/',
    Component: () => import('@/pages/home/index'),
  },
  {
    title: '',
    path: '/moment',
    Component: () => import('@/pages/moment/index'),
  },
  {
    title: '',
    path: '/article',
    Component: () => import('@/pages/article/index'),
  },
];
