import React from "react";
import _debounce from "lodash/debounce";
import type * as Stitches from "@stitches/react";

// Components
import { Text } from "@/components/Layout";

// Styles
import { Wrapper, Label, Outline } from "../Generic/Generic.styles";
import { Element } from "./Input.styles";

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

const Input: React.FC<ComponentProps> = (props) => {
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
      />

      {sublabel && (
        <Text
          as="span"
          dir={dir}
          size="footnote"
          weight="medium"
          css={{
            opacity: 0.7,
            marginTop: "-$1",
          }}
        >
          {sublabel}
        </Text>
      )}
    </Wrapper>
  );
};

export default Input;
