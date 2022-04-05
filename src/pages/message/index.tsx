import { createRef } from 'react';
import { Img } from '@/component/image';
import { Menu } from '@/component/menu';
import { MsgList } from './list';
import { MENUS } from './constant';
import './index.less';

export const Message = () => {
  const listRef = createRef<HTMLDivElement>();
  const toTop = () => listRef?.current?.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <div className="message global">
      <div className="global-view message-wrap">
        <div className="message-menu">
          <Menu
            logo="MESSAGE"
            extrc={
              <>
                <div className="message-menu-item">
                  <i className="iconfont icon-github"></i>
                </div>
                <div className="message-menu-item">
                  <i className="iconfont icon-user1"></i>
                </div>
              </>
            }
            menus={MENUS}
          />
        </div>
        <div className="message-top">
          <div className="message-top-list noScroll" ref={listRef}>
            <MsgList />
          </div>
          <div className="message-top-img">
            <Img url="https://bucker-for-sae.oss-cn-hangzhou.aliyuncs.com/simple-blog/bg/67c83fe17e4eadbe50053bc3dea8777aee2d962a351b3-2L3DLr.png" />
          </div>
          <div className="message-top-icon" onClick={toTop}>
            <i className="iconfont icon-top"></i>
          </div>
        </div>
        <div className="message-bottom">
          <div className="message-bottom-add">
            <i className="iconfont icon-add"></i>
          </div>
          <div className="message-bottom-info">RECEING MORE HAPPY MESSAGE NEXT TIME.</div>
          <div className="message-bottom-extra">TOTAL: 100</div>
        </div>
      </div>
    </div>
  );
};
