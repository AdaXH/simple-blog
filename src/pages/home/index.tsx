import { useState } from 'react';
import { Img } from '@/component/image';
import { Menu } from '@/component/menu';
import { Time } from './component/time';
import { MENUS } from './constant';
import { useMount } from '@/util';
import { getConfigv2 } from './service';
import './index.less';

export const Home = () => {
  const [data, setData] = useState<Config>();
  useMount(async () => {
    const res = await getConfigv2();
    setData(res);
  });
  return (
    <div className="home global">
      <div className="global-view home-wrap">
        <div className="home-menu">
          <Menu logo="Ada - Home" menus={MENUS} />
        </div>
        <div className="home-bg">
          <Img url="https://bucker-for-sae.oss-cn-hangzhou.aliyuncs.com/simple-blog/bg/eccb6f291f48402484a8f171e0197a6c.jpeg" />
          <a
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010602010125"
            target="_blank"
            className="home-bg-info"
            rel="noreferrer"
          >
            {/* 浙公网安备33010602010125号 滇ICP备2020009525号 */}
            ICP.33010602010125 2020009525
          </a>
        </div>
        <div className="home-info">
          <div className="home-info-main">
            <h1>{data?.blogTitle}</h1>
            {/* <p className="desc">I&apos;m Ada, commonly used id.</p> */}
            <p className="desc">{data?.text1}</p>
            <p className="desc">{data?.text2}</p>
            <div className="home-info-main-number">
              <i className="iconfont icon-liulan"></i>
              <span>{data?.customer || 0}</span>
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
