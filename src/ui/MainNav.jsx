import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    color: var(--primary-blue);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    text-decoration: none;
    transition: all 0.3s;
  }

  /* hover and active*/
  &:hover,
  &:active,
  &.active {
    color: var(--sky-blue);
    text-decoration: underline;
  }
`;

const UL = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
`;

export default function MainNav() {
  return (
    <nav>
      <UL>
        <li>
          <StyledNavLink to="chartroom">ChartRoom</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="home">Home</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="blog">Blog</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="profile">Profile</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="login">Login</StyledNavLink>
        </li>
      </UL>
    </nav>
  );
}
