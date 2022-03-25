import { Drag } from '@/component/drag';
import { parseTime } from '@/util';

import './index.less';

type DetailProps = Moment & { afterClose: (arg: Moment | undefined) => void };

export const MomentDetail: React.FC<DetailProps> = ({ img, title, content, date, afterClose }) => {
  // const { year, month, day } = parseTime(date);
  // console.log('date', date);
  const renderTime = () => {
    const res = parseTime(date);
    if (typeof res === 'string') return res;
    return (
      <>
        {res.year}-{res.month}-{res.day}
      </>
    );
  };
  return (
    <Drag title={title} className="moment-detail window" operation close afterClose={afterClose}>
      <div className="moment-detail-box">
        <div className="moment-detail-box-img" style={{ backgroundImage: `url(${img})` }}></div>
        <div className="moment-detail-box-content">{content}</div>
        <div className="moment-detail-box-date">{renderTime()}</div>
      </div>
    </Drag>
  );
};
