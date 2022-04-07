import './index.less';

export const Loading: React.FC<{ color?: string }> = ({ color = '#222d38' }) => {
  return <div className="loading" style={{ borderColor: color }} />;
};
