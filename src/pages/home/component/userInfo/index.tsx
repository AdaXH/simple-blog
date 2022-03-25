import { Drag } from '@/component/drag';
import './index.less';

export const UserInfo = () => {
  return (
    <Drag className="user-drag" title="User">
      <div className="user">user</div>
    </Drag>
  );
};
