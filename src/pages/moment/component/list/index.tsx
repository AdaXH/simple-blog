import { PreNext } from '@/component/preNext';
import { memo } from 'react';
import './index.less';

export const List: React.FC<any> = memo(
  () => {
    return (
      <div className="moment-detail">
        <div className="moment-detail-title">title gfgf</div>
        <div className="moment-detail-summary">gfdg fh g h g h gf j gh jh gj hg j hg kjgh k hj kjh </div>
        <div className="moment-detail-op">
          {/* <div className="moment-detail-op-pre">
            <i className="iconfont icon-pre"></i>
          </div>
          <div className="moment-detail-op-next">
            <i className="iconfont icon-pre"></i>
          </div> */}
          <PreNext />
        </div>
      </div>
    );
  },
  () => true,
);
