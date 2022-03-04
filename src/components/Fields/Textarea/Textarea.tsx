import _debounce from "lodash/debounce";

// Styles
import { Wrapper, Label, Outline } from "../Generic/Generic.styles";
import { Element } from "./Textarea.styles";

// Utils
import { usePathOutline } from "@/utils/fields/usePathOutline";

const getUnfocusedPathDimensions = (pathBounds: DOMRect) => {
  return `M9 1 H${pathBounds.width - 9} a8,8 0 0 1 8,8 V${
    pathBounds.height - 9
  } a8,8 0 0 1 -8,8 H9 a8,8 0 0 1 -8,-8 V9 a8,8 0 0 1 8,-8 Z`;
};

const Textarea = (props) => {
  const {
    css = {},
    dir = "ltr",
    description,
    onBlur,
    onChange,
    onFocus,
    invalid,
    label,
    sublabel,
    ...otherProps
  } = props;

  const { inputRef, labelRef, focus, setFocus, bounds, path } =
    usePathOutline();

  return (
    <Wrapper css={css} dir={dir}>
      {label && (
        <Label
          isFocused={focus}
          ref={labelRef}
          onClick={() => inputRef.current?.focus()}
          hasError={invalid}
        >
          {label}
        </Label>
      )}

      <Outline
        isFocused={focus}
        width={bounds?.width}
        hasError={invalid}
        height={bounds?.height}
        viewBox={`0 0 ${bounds?.width} ${bounds?.height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={path} />
      </Outline>

      <Element
        {...otherProps}
        ref={inputRef}
        dir={dir}
        hasError={invalid}
        onFocus={(event) => {
          setFocus(true);

          onFocus && onFocus(event);
        }}
        onBlur={(event) => {
          setFocus(event.target.value ? true : false);

          onBlur && onBlur(event);
        }}
        onChange={(event) => {
          onChange && onChange(event);
        }}
      ></Element>
    </Wrapper>
  );
};

export default Textarea;
