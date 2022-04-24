import { memo, useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loading } from '@/component/loading';
import { Menu } from '@/component/menu';
import { useLoading, useMount } from '@/util';
import { queryArticleDetail } from '../service';
import { DEFAULT_BG } from './constant';
import './index.less';

export const ArticleDetail: React.FC<{ articleId: string }> = memo(
  ({ articleId }) => {
    const [data, setData] = useState<ArticleModel>();
    const bgColor = data?.bgColor;
    const [loading, queryArticle] = useLoading(async () => {
      const res = await queryArticleDetail({ _id: articleId });
      setData(res);
    });
    useMount(queryArticle);
    const push = useNavigate();
    const bgRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
      if (bgRef.current && bgColor) {
        bgRef.current!.style.backgroundColor = bgColor;
      }
      return () => {
        bgRef.current!.style.backgroundColor = DEFAULT_BG;
      };
    }, [bgRef.current, bgColor]);
    return (
      <div className="article global" ref={bgRef}>
        <div className="global-view article-detail-wrap" style={{ backgroundColor: bgColor }}>
          <div className="article-menu">
            <Menu logo="BACK" onClickLogo={() => push('/article')} />
          </div>
          <div className="article-detail noScroll" data-loading={loading}>
            {loading ? (
              <Loading />
            ) : (
              <div
                className="article-detail-html"
                dangerouslySetInnerHTML={{ __html: data?.summary || '' }}
              ></div>
            )}
          </div>
        </div>
      </div>
    );
  },
  (pre, next) => pre.articleId === next.articleId,
);
