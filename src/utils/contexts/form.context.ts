import React from "react";

export const FormContext = React.createContext({});

export const getFormData = (target: HTMLFormElement) => {
  const formData = new FormData(target);
  let entries = {};

  // This needs to be refactored
  for (var p of formData) {
    let name = p[0];
    let value = p[1];

    if (name in entries) {
      entries = {
        ...entries,
        [name]: [entries[name]].flat().concat([value]),
      };
    } else {
      entries = {
        ...entries,
        [name]: value,
      };
    }
  }

  return entries;
};
