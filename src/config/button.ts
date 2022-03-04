export const buttonStyles = {
  appearance: "none",
  "-webkit-appearance": "none",
  alignItems: "center",
  borderRadius: "$md",
  border: "0",
  boxSizing: "border-box",
  display: "inline-flex",
  cursor: "pointer",
  fontFamily: "$body",
  fontSize: "$text300",
  fontWeight: 600,
  height: "$12",
  justifyContent: "center",
  lineHeight: 1,
  overflow: "hidden",
  paddingY: "$2-5",
  paddingX: "$3",
  position: "relative",
  textAlign: "left",
  textDecoration: "none",
  transition: "all 125ms ease",

  "&::contents": {
    position: "relative",
    zIndex: 1,
  },

  "&:before": {
    content: "",
    position: "absolute",
    inset: 0,
    zIndex: -2,
  },

  "&:after": {
    content: "",
    background: "rgba(0, 0, 0, .2)",
    display: "block",
    opacity: 0,
    position: "absolute",
    transition: "all .2s ease",
    inset: 0,
    zIndex: -1,
  },

  "&:focus": {
    outline: "none",
  },

  "@md": {
    paddingX: "$5",
  },

  variants: {
    size: {
      small: {
        height: "$7",
        paddingY: "$1-5",
        paddingX: "$2-5",

        "@md": {
          height: "$8",
        },
      },
      tiny: {
        fontSize: "$text200",
        height: "$6",
        paddingY: "$0-5",
        paddingX: "$1-5",

        "@md": {
          height: "$7",
        },
      },
    },

    variant: {
      normal: {
        backgroundColor: "$black200",
        color: "$black800",

        "&:hover": {
          background: "$black210",
          color: "$black800",
        },

        ".dark &": {
          backgroundColor: "$black100",
          color: "$black900",
        },
      },
      primary: {
        background: "transparent",
        color: "#FFFFFF",

        "&:before": {
          background: "$primary",
        },

        "&:hover:after": {
          opacity: 1,
        },
        "&:active": {
          background: "$primary_pressed",
        },
      },
      warning: {
        background: "transparent",
        color: "$red400",

        "&:hover": {
          background: "$red400",
          color: "$black000",
        },
      },
      simple: {
        background: "transparent",
        color: "$text900",
      },
      plain: {
        background: "transparent",
        color: "$text900",
        padding: 0,
      },
    },
  },
};
