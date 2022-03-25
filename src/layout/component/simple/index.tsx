import { Logo } from '@/component/logo';
import './index.less';

export const Simple: React.FC<{ showMenu: VoidFunction }> = ({ showMenu }) => {
  return (
    <div className="simple window">
      <h1 className="simple-logo">
        <span className="simple-logo-s">
          <Logo />
        </span>
        <span className="simple-logo-text">imple-os</span>
      </h1>
      <p className="simple-desc">
        Hi ~ I&apos;m <span>Ada</span>, my commonly used id.😄
      </p>
      <img
        className="simple-avatar"
        src="http://bucker-for-sae.oss-cn-hangzhou.aliyuncs.com/siteImagesBucket/601537293192ff00a9e841091619280460174.png"
        alt=""
      />
      <div className="simple-ok" onClick={showMenu}>
        OK
      </div>
    </div>
  );
};
