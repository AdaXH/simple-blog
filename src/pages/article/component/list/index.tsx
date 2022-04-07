import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { PreNext } from '@/component/preNext';
import { parseTime, useLoading, useMount } from '@/util';
import { getArticles } from '../../service';
import './index.less';

export const ArticleList = () => {
  const [list, setList] = useState<ArticleModel[]>([]);
  const [current, setCurrent] = useState<number>(1);
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, queryMoment] = useLoading(async () => {
    const res = await getArticles();
    setList(res);
  });
  useMount(queryMoment);
  const curArticle = useMemo(() => list?.[current - 1] || {}, [list?.length, current]);
  const onChange = (type: Direction) => {
    if (type === 'pre') {
      setCurrent(current - 1 || list.length);
    } else {
      setCurrent(current + 1 > list.length ? 1 : current + 1);
    }
  };

  const renderTime = useMemo(
    () => (time: string) => {
      const { year, month, day } = parseTime(time) as Record<string, any>;
      return `${year}/${month}/${day}`;
    },
    [],
  );

  return (
    <div className="artilce-list">
      <div className="artilce-item" onClick={() => navigate(curArticle._id)}>
        <div className="artilce-item-title">{curArticle.title}</div>
        <div className="artilce-item-summary">{curArticle.abstract} </div>
        <div className="artilce-item-info">
          <div className="artilce-item-info-item">
            <span>View</span>
            <span />
            <span>{curArticle.viewer}</span>
          </div>
          <div className="artilce-item-info-item">
            <span>Date</span>
            <span />
            <span>{renderTime(curArticle.date)}</span>
          </div>
          <div className="artilce-item-info-item">
            <span>Type</span>
            <span />
            <span>{curArticle.type}</span>
          </div>
        </div>
      </div>
      <div className="artilce-list-op">
        <PreNext bg="transparent" iconColor="#615b5b" onChange={onChange} />
      </div>
      <div className="artilce-list-count">
        {current} / {list.length}
      </div>
    </div>
  );
};
