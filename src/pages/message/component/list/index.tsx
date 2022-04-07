import { converter, parseTime, randonBool, replaceEmoji, useSetState, useToggle } from '@/util';
import { createRef, memo, useEffect, useMemo, useState } from 'react';
import { queryMsg } from '../../service';

import './index.less';

export const MsgList: React.FC<EmptyProp> = memo(
  ({ setTotal, newMsg }) => {
    const [data, setData] = useState<MsgModel[]>([]);
    const [pager, setPage] = useSetState<Page>({ page: 1, pageSize: 12 });
    const [isEnd, { setTrue, setFalse }] = useToggle();
    const queryData = async () => {
      const { list, totalCount } = await queryMsg(pager);
      setTotal(totalCount);
      const newList = [...data, ...list];
      setData(newList);
      newList.length >= totalCount ? setTrue() : setFalse();
      setPage({
        page: pager.page + 1,
      });
    };
    const renderTime = useMemo(
      () => (time: string) => {
        const { year, month, day } = parseTime(time) as Record<string, any>;
        return `${year}/${month}/${day}`;
      },
      [],
    );
    const listenRef = createRef<HTMLDivElement>();
    useEffect(() => {
      if (listenRef.current) {
        const ob = new IntersectionObserver((items) => {
          items.forEach((item) => {
            if (item.isIntersecting) {
              ob.unobserve(listenRef.current as HTMLDivElement);
              queryData();
            }
          });
        });
        ob.observe(listenRef.current);
      }
    }, [listenRef]);
    useEffect(() => {
      if (newMsg) {
        setData([newMsg, ...data]);
      }
    }, [newMsg]);
    return (
      <>
        {data?.map((item, index) => (
          <div className="list-item" data-right={randonBool()} key={index}>
            <div className="list-item-top">
              <div className="list-item-top-avatar" style={{ backgroundImage: `url(${item.avatar})` }} />
              <div className="list-item-top-user">
                <span>{item.name}</span>
                <span>{renderTime(item.date)}</span>
              </div>
            </div>
            <div
              className="list-item-content"
              dangerouslySetInnerHTML={{
                __html: converter.makeHtml(replaceEmoji(item.content) || ''),
              }}
            ></div>
          </div>
        ))}
        {!isEnd && (
          <div ref={listenRef} className="listen-msg">
            loading...
          </div>
        )}
      </>
    );
  },
  (pre, next) => pre.newMsg?._id === next.newMsg?._id,
);
