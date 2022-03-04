import React from "react";

export const FormContext = React.createContext({});

export const getFormData = (target: HTMLFormElement) => {
  const formData = new FormData(target);
  let entries = {};

  for (var p of formData) {
    let name = p[0];
    let value = p[1];

    entries = {
      ...entries,
      [name]: value,
    };
  }

  return entries;
};
