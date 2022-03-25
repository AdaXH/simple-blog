import { SYS_LIST } from './consant';
import './index.less';

export const OS = () => {
  return (
    <div className="os-container">
      <div className="process">
        <div className="process-circle"></div>
        <div className="process-bg"></div>
        <div className="process-text">GOOD</div>
      </div>
      {SYS_LIST.map(({ name, component: Component }) => (
        <div className="os-drag-item" key={name}>
          <div className="os-drag-item-name">{name}:</div>
          <div className="os-drag-item-value">{<Component />}</div>
        </div>
      ))}
    </div>
  );
};
