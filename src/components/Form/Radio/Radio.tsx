import React, { useContext, useEffect } from "react";
import _get from "lodash/get";

// store
import { FormContext } from "@/utils/contexts/form.context";

// Components
import { Radio } from "@/components/Fields";

const FormRadio = (props) => {
  const { name, value } = props;

  const [{ values, errors }, dispatch] = useContext(FormContext);

  useEffect(() => {
    dispatch({
      type: "SET_VALUE",
      id: name,
      value,
    });
  }, [value]);

  return (
    <Radio
      {...props}
      onClick={() => {
        dispatch({
          type: "SET_VALUE",
          id: name,
          value,
        });
      }}
      invalid={_get(errors, name, false)}
      checked={_get(values, name, "") === value}
    />
  );
};

export default FormRadio;
