import React, { useReducer, useMemo, useContext, useEffect } from "react";
import _get from "lodash/get";

// Contexts
import { FormContext, getFormData } from "@/utils/contexts/form.context";

// Styles
import { Element } from "./Container.styles";

// Types
import type * as Stitches from "@stitches/react";
interface FormProps {
  children: any;
  css: Stitches.CSS;
  onChange: (data: any) => void;
  onSubmit: (data: any) => void;
}

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ERROR":
      return {
        ...state,
        errors: state.errors
          .filter((error) => error.id !== action.value.name)
          .concat([action.value]),
      };
    case "REMOVE_ERROR":
      return {
        ...state,
        errors: state.errors.filter((error) => error.id !== action.id),
      };
    case "SET_SUBMITTING":
      return {
        ...state,
        submittingForm: action.value,
      };
    case "SET_REVIEW_ERRORS":
      return {
        ...state,
        reviewErrors: action.value,
      };
    default:
      throw new Error();
  }
};

const FormElement: React.FC<FormProps> = ({
  children,
  css,
  onChange,
  onSubmit,
}) => {
  const [{ errors, submittingForm }, dispatch] = useContext(FormContext);

  return (
    <Element
      css={css}
      onSubmit={(e) => {
        e.preventDefault();

        if (errors.length) {
          dispatch({
            type: "SET_REVIEW_ERRORS",
            value: true,
          });
        } else {
          dispatch({
            type: "SET_REVIEW_ERRORS",
            value: false,
          });

          dispatch({
            type: "SET_SUBMITTING",
            value: true,
          });

          onSubmit({
            data: getFormData(e.target),
            errors,
            setSubmitting: (value) => {
              dispatch({
                type: "SET_SUBMITTING",
                value,
              });
            },
          });
        }
      }}
    >
      {children({
        isSubmitting: submittingForm,
        isLoadingFields: false,
      })}
    </Element>
  );
};

const Form: React.FC<FormProps> = (props) => {
  let [state, dispatch] = useReducer(reducer, {
    values: {},
    errors: [],
    isSubmitting: false,
  });

  let formProvider = useMemo(() => {
    return [state, dispatch];
  }, [state, dispatch]);

  return (
    <FormContext.Provider value={formProvider}>
      <FormElement {...props} />
    </FormContext.Provider>
  );
};

export default Form;
