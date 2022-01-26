import styled from "styled-components";
import Flex from "./Flex";

const Container = styled(Flex).attrs({
  width: "100%",
  flexDirection: "column",
  alignItems: "stretch",
  justifyContent: "flex-start",
  flex: 1,
  bg: "background.main",
})`
  flex: 1 0 calc(100% - calc(132px + 2vw));
`;

export default function Page({ children }: { children: React.ReactNode }) {
  return <Container>{children}</Container>;
}
