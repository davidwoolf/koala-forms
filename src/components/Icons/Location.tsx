import { styled } from "@/config/stitches";

const Box = styled("svg", {
  transition: "all .1s ease",
});

export const Location = ({ css = { stroke: "$black600" } }) => (
  <Box css={css} width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M2.02751 2.66356L5.69032 13.245C5.72481 13.3447 5.78992 13.4309 5.87634 13.4913C5.96276 13.5517 6.06607 13.5832 6.1715 13.5814C6.27693 13.5796 6.37908 13.5444 6.46335 13.4811C6.54762 13.4177 6.60969 13.3293 6.6407 13.2285L8.11293 8.44378C8.13691 8.36583 8.1796 8.29493 8.23726 8.23727C8.29493 8.1796 8.36583 8.13691 8.44377 8.11293L13.2285 6.6407C13.3293 6.6097 13.4177 6.54762 13.4811 6.46335C13.5444 6.37908 13.5796 6.27693 13.5814 6.1715C13.5832 6.06607 13.5517 5.96277 13.4913 5.87634C13.4308 5.78992 13.3447 5.72481 13.245 5.69032L2.66356 2.02751C2.57489 1.99681 2.47937 1.99169 2.38792 2.01272C2.29648 2.03376 2.2128 2.0801 2.14645 2.14645C2.0801 2.2128 2.03376 2.29648 2.01272 2.38792C1.99169 2.47937 1.99681 2.57489 2.02751 2.66356V2.66356Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Box>
);