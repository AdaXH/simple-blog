import { useMount } from '@/util';
import { memo, useState } from 'react';

import './index.less';

export const Battery = memo(
  () => {
    const [battery, setBattery] = useState<{ level: number; charging: boolean }>({
      level: 1,
      charging: false,
    });
    useMount(() => {
      navigator.getBattery().then((res: any) => {
        setBattery({
          level: res.level,
          charging: res.charging,
        });
      });
    });
    const { level, charging } = battery;
    return (
      <div className="battery">
        {level * 100}% {charging && 'charging'}
      </div>
    );
  },
  () => true,
);
