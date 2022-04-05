import { Img } from '@/component/image';
import { Menu } from '@/component/menu';
import { Time } from './component/time';
import { MENUS } from './constant';
import './index.less';

export const Home = () => {
  return (
    <div className="home global">
      <div className="global-view home-wrap">
        <div className="home-menu">
          <Menu
            logo="Ada - Home"
            extrc={
              <>
                <div className="home-menu-item">
                  <i className="iconfont icon-github"></i>
                </div>
                <div className="home-menu-item">
                  <i className="iconfont icon-user1"></i>
                </div>
              </>
            }
            menus={MENUS}
          />
        </div>
        <div className="home-bg">
          <Img url="https://bucker-for-sae.oss-cn-hangzhou.aliyuncs.com/simple-blog/bg/eccb6f291f48402484a8f171e0197a6c.jpeg" />
        </div>
        <div className="home-info">
          <div className="home-info-main">
            <h1>Simple Blog</h1>
            {/* <p className="desc">I&apos;m Ada, commonly used id.</p> */}
            <p className="desc">Maybe you can&apos;t save the world.</p>
            <p className="desc">But you can change it.</p>
            <div className="home-info-main-number">
              <i className="iconfont icon-liulan"></i>
              <span>12345</span>
            </div>
            <div className="home-info-time">
              <div className="home-info-time-title">TIME.</div>
              <Time />
            </div>
            <div className="home-info-design">DESIGN BY ADA</div>
          </div>
        </div>
      </div>
    </div>
  );
};
