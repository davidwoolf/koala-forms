import { useEffect, useState, useRef } from "react";
import type * as Stitches from "@stitches/react";

// Utils
import { usePathOutline } from "@/utils/fields/usePathOutline";

// Components
import { Icon } from "@/components/Icons";
import { Text } from "@/components/Layout";

// Styles
import { Wrapper, Label, Outline } from "../Generic/Generic.styles";
import { Element, IconWrapper } from "./Select.styles";

interface ComponentProps {
  css: Stitches.CSS;
  children: HTMLOptionElement[];
  onBlur: React.FormEventHandler<HTMLInputElement>;
  onChange: React.FormEventHandler<HTMLInputElement>;
  onFocus: React.FormEventHandler<HTMLInputElement>;
  description?: string;
  dir?: string;
  label?: string;
  sublabel?: string;
  invalid?: boolean;
}

const Select: React.FC<ComponentProps> = (props) => {
  const {
    children,
    css = {},
    dir = "ltr",
    invalid = false,
    label = false,
    sublabel = false,
    onBlur,
    onChange,
    onFocus,
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
        onFocus={(event: React.FormEvent<HTMLInputElement>) => {
          setFocus(true);

          onFocus && onFocus(event);
        }}
        isFocused={focus}
        onBlur={(event: React.FormEvent<HTMLInputElement>) => {
          setFocus(event.currentTarget.value !== "0" ? true : false);

          onBlur && onBlur(event);
        }}
        onChange={(event: React.FormEvent<HTMLInputElement>) => {
          onChange && onChange(event);
        }}
      >
        <option value="0">— Select a value —</option>
        {children}
      </Element>

      <IconWrapper>
        <Icon.CaretDown
          css={{
            stroke: focus ? "$primary" : "$black600",
          }}
        />
      </IconWrapper>

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

export default Select;
