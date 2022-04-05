import { createRef, memo, useEffect } from 'react';
import classNames from 'classnames';
import { useToggle } from '@/util';

import './index.less';

export const Img: React.FC<{ url: string; loadingColor?: string }> = memo(
  ({ url, loadingColor = '#222d38' }) => {
    const [success, { setTrue, setFalse }] = useToggle(false);
    const ref = createRef<HTMLDivElement>();
    useEffect(() => {
      if (ref.current) {
        const observe = new IntersectionObserver((args) => {
          args.forEach((ob) => {
            if (ob.isIntersecting) {
              const image = new Image();
              image.src = url;
              image.onload = setTrue;
              image.onerror = setFalse;
              observe.unobserve(ref.current as HTMLDivElement);
            }
          });
        });
        observe.observe(ref.current);
      }
    }, [ref, url]);
    return (
      <div className="img-load" ref={ref}>
        <div
          key={String(success)}
          className={classNames(success ? 'img-success' : 'img-error-loading', 'img')}
          style={{ backgroundImage: success ? `url(${url})` : 'unset' }}
        />
        {!success && <div className="img-load-loading" style={{ borderColor: loadingColor }}></div>}
      </div>
    );
  },
  (pre, next) => pre.url === next.url,
);
