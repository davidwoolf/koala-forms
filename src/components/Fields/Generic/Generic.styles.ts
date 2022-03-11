import { keyframes, styled } from "@/config/stitches";

export const Wrapper = styled("div", {
  alignItems: "center",
  display: "flex",
  position: "relative",
  transition: "all .175s ease",
});

export const Action = styled("div", {
  height: "$12",
  padding: "$3",
  position: "relative",
  width: "$12",
  zIndex: 4,

  "& button, & a": {
    inset: 0,
    position: "absolute",
  },
});

export const Icon = styled("div", {
  padding: "0 0 0 $3",
  position: "relative",
  zIndex: 4,
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
  zIndex: 1,

  variants: {
    isFocused: {
      true: {
        color: "$primary",
        transform: "scale(.625) translate3d(12px, -24px, 0)",
      },
    },
    hasIcon: {
      true: {},
    },
    hasError: {},
  },

  compoundVariants: [
    {
      isFocused: false,
      hasIcon: true,
      css: {
        transform: "translateX(24px)",
      },
    },
    {
      isFocused: true,
      hasIcon: true,
      css: {
        transform: "scale(.625) translate3d(12px, -24px, 0)",
      },
    },
    {
      isFocused: true,
      hasIcon: false,
      css: {
        transform: "scale(.625) translate3d(12px, -24px, 0)",
      },
    },
  ],
});

export const Footnote = styled("span", {
  color: "$critical",
  display: "block",
  fontSize: "$text200",
  paddingTop: "$1",
});

export const fieldStyles = {
  backgroundColor: "transparent",
  border: "none",
  cursor: "text",
  color: "$black",
  flex: 1,
  fontFamily: "$body",
  fontSize: "$text300",
  margin: 0,
  padding: "$3",
  position: "relative",
  transition: "all .2s ease",

  zIndex: 2,

  variants: {
    hasError: {
      true: {},
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

const moveLoadingIndicator = keyframes({
  "0%": { transform: "translateX(-100%)" },
  "100%": { transform: "translateX(100%)" },
});

export const Loading = styled("div", {
  backgroundColor: "$black900",
  borderRadius: "$md",
  padding: "$3",
  paddingLeft: "14px",
  height: "100%",

  overflow: "hidden",
  position: "relative",
  width: "100%",
  zIndex: 4,

  "&:before": {
    backgroundColor: "rgba(0,0,0,.05)",
    borderRadius: "$sm",
    content: "",
    display: "block",
    height: "$6",
    position: "relative",
    width: "120px",
    zIndex: 2,
  },

  "&:after": {
    animation: `${moveLoadingIndicator} 0.8s ease infinite`,
    background:
      "linear-gradient(90deg, $black900 0%, $white 47.4%, $black900 100%)",
    content: "",
    height: "100%",
    left: 0,
    position: "absolute",
    top: 0,
    transform: "translateX(-100%)",
    width: "100%",
    zIndex: 1,
  },
});
