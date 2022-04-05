import { stringTime, useInterval } from '@/util';
import { memo } from 'react';
import './index.less';

export const Time: React.FC<{ extra?: string }> = memo(
  ({ extra }) => {
    const { hour, min, sec } = useInterval<TimeModel>(() => {
      const d = new Date();
      const hour = d.getHours();
      const min = d.getMinutes();
      const sec = d.getSeconds();
      return {
        hour: stringTime(hour),
        min: stringTime(min),
        sec: stringTime(sec),
      };
    });
    return (
      <div className="time">
        {extra}
        {hour}:{min}:{sec}
      </div>
    );
  },
  () => true,
);
