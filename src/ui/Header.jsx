import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: blue;
`;

export default function Header() {
  return (
    <StyledHeader>
      <h1>Header</h1>
    </StyledHeader>
  );
}
