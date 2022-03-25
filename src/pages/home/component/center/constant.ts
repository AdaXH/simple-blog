import { AboutMe } from '../aboutMe';
import { OS } from '../os';

export const INDEX_ASIDE = [
  {
    icon: 'icon-system',
    code: 'system',
    title: 'System',
  },
  {
    icon: 'icon-user',
    code: 'user',
    title: 'About me',
  },
  {
    icon: 'icon-code',
    code: 'project',
    title: 'Project',
  },
  // {
  //   icon: 'icon-QQ-circle-fill',
  //   code: 'qq',
  //   title: 'Contact with qq',
  // },
  // {
  //   icon: 'icon-wechat-fill',
  //   code: 'wechat',
  //   title: 'Contact with wechat',
  // },
];

export const COM_MAP = {
  system: OS,
  user: AboutMe,
  project: AboutMe,
  // qq: AboutMe,
  // wechat: AboutMe,
} as const;

export type ComKeys = keyof typeof COM_MAP;
