export default [
  {
    title: '',
    path: '/',
    Component: () => import('@/pages/home/app'),
  },
  {
    title: '',
    path: '/moment',
    Component: () => import('@/pages/moment/app'),
  },
  {
    title: '',
    path: '/article',
    Component: () => import('@/pages/article/app'),
  },
  {
    title: '',
    path: '/article/:id',
    Component: () => import('@/pages/article/app'),
  },
  {
    title: '',
    path: '/message',
    Component: () => import('@/pages/message/app'),
  },
  {
    title: '',
    path: '/link',
    Component: () => import('@/pages/link/app'),
  },
  {
    title: '',
    path: '/qq',
    Component: () => import('@/pages/qq/app'),
  },
];
