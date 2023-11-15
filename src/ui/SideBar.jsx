import styled from "styled-components";

const StyledSideBar = styled.aside`
  background-color: yellow;
  grid-row: 1/-1;
  padding: 3rem;
`;

export default function SideBar() {
  return <StyledSideBar>SideBar</StyledSideBar>;
}
