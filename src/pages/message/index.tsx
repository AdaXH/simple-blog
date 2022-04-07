import { createRef, useState } from 'react';
import { Menu } from '@/component/menu';
import { useToggle } from '@/util';
import { MsgList } from './component/list';
import { TextArea } from './component/textArea';
import { MENUS } from './constant';
import { leaveMsg } from './service';
import './index.less';

export const Message = () => {
  const listRef = createRef<HTMLDivElement>();
  const toTop = () => listRef?.current?.scrollTo({ top: 0, behavior: 'smooth' });
  const [total, setTotal] = useState<number>(0);
  const [visible, { setTrue, setFalse }] = useToggle();
  const [newMsg, setNewMsg] = useState<MsgModel>();
  const getValue = async (val: string) => {
    const res = await leaveMsg({ content: val });
    setNewMsg(res);
    setFalse();
  };
  return (
    <div className="message global">
      <div className="global-view message-wrap">
        {visible && (
          <div className="message-reply">
            <div className="message-reply-left">
              <TextArea onClose={setFalse} getValue={getValue} />
            </div>
            <div className="message-reply-mask" onClick={setFalse}></div>
          </div>
        )}
        <div className="message-menu">
          <Menu logo="MESSAGE" menus={MENUS} />
        </div>
        <div className="message-top">
          <div className="message-top-info">
            <div>
              <h1>MESSAGE LIST</h1>
              <p>RECEING MORE HAPPY MESSAGE NEXT TIME.</p>
              <div className="message-top-info-add" onClick={setTrue}>
                SAY SOMETHING ?
              </div>
              <div className="message-top-info-attention">
                <div className="message-top-info-attention-title">ATTENTION:</div>
                <div className="message-top-info-attention-con">
                  <div className="message-top-info-attention-con-item">CIVILIZED</div>
                  <div className="message-top-info-attention-con-item">HARMONIOUS</div>
                  <div className="message-top-info-attention-con-item">POSITIVE</div>
                  <div className="message-top-info-attention-con-item">FRIENDLY</div>
                </div>
              </div>
            </div>
          </div>
          <div className="message-top-list noScroll" ref={listRef}>
            <MsgList setTotal={setTotal} newMsg={newMsg} />
          </div>
          <div className="message-top-icon" onClick={toTop}>
            <i className="iconfont icon-top"></i>
          </div>
        </div>
        <div className="message-bottom">
          <div className="message-bottom-add" onClick={setTrue}>
            <i className="iconfont icon-add"></i>
          </div>
          <div className="message-bottom-info">RECEING MORE HAPPY MESSAGE NEXT TIME.</div>
          <div className="message-bottom-extra">TOTAL: {total}</div>
        </div>
      </div>
    </div>
  );
};
