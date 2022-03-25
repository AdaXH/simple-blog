import { memo } from 'react';
// import fetchJsonp from 'fetch-jsonp';
// import { Way } from './way';
// import { SEARCH } from './way/constant';
// import { MemoList } from './memoList';
import styles from './index.module.less';
import { Logo } from '@/component/logo';
import { Drag } from '@/component/drag';

export const Search = memo(() => {
  // const [current, setCurrent] = useState<string>(SEARCH[0].url);
  // const [value, setVal] = useState<string>('');
  // const [list, setList] = useState<any[]>([]);
  // const onSearch = useCallback(
  //   (newValue) => {
  //     if (!value) return;
  //     window.open(`${current}${newValue || value}`);
  //   },
  //   [value, current],
  // );
  // const onInput = (event: any) => {
  //   const {
  //     nativeEvent: { keyCode },
  //   } = event;
  //   if (keyCode === 13 && value) {
  //     window.open(`${current}${value}`);
  //   }
  // };
  // const onChange = async (newVal: string) => {
  //   setVal(newVal);
  //   if (!newVal) {
  //     setList([]);
  //     return;
  //   }
  //   fetchJsonp(`https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=${newVal}`, {
  //     timeout: 6000,
  //     jsonpCallback: 'cb',
  //   })
  //     .then((res) => {
  //       if (res.json) return res.json();
  //     })
  //     .then((data) => {
  //       const { s } = data;
  //       if (s) {
  //         setList(s.slice(0, 5));
  //       }
  //     })
  //     .catch(() => {
  //       setList([]);
  //     });
  // };
  return (
    <Drag>
      <h1 className={styles.siteLogo}>
        <Logo />
        <span>imple - os</span>
      </h1>
      {/* <Way current={current} setCurrent={setCurrent} />
        <div className={styles.searchInput}>
          <input
            placeholder="输入关键词搜索"
            onChange={(e) => onChange(e.target.value)}
            value={value}
            onKeyUp={(e) => onInput(e)}
          />
          <div className={styles.searchIcon} onClick={() => onSearch('')}>
            <div className={styles.icon} />
          </div>
        </div>
        <MemoList data={list} setVal={setVal} onSearch={onSearch} />
  */}
    </Drag>
  );
});
