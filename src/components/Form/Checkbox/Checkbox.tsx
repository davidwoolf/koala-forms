import React, { useContext, useEffect } from "react";
import _get from "lodash/get";

// store
import { FormContext } from "@/utils/contexts/form.context";

// Components
import { Checkbox } from "@/components/Fields";

const FormCheckbox = (props) => {
  const { name, value, checked = false } = props;

  const [{ values, errors }, dispatch] = useContext(FormContext);

  useEffect(() => {
    dispatch({
      type: "SET_CHECKBOX",
      id: name,
      checked,
      value,
    });
  }, [checked]);

  return (
    <Checkbox
      {...props}
      onClick={(checked) => {
        dispatch({
          type: "SET_CHECKBOX",
          id: name,
          checked,
          value,
        });
      }}
      invalid={_get(errors, name, false)}
      checked={_get(values, name, []).includes(value)}
    />
  );
};

export default FormCheckbox;
