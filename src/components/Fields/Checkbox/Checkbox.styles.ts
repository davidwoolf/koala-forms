import { styled } from "@/config/stitches";

export const Label = styled("label", {
  alignItems: "center",
  cursor: "default",
  display: "inline-flex",
  gap: "$2",
  transition: "colors .1s ease",
});

export const Input = styled("input", {
  appearance: "none",
  background: "$white",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  border: "2px solid $black900",
  borderRadius: "$sm",
  cursor: "pointer",
  height: "$4-5",
  transition: "background-color .1s ease",
  width: "$4-5",

  "&:hover": {
    borderColor: "$black600",
  },

  "&:focus": {
    outline: "2px solid $primary",
  },

  "&:checked": {
    backgroundColor: "$primary",
    backgroundImage:
      "url(\"data:image/svg+xml,%3Csvg width='10' height='8' viewBox='0 0 10 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M3.31476 7.858L0.132954 4.441C-0.044318 4.253 -0.044318 3.947 0.132954 3.757L0.775678 3.074C0.95295 2.886 1.24113 2.886 1.4184 3.074L3.63657 5.466L8.5811 0.141C8.75837 -0.047 9.04655 -0.047 9.22382 0.141L9.86655 0.825C10.0438 1.013 10.0438 1.32 9.86655 1.507L3.95748 7.858C3.78021 8.046 3.49203 8.046 3.31476 7.858Z' fill='white'/%3E%3C/svg%3E%0A\")",
    borderColor: "$primary",
  },

  "&:disabled": {
    backgroundColor: "$black600",
    borderColor: "$black600",
    cursor: "not-allowed",
  },
});
