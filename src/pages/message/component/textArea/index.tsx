/**
 * 文件直接复制老版本blog的代码，写法可能low
 */
import { useState } from 'react';
import Preview from './component/preview';
import Emoji from './component/emoji';
import { EMOJI_PREFIX } from './component/emoji/constant';
import { emojiList } from './constant';

import styles from './styles.module.less';

interface AreaProps {
  onClose: VoidFunction;
  getValue: (arg: string) => void;
  visible?: boolean;
}

export const TextArea = (props: AreaProps) => {
  const [data, setData] = useState<string>('');
  const { onClose, getValue } = props;
  const onAdd = (code: string, pureText = false) => {
    const prefix = pureText ? ' ' : EMOJI_PREFIX;
    setData(`${data || ''}${prefix}${code}${prefix}`);
  };
  return (
    <div className={styles.dialogBox}>
      <div className={styles.bgWrap} onClick={() => onClose()} />
      <div className={styles.container}>
        <div className={styles.content}>
          <textarea
            value={data}
            onChange={(e) => setData(e.target.value)}
            autoFocus
            placeholder="支持markdown语法"
          />
          <div className={styles.footer}>
            <a className={styles.item} onClick={() => getValue(data)}>
              <i className="iconfont icon-queding" />
            </a>
          </div>
          <Emoji onAdd={onAdd} emojiList={emojiList} />
          <Preview onAdd={onAdd} emojiList={emojiList} value={data} />
        </div>
      </div>
    </div>
  );
};
