import { useRef, MouseEvent } from "react";

export function useDragScroll<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const cleanupStyles = () => {
    if (!ref.current) return;
    ref.current.style.scrollSnapType = "";
    ref.current.style.cursor = "grab";
    ref.current.style.userSelect = "";
    Array.from(ref.current.children).forEach((child) => {
      (child as HTMLElement).style.pointerEvents = "";
    });
  };

  const onMouseDown = (e: MouseEvent<T>) => {
    if (!ref.current) return;
    isDown.current = true;
    
    // Inject smooth drag styles natively
    ref.current.style.scrollSnapType = "none";
    ref.current.style.cursor = "grabbing";
    ref.current.style.userSelect = "none";
    
    // Disable child pointer events to prevent ghost clicks or image dragging
    Array.from(ref.current.children).forEach((child) => {
      (child as HTMLElement).style.pointerEvents = "none";
    });

    startX.current = e.pageX - ref.current.offsetLeft;
    scrollLeft.current = ref.current.scrollLeft;
  };

  const onMouseLeave = () => {
    if (!isDown.current) return;
    isDown.current = false;
    cleanupStyles();
  };

  const onMouseUp = () => {
    if (!isDown.current) return;
    isDown.current = false;
    cleanupStyles();
  };

  const onMouseMove = (e: MouseEvent<T>) => {
    if (!isDown.current || !ref.current) return;
    e.preventDefault();
    const x = e.pageX - ref.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // Drag speed multiplier
    ref.current.scrollLeft = scrollLeft.current - walk;
  };

  return {
    ref,
    events: {
      onMouseDown,
      onMouseLeave,
      onMouseUp,
      onMouseMove,
    },
  };
}
