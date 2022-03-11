import _debounce from "lodash/debounce";
import type * as Stitches from "@stitches/react";

// Styles
import { Wrapper, Label, Outline } from "../Generic/Generic.styles";
import { Element } from "./Textarea.styles";

// Utils
import { usePathOutline } from "@/utils/fields/usePathOutline";

interface ComponentProps {
  css: Stitches.CSS;
  onBlur: React.FormEventHandler<HTMLInputElement>;
  onChange: React.FormEventHandler<HTMLInputElement>;
  onFocus: React.FormEventHandler<HTMLInputElement>;
  description?: string;
  dir?: string;
  label?: string;
  sublabel?: string;
  invalid?: boolean;
}

const Textarea: React.FC<ComponentProps> = (props) => {
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

  const { containerRef, labelRef, focus, setFocus, bounds, path } =
    usePathOutline(true);

  return (
    <Wrapper css={css} dir={dir} ref={containerRef}>
      {label && (
        <Label isFocused={focus} ref={labelRef} hasError={invalid}>
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
