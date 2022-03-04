import React, { useContext, useEffect, useState } from "react";
import _get from "lodash/get";

// Components
import { Button } from "@/components/Fields";

const FormSubmit = (props) => {
  const { value = "", ...otherProps } = props;

  return (
    <Button {...otherProps} type="submit" variant="primary">
      {value}
    </Button>
  );
};

export default FormSubmit;
