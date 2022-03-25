import { Drag } from '@/component/drag';
import { useMount } from '@/util';
import { useState } from 'react';

import './index.less';

export const Article = () => {
  const [list, setList] = useState<Article[]>([]);
  useMount(() => {
    import('./mock.json').then((res) => setList(res.data));
  });
  return (
    <div className="window center-box">
      <Drag className="article" operation>
        <div className="article-box">
          <div className="article-box-list">
            <div className="article-box-maintitle">A</div>
            <div className="article-box-title">Recent article</div>
            {list.map((item) => (
              <div className="article-box-list-item" key={item._id}>
                {item.title}
              </div>
            ))}
          </div>
          <div className="article-box-content"></div>
        </div>
      </Drag>
    </div>
  );
};
