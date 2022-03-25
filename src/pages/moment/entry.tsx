import { Drag } from '@/component/drag';
import { useMount } from '@/util';
import { useState } from 'react';
import { MomentDetail } from './component/detail';

import './index.less';

export const Entry = () => {
  const [list, setList] = useState<Moment[]>();
  const [curMoment, setCurMoment] = useState<Moment>();
  useMount(() => {
    import('./mock.json').then((res) => {
      setList(res.data);
    });
  });
  return (
    <div className="window">
      <Drag title="Moment" className="moment window" operation>
        <div className="moment-wrap">
          <div className="moment-title">
            <i className="iconfont icon-haofangtuo400iconfontpengyouquan" />
            Recent moment.
          </div>
          <div className="moment-box">
            {list?.map((item) => (
              <div className="moment-box-item" key={item._id} onClick={() => setCurMoment(item)}>
                <div className="moment-box-item-dot" data-current={curMoment?._id === item._id}></div>
                <div className="moment-box-item-img" style={{ backgroundImage: `url(${item.img})` }}></div>
                <div className="moment-box-item-content">
                  <div className="moment-box-item-content-title">{item.title}</div>
                  <div className="moment-box-item-content-summary">{item.content}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Drag>
      {curMoment && <MomentDetail {...curMoment} afterClose={() => setCurMoment(undefined)} />}
    </div>
  );
};
