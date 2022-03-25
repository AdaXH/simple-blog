import { Drag } from '@/component/drag';
import { Logo } from '@/component/logo';
import { memo, useMemo, useState } from 'react';
import { ComKeys, COM_MAP, INDEX_ASIDE } from './constant';

import './index.less';

export const Center = memo(
  () => {
    const [activtyCode, setCode] = useState<ComKeys>('system');
    const component = useMemo(() => COM_MAP[activtyCode], [activtyCode]);
    return (
      <Drag className="center" operation>
        <div className="center-wrap">
          <div className="center-wrap-menu">
            <div className="center-wrap-menu-logo">
              <Logo />
              <span>imple - os</span>
            </div>
            {INDEX_ASIDE.map(({ icon, title, code }) => (
              <div
                className="center-wrap-menu-item"
                key={icon}
                data-current={activtyCode === code}
                onClick={() => setCode(code as ComKeys)}
              >
                <i className={`iconfont ${icon}`} />
                <span>{title}</span>
              </div>
            ))}
          </div>
          <div className="center-wrap-view">{component()}</div>
        </div>
      </Drag>
    );
  },
  () => true,
);
