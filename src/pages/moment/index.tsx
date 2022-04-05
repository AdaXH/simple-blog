import { Img } from '@/component/image';
import { Menu } from '@/component/menu';
import { useNavigate } from 'react-router-dom';
import { Time } from '../home/component/time';
import { List } from './component/list';
import { MENUS } from './constant';
import './index.less';
import { AboutTime } from './yourTime';

export const Moment = () => {
  const navigate = useNavigate();
  return (
    <div className="moment global">
      <div className="global-view moment-wrap">
        <div className="moment-menu">
          <Menu
            logo="Moment"
            extrc={
              <>
                <div className="moment-menu-item">
                  <i className="iconfont icon-github"></i>
                </div>
                <div className="moment-menu-item">
                  <i className="iconfont icon-user1"></i>
                </div>
              </>
            }
            menus={[]}
          />
        </div>
        <div className="moment-view1">
          <div className="moment-view1-top">
            <Img url="https://bucker-for-sae.oss-cn-hangzhou.aliyuncs.com/simple-blog/bg/2d941bc3d19a4705aef1ac38104f0725_th.jpg" />
          </div>
          <div className="moment-view1-bottom">
            <List />
          </div>
        </div>
        <div className="moment-view2">
          <div className="moment-view2-top">
            <div className="moment-view2-top-menu">
              {MENUS.map(({ path, title }) => (
                <div onClick={() => navigate(path)} className="moment-view2-top-menu-item" key={path}>
                  {title}
                </div>
              ))}
            </div>
            <AboutTime />
          </div>
          <div className="moment-view2-bottom">
            <Img url="https://bucker-for-sae.oss-cn-hangzhou.aliyuncs.com/simple-blog/bg/3e0e65c25b18477fbca24f9eec24e5c4_th.jpg" />
            <Time extra="Now: " />
          </div>
        </div>
        <div className="moment-view3">
          <div className="moment-view3-top">
            <Img url="https://bucker-for-sae.oss-cn-hangzhou.aliyuncs.com/simple-blog/bg/timeofday_03.jpg" />
          </div>
          <div className="moment-view3-bottom">
            <Img url="https://bucker-for-sae.oss-cn-hangzhou.aliyuncs.com/simple-blog/bg/5574ecd002e446f0a7afc4ecd6aac31f_th.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};
