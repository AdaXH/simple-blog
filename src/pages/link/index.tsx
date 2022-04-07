import { useState, useMemo } from 'react';
import { Menu } from '@/component/menu';
import { openQQ, simpleShuffle, useMount } from '@/util';
import { LinkItem } from './component/linkItem';
import { MENUS } from './constant';
import { queryLink } from './service';
import './index.less';

export const Link = () => {
  const [data, setData] = useState<LinkModel[]>([]);
  const [current, setCurrent] = useState<number>(1);

  useMount(async () => {
    const res = await queryLink();
    setData(simpleShuffle(res));
  });
  const curLink = useMemo(() => data?.[current - 1 || 0] || {}, [data?.length, current]);

  const changeLink = (type: 'pre' | 'next') => {
    if (type === 'pre') {
      setCurrent(current - 1 || data.length);
    } else {
      setCurrent(current + 1 > data.length ? 1 : current + 1);
    }
  };

  return (
    <div className="link global">
      <div className="global-view link-wrap">
        <div className="link-menu">
          <Menu logo="LINK" menus={MENUS} />
        </div>
        <div className="link-left" onClick={() => changeLink('pre')}>
          <i className="iconfont icon-top"></i>
          <span>PRE</span>
        </div>
        <div className="link-center">
          <div className="link-center-view">
            <LinkItem data={curLink} />
          </div>
          <div className="link-center-count">
            <div>CURRENT: {current}</div>
            <div>TOTAL: {data?.length}</div>
          </div>
        </div>
        <div className="link-right" onClick={() => changeLink('next')}>
          <i className="iconfont icon-top"></i>
          <span>NEXT</span>
        </div>
        {/* <div className="link-add">Would you like to be my friend ? contact me now ! </div> */}
        <div className="link-add" onClick={openQQ}>
          WOULD YOU LIKE TO BE MY FRIEND ? CONTACT ME NOW !
        </div>
      </div>
    </div>
  );
};
