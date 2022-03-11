import { validatePrice } from "@/utils/validation/price";

export const validateFormField = (name, value, validateAs): null | string => {
  if (!value) {
    return null;
  }

  switch (validateAs) {
    case "price":
      return validatePrice(value) ? null : "invalid price";
    case "number":
      return !isNaN(value) ? null : "invalid number";
    default:
      return null;
  }
};
