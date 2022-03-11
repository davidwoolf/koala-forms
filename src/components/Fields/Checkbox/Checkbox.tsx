import React from "react";
import _get from "lodash";

import { Text } from "@/components/Layout";

import { Input, Label } from "./Checkbox.styles";

const Checkbox = (props) => {
  const { css = {}, dir = "ltr", label = false, ...otherProps } = props;

  return (
    <Label css={css} dir={dir}>
      <Input type="checkbox" {...otherProps} />

      {label && (
        <Text dir={dir} size="label" weight="regular">
          {label}
        </Text>
      )}
    </Label>
  );
};

export default Checkbox;
