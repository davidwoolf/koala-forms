interface RequiredValidation {
  name: string;
  value: string;
  required: boolean;
  dispatch: Function;
}

export const checkRequiredStatus = ({
  name,
  value,
  required,
  dispatch,
}: RequiredValidation): void => {
  if (required && value === "") {
    dispatch({
      type: "SET_ERROR",
      value: {
        id: name,
        type: "required",
        message: "Required",
      },
    });
  } else {
    dispatch({
      type: "REMOVE_ERROR",
      id: name,
    });
  }
};
