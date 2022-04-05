import React, { createRef, ReactNode, useState } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import { stopPropagation, useUnMount } from '@/util';

import './index.less';

interface DragProp {
  children: ReactNode;
  className?: string;
  title?: ReactNode;
  operation?: boolean;
  close?: boolean;
  afterClose?: (...arg: any[]) => any;
  topBarColor?: string;
}
window.dragIndex = 0;

export const Drag: React.FC<DragProp> = ({
  children,
  className,
  title,
  operation,
  afterClose,
  close,
  topBarColor = '#fbfbfb',
}) => {
  const dragRef = createRef<HTMLDivElement>();
  const [scale, setScale] = useState<number>(operation ? 0.9 : 1);
  let listen: (ev: MouseEvent) => void;

  const hanldeClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const dragEl = dragRef.current;
    const { clientX, clientY } = e;
    const left = clientX - (dragEl?.offsetLeft || 0);
    const top = clientY - (dragEl?.offsetTop || 0);
    window.dragIndex++;
    // dragEl?.style?.cssText = dragIndex + '';
    dragEl!.style.zIndex = `${window.dragIndex}`;
    listen = function (ev: MouseEvent) {
      // dragEl!.style!.cssText = `left: ${ev.clientX - left}px;top: ${ev.clientY - top}px`;
      // dragEl!.style!.transform = `translate3d(${ev.clientX - left}px, ${ev.clientY - top}px, 0)`;
      dragEl!.style!.left = `${ev.clientX - left}px`;
      dragEl!.style!.top = `${ev.clientY - top}px`;
    };
    document.addEventListener('mousemove', listen);
    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', listen);
    });
  };
  useUnMount(() => {
    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', listen);
    });
  });
  const onScale = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setScale(scale >= 1 ? 0.9 : 1);
    e.stopPropagation();
  };
  return (
    <div
      className={classnames('drag', className)}
      ref={dragRef}
      style={{ transform: `scale(${scale})`, zIndex: window.dragIndex }}
    >
      <div className="drag-tool" style={{ backgroundColor: topBarColor }} onMouseDown={(e) => hanldeClick(e)}>
        {title && <div className="drag-tool-title">{title}</div>}
        {operation && (
          <div className="drag-tool-op">
            <div
              className="drag-tool-op-scale"
              onMouseDown={stopPropagation}
              onClick={(e) => onScale(e)}
            ></div>
            {close && (
              <div className="drag-tool-op-xx" onMouseDown={stopPropagation} onClick={afterClose}></div>
            )}
          </div>
        )}
      </div>
      <div className="drag-content">{children}</div>
    </div>
  );
};

let dragCount = 0;

export function createDrag(arg: Partial<DragProp>) {
  if (document.querySelector(`#importDrag-${dragCount - 1}`)) return;
  const target = document.createElement('div');
  target.id = `importDrag-${dragCount}`;
  target.style.cssText = `position: fixed;top:0;left:0;z-index:${window.dragIndex}`;
  document.body.appendChild(target);
  dragCount++;
  const { children, ...props } = arg;
  ReactDOM.render(
    <Drag {...props} afterClose={() => document.body.removeChild(target)}>
      {children}
    </Drag>,
    target,
  );
}
