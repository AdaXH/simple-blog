import { createDrag } from '@/component/drag';
// import { useToggle } from '@/util';
import { memo } from 'react';
import './index.less';

export const Wechat = memo(
  () => {
    // const [visible, { setTrue, setFalse }] = useToggle(false);
    const wechatWindow = () => {
      createDrag({
        title: 'wechat',
        className: 'wechat-drag',
        operation: true,
        close: true,
        children: (
          <img
            src="https://bucker-for-sae.oss-cn-hangzhou.aliyuncs.com/my/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20220324122622.jpg"
            alt=""
          />
        ),
      });
    };
    return (
      <>
        <div className="wechat" onClick={wechatWindow}>
          <a>
            <i className="iconfont icon-wechat-fill" />
            contact with wechat
          </a>
        </div>
      </>
    );
  },
  () => true,
);
