import React, { useMemo } from 'react';
import './index.less';

export const PreNext: React.FC<PreProps> = ({
  bg = '#586472',
  borderColor = '#586472',
  iconColor = '',
  onChange,
  nextDisabled,
  preDisabled,
}) => {
  const handleClick = (op: Direction) => {
    onChange?.(op);
  };
  const initStyle: Partial<React.CSSProperties> = useMemo(
    () => ({
      backgroundColor: bg,
      borderColor,
    }),
    [borderColor, bg],
  );
  const iconStyle: Partial<React.CSSProperties> = useMemo(
    () => ({
      color: iconColor,
    }),
    [iconColor],
  );
  return (
    <div className="common-op">
      <div
        className="common-op-pre"
        data-disabled={preDisabled}
        style={initStyle}
        onClick={() => handleClick('pre')}
      >
        <i className="iconfont icon-pre" style={iconStyle}></i>
      </div>
      <div
        className="common-op-next"
        data-disabled={nextDisabled}
        style={initStyle}
        onClick={() => handleClick('next')}
      >
        <i className="iconfont icon-pre" style={iconStyle}></i>
      </div>
    </div>
  );
};
