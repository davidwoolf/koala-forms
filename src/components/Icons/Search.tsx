import { styled } from "@/config/stitches";

const Box = styled("svg", {
  transition: "all .1s ease",
});

export const Search = ({ css = { stroke: "$black600" } }) => (
  <Box css={css} width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M7.25 12.5C10.1495 12.5 12.5 10.1495 12.5 7.25C12.5 4.35051 10.1495 2 7.25 2C4.35051 2 2 4.35051 2 7.25C2 10.1495 4.35051 12.5 7.25 12.5Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.9622 10.9625L13.9997 14.0001"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Box>
);
