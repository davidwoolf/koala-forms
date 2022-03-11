import React, { useContext, useEffect } from "react";
import _get from "lodash/get";

// store
import { FormContext } from "@/utils/contexts/form.context";

// Components
import { Checkbox } from "@/components/Fields";

const FormCheckbox = (props) => {
  const { name } = props;

  const [{ errors }] = useContext(FormContext);

  return <Checkbox {...props} invalid={_get(errors, name, false)} />;
};

export default FormCheckbox;
