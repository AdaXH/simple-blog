import React from 'react';
import { SEARCH } from './constant';
import styles from '../index.module.less';

export const Way: React.FC<{ setCurrent: (url: string) => void; current: string }> = ({
  setCurrent,
  current,
}) => {
  return (
    <div className={styles.searchWraper}>
      {SEARCH.map(({ title, url }) => (
        <a
          data-current={current === url}
          onClick={() => setCurrent(url)}
          className={styles.searchItem}
          key={url}
        >
          {title}
        </a>
      ))}
      <div className={styles.line} />
    </div>
  );
};
