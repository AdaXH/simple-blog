import { converter, parseTime, randonBool, replaceEmoji, useMount, useToggle } from '@/util';
import { createRef, memo, useEffect, useMemo, useState } from 'react';

import './index.less';

export const MsgList: React.FC<EmptyProp> = memo(
  () => {
    const [data, setData] = useState<MessageModel[]>([]);
    const [page, setPage] = useState<number>(1);
    const [isEnd, { setTrue, setFalse }] = useToggle();
    const queryData = async () => {
      const d = await import('./mock.json');
      if (d.success) {
        await setData([...(data || []), ...d.data]);
        data.length >= d.totalCount ? setTrue() : setFalse();
        setPage(page + 1);
      }
    };
    useMount(queryData);
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
              console.log('update');
              queryData();
            }
          });
        });
        ob.observe(listenRef.current);
      }
    }, [listenRef]);
    if (!data) return null;
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
  () => true,
);
