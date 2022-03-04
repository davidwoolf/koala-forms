import { styled } from "@/config/stitches";
import { fieldStyles } from "../Generic/Generic.styles";

export const Element = styled("input", {
  ...fieldStyles,
  alignItems: "center",
  height: "$12",
});
