import { memo, useEffect, useState, useCallback, useRef } from 'react';
import { KEY_CODE } from './constant';

import styles from './index.module.less';

interface ListProps {
  data: string[];
  setVal: (value: string) => void;
  onSearch: (value: string) => void;
}

export const MemoList: React.FC<ListProps> = memo(({ data, setVal, onSearch }) => {
  if (!data.length) return null;
  const [current, setCurrent] = useState('');
  const index = useRef(-1);
  function bindKeyUp(e: any) {
    const { keyCode } = e;
    if (keyCode === KEY_CODE.DOWN) {
      if (index.current + 1 >= data.length) {
        index.current = -1;
      }
      setCurrent(data[index.current + 1]);
      setVal(data[index.current + 1]);
      index.current += 1;
    }
    if (keyCode === KEY_CODE.UP) {
      if (index.current - 1 <= -1) {
        index.current = data.length;
      }
      setCurrent(data[index.current - 1]);
      setVal(data[index.current - 1]);
      index.current -= 1;
    }
  }
  useEffect(() => {
    window.addEventListener('keyup', bindKeyUp);
    return () => window.removeEventListener('keyup', bindKeyUp);
  }, [data]);
  const handleSelect = useCallback((value, idx) => {
    setVal(value);
    setCurrent(value);
    index.current = idx;
    onSearch(value);
  }, []);
  return (
    <div className={styles.list}>
      {data.map((item, idx) => (
        <a data-current={item === current} key={item} onClick={() => handleSelect(item, idx)}>
          {item}
        </a>
      ))}
    </div>
  );
});
