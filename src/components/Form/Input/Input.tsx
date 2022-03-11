import React, { useContext, useEffect, useState } from "react";
import _get from "lodash/get";

// store
import { FormContext } from "@/utils/contexts/form.context";

// utilities
import { validateFormField } from "@/utils/validation/form-field";
import { checkRequiredStatus } from "@/utils/fields/checkRequiredStatus";

// Components
import { Input } from "@/components/Fields";

const FormInput = (props) => {
  const { name, required = false, validateAs = null, value } = props;

  const [{ errors, reviewErrors }, dispatch] = useContext(FormContext);

  useEffect(
    () =>
      checkRequiredStatus({
        name,
        value: value ?? "",
        required,
        dispatch,
      }),
    []
  );

  return (
    <Input
      {...props}
      onBlur={(event: React.FormEvent<HTMLInputElement>) => {
        const value = event?.currentTarget.value ?? "";
        const validation = validateFormField(name, value, validateAs);

        checkRequiredStatus({
          name,
          value,
          required,
          dispatch,
        });

        if (validation !== null) {
          dispatch({
            type: "SET_ERROR",
            value: [
              {
                id: name,
                type: "error",
                message: validation,
              },
            ],
          });
        }
      }}
      invalid={reviewErrors && errors.find((error) => error.id === name)}
    />
  );
};

export default FormInput;
