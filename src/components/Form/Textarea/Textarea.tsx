import React, { useContext, useEffect } from "react";
import _get from "lodash/get";

// store
import { FormContext } from "@/utils/contexts/form.context";

// utilities
import { validateFormField } from "@/utils/validation/form-field";

// Components
import { Textarea } from "@/components/Fields";

const FormTextarea = (props) => {
  const { name, required = false, validateAs = null } = props;

  const [{ errors }, dispatch] = useContext(FormContext);

  return (
    <Textarea
      {...props}
      onBlur={(event) => {
        validateFormField(
          name,
          event?.target.value,
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
    />
  );
};

export default FormTextarea;
