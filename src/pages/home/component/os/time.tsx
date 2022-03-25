import { stringTime, useInterval } from '@/util';
import { memo } from 'react';
interface DateModel {
  hour: string;
  min: string;
  sec: string;
}
export const Time = memo(
  () => {
    const { hour, min, sec } = useInterval<DateModel>(() => {
      const date = new Date();
      const hour = date.getHours();
      const min = date.getMinutes();
      const sec = date.getSeconds();
      return {
        hour: stringTime(hour),
        min: stringTime(min),
        sec: stringTime(sec),
      };
    }, 1000);
    return (
      <>
        {hour}:{min}:{sec}
      </>
    );
  },
  () => true,
);
