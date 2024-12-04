import interact from 'interactjs';
import { useRef, useEffect, useState, CSSProperties } from 'react';

type Partial<T> = {
  [P in keyof T]?: T[P];
};

const defaultPosition = {
  width: 100,
  height: 100,
  x: 0,
  y: 0,
};

const defaultOption = {
  draggableAreaId: '',
};

export function useInteractJS(
  positionProps: Partial<typeof defaultPosition> = defaultPosition,
  option: Partial<typeof defaultOption> = defaultOption
) {
  const [position, setPosition] = useState({
    ...defaultPosition,
    ...positionProps,
  });

  const interactRef = useRef(null);

  const { draggableAreaId } = option;
  let { x, y } = position;

  const enable = () => {
    const draggableTarget = draggableAreaId
      ? document.querySelector(`#${draggableAreaId}`)
      : interactRef.current;

    interact(draggableTarget as unknown as HTMLElement)
      // ドラッグでコンポーネントを動かすための処理を追加
      .draggable({
        inertia: false,
      })
      .on('dragmove', (event) => {
        x += event.dx;
        y += event.dy;
        // ドラッグ後の座標をstateに保存する
        setPosition({
          ...position,
          x,
          y,
        });
      });
  };

  const disable = () => {
    interact(interactRef.current as unknown as HTMLElement).unset();
  };

  useEffect(() => {
    enable();
    return disable;
  }, []);

  return {
    ref: interactRef,
    style: {
      transform: `translate3D(${position.x}px, ${position.y}px, 0)`,
      position: 'absolute' as CSSProperties['position'],
      width: position.width + 'px', // <= 大きさを要素に適用するためにスタイルを追加
      height: position.height + 'px', // <= 大きさを要素に適用するためにスタイルを追加
    },
  };
}
