import { Loading } from '@/component/loading';
import { PreNext } from '@/component/preNext';
import { useLoading, useMount } from '@/util';
import { memo, useState, useMemo } from 'react';
import { getDynamic } from '../../service';
import './index.less';

export const List: React.FC<any> = memo(
  () => {
    const [list, setList] = useState<MomentModel[]>([]);
    const [current, setCurrent] = useState<number>(1);
    const [loading, queryMoment] = useLoading(async () => {
      const res = await getDynamic();
      setList(res);
    });
    useMount(queryMoment);
    const curMoment = useMemo(() => list?.[current - 1], [list?.length, current]);
    const onChange = (type: Direction) => {
      if (type === 'pre') {
        setCurrent(current - 1 || list.length);
      } else {
        setCurrent(current + 1 > list.length ? 1 : current + 1);
      }
    };
    return (
      <div className="moment-detail" data-loading={loading}>
        {loading ? (
          <Loading />
        ) : (
          <>
            <div className="moment-detail-title">{curMoment?.title}</div>
            <div className="moment-detail-summary">{curMoment?.content}</div>
            <div className="moment-detail-op">
              <PreNext onChange={onChange} />
            </div>
            <div className="moment-detail-count">
              {current}/{list.length}
            </div>
          </>
        )}
      </div>
    );
  },
  () => true,
);
