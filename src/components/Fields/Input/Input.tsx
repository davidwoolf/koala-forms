import React, { useRef, useEffect } from "react";
import _debounce from "lodash/debounce";
import type * as Stitches from "@stitches/react";

// Styles
import {
  Action,
  Icon,
  Wrapper,
  Label,
  Loading,
  Outline,
  Footnote,
} from "../Generic/Generic.styles";
import { Element } from "./Input.styles";

// Utils
import { usePathOutline } from "@/utils/fields/usePathOutline";

interface ComponentProps {
  css: Stitches.CSS;
  onBlur: React.FormEventHandler<HTMLInputElement>;
  onFocus: React.FormEventHandler<HTMLInputElement>;
  action?: Element;
  description?: string;
  dir?: string;
  icon?: Element;
  label?: string;
  sublabel?: string;
  invalid?: boolean;
  loading?: boolean;
  required?: boolean;
  value?: string;
}

const Input: React.FC<ComponentProps> = (props) => {
  const {
    action,
    css = {},
    dir = "ltr",
    description,
    onBlur,
    onFocus,
    invalid,
    icon,
    label,
    loading,
    sublabel,
    required,
    value,
    ...otherProps
  } = props;

  const { containerRef, labelRef, focus, setFocus, bounds, path } =
    usePathOutline(true);

  const inputRef = useRef<HTMLInputElement>();

  useEffect(() => {
    if (inputRef.current && value) {
      setFocus(true);

      inputRef.current.value = value;
    }
  }, [value]);

  return (
    <div>
      <Wrapper css={css} dir={dir} ref={containerRef}>
        {loading && <Loading />}

        {!loading && (
          <>
            {label && (
              <Label
                isFocused={focus}
                hasIcon={icon ? true : false}
                ref={labelRef}
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

            {icon && <Icon>{icon}</Icon>}

            <Element
              {...otherProps}
              dir={dir}
              ref={inputRef}
              hasError={invalid}
              onFocus={(event: React.FormEvent<HTMLInputElement>) => {
                setFocus(true);

                onFocus && onFocus(event);
              }}
              onBlur={(event: React.FormEvent<HTMLInputElement>) => {
                setFocus(event.currentTarget.value ? true : false);

                onBlur && onBlur(event);
              }}
            />

            {action && <Action>{action}</Action>}
          </>
        )}
      </Wrapper>

      {invalid && <Footnote dir={dir}>{invalid.message}</Footnote>}
    </div>
  );
};

export default Input;
