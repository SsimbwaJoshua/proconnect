import styled from "styled-components";
import MainNav from "./MainNav";

const StyledHeader = styled.header`
  /* background-color: blue; */
  padding: 2rem;
  display: flex;
  justify-content: space-between;
`;
const StyledSpan = styled.span`
  color: var(--primary-blue);
`;

export default function Header() {
  return (
    <StyledHeader>
      <h1>
        <StyledSpan>PRO</StyledSpan>Connect
      </h1>
      <MainNav />
    </StyledHeader>
  );
}
