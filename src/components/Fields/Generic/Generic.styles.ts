import { styled } from "@/config/stitches";

export const Wrapper = styled("div", {
  position: "relative",
  transition: "all .175s ease",
});

export const Outline = styled("svg", {
  position: "absolute",
  pointerEvents: "none",
  inset: 0,
  zIndex: 0,

  "& path": {
    fill: "$white",
    stroke: "$black600",
    strokeWidth: 1,
    strokeLinecap: "square",
  },

  variants: {
    isFocused: {
      true: {
        "& path": {
          stroke: "$primary",
        },
      },
    },

    hasError: {
      true: {
        "& path": {
          stroke: "$critical",
        },
      },
    },
  },
});

export const Label = styled("label", {
  borderRadius: "$md",
  cursor: "text",
  color: "$black600",
  display: "flex",
  fontSize: "$text300",
  position: "absolute",
  bottom: "1px",
  left: "1px",
  top: "1px",
  margin: 0,
  padding: "$3",
  transition: "all .2s ease",
  transformOrigin: "0 0",
  zIndex: 3,

  variants: {
    isFocused: {
      true: {
        color: "$primary",
        transform: "scale(.625) translate3d(12px, -24px, 0)",
      },
    },
    hasError: {
      true: {
        color: "$critical",
      },
    },
  },
});

export const fieldStyles = {
  backgroundColor: "transparent",
  border: "none",
  borderRadius: "$md",
  cursor: "text",
  color: "$black900",
  fontFamily: "$body",
  fontSize: "$text300",
  margin: 0,
  padding: "$3",
  position: "relative",
  transition: "all .2s ease",
  width: "100%",
  zIndex: 2,

  variants: {
    hasError: {
      true: {
        color: "$critical",

        "&:focus": {
          color: "$black900",
        },
      },
    },
  },

  "&:focus": {
    borderColor: "$primary",
    outline: "none",
  },

  "&:autofill": {
    backgroundColor: "$white",
    "-webkit-box-shadow": "0 0 0 30px $white inset !important",
  },
  "&:-webkit-autofill": {
    backgroundColor: "$white",
    "-webkit-box-shadow": "0 0 0 30px $white inset !important",
  },
};
