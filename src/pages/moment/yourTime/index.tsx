import { memo } from 'react';
import './index.less';

export const AboutTime: React.FC<EmptyProp> = memo(
  () => {
    return (
      <div className="yourtime">
        <div className="yourtime-title">ABOUT TIME</div>
        <div className="yourtime-desc">Time spent in vice or folly is doubly lost.</div>
      </div>
    );
  },
  () => true,
);
