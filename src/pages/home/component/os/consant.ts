import { Battery } from './battery';
import { Network } from './network';
import { Time } from './time';

export const SYS_LIST = [
  {
    name: 'Name',
    component: () => 'Simple os' as unknown as JSX.Element,
  },
  {
    name: 'Time',
    component: Time,
  },
  {
    name: 'Version',
    component: () => '0.0.1' as unknown as JSX.Element,
  },
  {
    name: 'Battery',
    component: Battery,
  },
  {
    name: 'Network',
    component: Network,
  },
] as const;
