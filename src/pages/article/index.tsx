import { useMemo } from 'react';
import { Img } from '@/component/image';
import { Menu } from '@/component/menu';
import { useNavigate, useParams } from 'react-router-dom';
import { ArticleList } from './component/list';
import { MENUS } from './constant';

import './index.less';
import { ArticleDetail } from './detail';

export const Article = () => {
  const navigate = useNavigate();
  const param = useParams();
  const articleId = useMemo(() => param?.id, [param?.id]);
  if (articleId) {
    return <ArticleDetail articleId={articleId} />;
  }
  return (
    <div className="article global">
      <div className="global-view article-wrap">
        <div className="article-menu-wrap">
          {MENUS.map((item) => (
            <div className="article-menu-item" key={item.path} onClick={() => navigate(item.path)}>
              {item.title}
            </div>
          ))}
        </div>
        <div className="article-menu">
          <Menu logo="ARTICLE" />
        </div>
        <div className="article-left">
          {/* <Img url="https://bucker-for-sae.oss-cn-hangzhou.aliyuncs.com/simple-blog/bg/QQ%E6%88%AA%E5%9B%BE20220402214358.png" /> */}
          <Img
            url="
        https://bucker-for-sae.oss-cn-hangzhou.aliyuncs.com/simple-blog/bg/QQ%E6%88%AA%E5%9B%BE20220402214358%20%281%29.png
        "
          />
          <div className="article-left-text">ARTICLE LIST</div>
          <div className="article-left-bg"></div>
        </div>
        <div className="article-right">
          <ArticleList />
        </div>
      </div>
    </div>
  );
};
