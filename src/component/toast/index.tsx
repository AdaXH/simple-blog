import { useRef } from 'react';
import { useMount, useUnMount } from '@/util';
import reactDom from 'react-dom';

import './index.less';

const Component: React.FC<{ msg: string; close: VoidFunction; timer?: number }> = ({
  msg,
  close,
  timer = 4000,
}) => {
  const ref = useRef<NodeJS.Timer>();
  useUnMount(() => {
    clearTimeout(ref.current as NodeJS.Timer);
    close();
  });
  useMount(() => {
    clearTimeout(ref.current as NodeJS.Timer);
    ref.current = setTimeout(close, timer);
  });
  return <div className="toast">{msg}</div>;
};

export const toast = (msg: string) => {
  const preToast = document.querySelector(`#${domId}`);
  if (preToast) {
    document.body.removeChild(preToast);
  }
  const container = getContainer();
  const close = () => document.body.removeChild(container);
  reactDom.render(<Component msg={msg} close={close} />, container);
};

const domId = 'toast-container';

function getContainer() {
  let dom = document.querySelector(`#${domId}`);
  if (dom) return dom;
  dom = document.createElement('span');
  dom.id = domId;
  document.body.appendChild(dom);
  return dom;
}
