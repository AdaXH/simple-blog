import { memo } from 'react';

import './index.less';

type LinkItemProps = Partial<LinkModel>;

export const LinkItem: React.FC<{ data: LinkItemProps }> = memo(
  ({ data }) => {
    return (
      <a key={data._id} className="linkitem" href={data.link} target="_blank" rel="noreferrer">
        <div className="linkitem-avatar" style={{ backgroundImage: `url(${data.icon})` }} />
        <div className="linkitem-title">{data.title}</div>
        <div className="linkitem-desc">{data.desc}</div>
      </a>
    );
  },
  (pre, next) => pre.data._id === next.data._id,
);
