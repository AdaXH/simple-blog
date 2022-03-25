import { Email } from './email';
import { QQ } from './qq';
import { Wechat } from './wechat';

export const MY_INFO = [
  {
    name: 'Name',
    value: 'Ada',
  },
  {
    name: 'Gender',
    value: 'male',
  },
  // {
  //   name: 'Age',
  //   value: '25',
  // },
  {
    name: 'Born date',
    value: '1996-07-18',
  },
  {
    name: 'Professional skill',
    value: 'React,Vue,Node,Mongo,SQL,Java',
  },
];

export const CONTACTS = [
  {
    name: 'Email',
    component: Email,
  },
  {
    name: 'QQ',
    component: QQ,
  },
  {
    name: 'WeChat',
    component: Wechat,
  },
] as const;
