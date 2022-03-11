import { styled } from "@/config/stitches";
import { fieldStyles } from "../Generic/Generic.styles";

export const IconWrapper = styled("div", {
  right: "$4",
  pointerEvents: "none",
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 1,

  variants: {
    isFocused: {
      true: {
        color: "$primary",
      },
    },
  },
});

export const Element = styled("select", {
  ...fieldStyles,
  alignItems: "center",
  appearance: "none",
  color: "transparent",
  height: "$12",

  variants: {
    isFocused: {
      true: {
        color: "$black",
      },
    },
  },
});
