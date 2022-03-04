import React, { useContext, useEffect, useState } from "react";
import _get from "lodash/get";

// store
import { FormContext } from "@/utils/contexts/form.context";

// utilities
import { validateFormField } from "@/utils/validation/form-field";

// Components
import { Input } from "@/components/Fields";

const FormInput = (props) => {
  const { name, required = false, value = "", validateAs = null } = props;

  const [{ errors }, dispatch] = useContext(FormContext);

  // useEffect(() => {
  //   dispatch({
  //     type: "SET_VALUE",
  //     id: name,
  //     value,
  //   });
  // }, [value]);

  return (
    <Input
      {...props}
      // onChange={(value) => {
      //   dispatch({
      //     type: "SET_VALUE",
      //     id: name,
      //     value,
      //   });
      // }}
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
      invalid={errors.includes(name)}
    />
  );
};

export default FormInput;
