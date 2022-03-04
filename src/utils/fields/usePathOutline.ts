import { useState, useEffect, useRef } from "react";

const getUnfocusedPathDimensions = (pathBounds: DOMRect) => {
  return `M9 1 H${pathBounds.width - 9} a8,8 0 0 1 8,8 V${
    pathBounds.height - 9
  } a8,8 0 0 1 -8,8 H9 a8,8 0 0 1 -8,-8 V9 a8,8 0 0 1 8,-8 Z`;
};

export const usePathOutline = () => {
  const inputRef = useRef<HTMLInputElement>();
  const labelRef = useRef<HTMLLabelElement>();

  const [focus, setFocus] = useState(false);
  const [bounds, setBounds] = useState<DOMRect>();
  const [path, setPath] = useState("M0 0");

  /*
   * setup our input bounds when the ref is ready
   */
  useEffect(() => {
    if (inputRef.current) {
      const inputBounds = inputRef.current.getBoundingClientRect();
      setBounds(inputBounds);
    }
  }, [inputRef]);

  /*
   * set our path when the bounds are ready
   */
  useEffect(() => {
    if (bounds) {
      setPath(getUnfocusedPathDimensions(bounds));
    }
  }, [bounds]);

  /*
   * change our path when the input is in and out of focus
   */
  useEffect(() => {
    if (labelRef.current && focus === true) {
      const labelBounds = labelRef.current.getBoundingClientRect();

      setPath(
        `M9 1 H12 m ${labelBounds.width * 0.6} 0 H${
          bounds?.width - 9
        } a8,8 0 0 1 8,8 V${
          bounds?.height - 9
        } a8,8 0 0 1 -8,8 H9 a8,8 0 0 1 -8,-8 V9 a8,8 0 0 1 8,-8`
      );
    }

    if (bounds && focus !== true) {
      setPath(getUnfocusedPathDimensions(bounds));
    }
  }, [focus]);

  return {
    inputRef,
    labelRef,
    focus,
    setFocus,
    bounds,
    path,
  };
};
