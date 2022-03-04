import React from "react";

// Components
import { Text } from "@/components/Layout";

// Styles
import { Element } from "./Fieldset.styles";

const Fieldset = ({ children, dir, label }) => (
  <Element>
    {label && (
      <Text dir={dir} size="label" weight="medium">
        {label}
      </Text>
    )}

    <div>{children}</div>
  </Element>
);

export default Fieldset;
