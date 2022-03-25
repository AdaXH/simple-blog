import { CONTACTS, MY_INFO } from './constant';
import './index.less';

export const AboutMe = () => {
  return (
    <div className="aboutme">
      <div className="aboutme-basic">
        {MY_INFO.map(({ name, value }) => (
          <div className="aboutme-basic-item" key={name}>
            <div className="aboutme-basic-item-name">{name}</div>
            <div className="aboutme-basic-item-value">{value}</div>
          </div>
        ))}
      </div>
      <div className="aboutme-line"></div>
      {CONTACTS.map(({ name, component: Component }) => (
        <div className="aboutme-basic-item" key={name}>
          <div className="aboutme-basic-item-name">{name}</div>
          <div className="aboutme-basic-item-value">
            {typeof Component === 'function' ? Component() : <Component />}
          </div>
        </div>
      ))}
    </div>
  );
};
