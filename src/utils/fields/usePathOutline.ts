import { useState, useEffect, useRef, useCallback } from "react";
import throttle from "lodash/throttle";

const getUnfocusedPathDimensions = (pathBounds: DOMRect, rounded?: boolean) => {
  if (rounded) {
    return `M9 1 H${pathBounds.width - 9} a8,8 0 0 1 8,8 V${
      pathBounds.height - 9
    } a8,8 0 0 1 -8,8 H9 a8,8 0 0 1 -8,-8 V9 a8,8 0 0 1 8,-8 Z`;
  }

  return `M1 1 H${pathBounds.width - 1}  V${pathBounds.height - 1} H1 V1  Z`;
};

const getFocusedPathDimensions = (
  labelBounds: DOMRect,
  inputBounds: DOMRect,
  rounded?: boolean
) => {
  if (rounded) {
    return `M9 1 H12 m ${labelBounds.width * 0.6} 0 H${
      inputBounds?.width - 9
    } a8,8 0 0 1 8,8 V${
      inputBounds?.height - 9
    } a8,8 0 0 1 -8,8 H9 a8,8 0 0 1 -8,-8 V9 a8,8 0 0 1 8,-8`;
  }

  return `M1 1 H12 m ${labelBounds.width * 0.6} 0 H${
    inputBounds?.width - 1
  }  V${inputBounds?.height - 1} H1 V1`;
};

export const usePathOutline = (rounded?: boolean) => {
  const containerRef = useRef<HTMLInputElement>();
  const labelRef = useRef<HTMLLabelElement>();

  const [focus, setFocus] = useState(false);
  const [bounds, setBounds] = useState<DOMRect>();
  const [path, setPath] = useState("M0 0");

  /*
   * setup our input bounds when the ref is ready
   */
  useEffect(() => {
    if (containerRef.current) {
      const inputBounds = containerRef.current.getBoundingClientRect();
      setBounds(inputBounds);
    }
  }, [containerRef]);

  /*
   * change our path when the input is in and out of focus
   */
  useEffect(() => {
    if (bounds) {
      if (labelRef.current && focus) {
        const labelBounds = labelRef.current.getBoundingClientRect();

        setPath(getFocusedPathDimensions(labelBounds, bounds, rounded));
      } else {
        setPath(getUnfocusedPathDimensions(bounds, rounded));
      }
    }
  }, [focus, bounds]);

  // resizing
  const resizePath = useCallback(
    throttle(() => {
      if (containerRef.current) {
        const inputBounds = containerRef.current.getBoundingClientRect();
        setFocus(false);
        containerRef.current.blur();
        setBounds(inputBounds);
      }
    }, 100),
    [containerRef, bounds, focus]
  );

  useEffect(() => {
    window.addEventListener("resize", resizePath);

    return () => {
      window.removeEventListener("resize", resizePath);
    };
  });

  return {
    containerRef,
    labelRef,
    focus,
    setFocus,
    bounds,
    path,
  };
};
