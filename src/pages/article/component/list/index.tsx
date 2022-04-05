import { PreNext } from '@/component/preNext';
import './index.less';

export const ArticleList = () => {
  return (
    <div className="artilce-list">
      <div className="artilce-item">
        <div className="artilce-item-title">Asdfs gfgfg</div>
        <div className="artilce-item-summary">fgf h gh gf j ghfjkghfkhjg hjgh jgh gfhf </div>
        <div className="artilce-item-info">
          <div className="artilce-item-info-item">
            <span>View</span>
            <span />
            <span>123</span>
          </div>
          <div className="artilce-item-info-item">
            <span>Date</span>
            <span />
            <span>123</span>
          </div>
          <div className="artilce-item-info-item">
            <span>Type</span>
            <span />
            <span>Node</span>
          </div>
        </div>
      </div>
      <div className="artilce-list-op">
        <PreNext bg="transparent" iconColor="#615b5b" />
      </div>
      <div className="artilce-list-count">1 / 2</div>
    </div>
  );
};
