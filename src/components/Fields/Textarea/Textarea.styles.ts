import { styled } from "@/config/stitches";
import { fieldStyles } from "../Generic/Generic.styles";

export const Element = styled("textarea", {
  ...fieldStyles,
  height: "$48",
  resize: "none",
});
