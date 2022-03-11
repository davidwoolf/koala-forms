import React, { useContext, useEffect } from "react";
import _get from "lodash/get";

// store
import { FormContext } from "@/utils/contexts/form.context";

// utilities
import { validateFormField } from "@/utils/validation/form-field";

// Components
import { Select } from "@/components/Fields";

const FormSelect = (props) => {
  const { children, name, required = false, validateAs = null } = props;

  const [{ errors }, dispatch] = useContext(FormContext);

  return (
    <Select
      {...props}
      onBlur={(event: React.FormEvent<HTMLInputElement>) => {
        validateFormField(
          name,
          event?.current.value,
          validateAs,
          required,
          dispatch
        );
      }}
      onFocus={() => {
        dispatch({
          type: "REMOVE_ERROR",
          id: name,
        });
      }}
      invalid={_get(errors, name, false)}
    >
      {children}
    </Select>
  );
};

export default FormSelect;
