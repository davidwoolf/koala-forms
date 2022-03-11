import { styled } from "@/config/stitches";

const Box = styled("svg", {
  transition: "all .1s ease",
});

export const CaretDown = ({ css = { stroke: "$black900" } }) => (
  <Box css={css} width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M2 6L8 12L14 6" strokeLinecap="round" strokeLinejoin="round" />
  </Box>
);
