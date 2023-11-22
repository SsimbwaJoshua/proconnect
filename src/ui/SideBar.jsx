import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledSideBar = styled.aside`
  background-color: yellow;
  grid-row: 1/-1;
  padding: 3rem;
`;

export default function SideBar() {
  return (
    <StyledSideBar>
      <h2>Side Menu</h2>
      <Link to="profile">Profile</Link>
      <p>search bar</p>
      <p>recent activity</p>
      <p> settings and theme switcher</p>
      <p>help/support</p>
    </StyledSideBar>
  );
}

// Collapse/Expand:
// Notifications:

// Submenus:

// User Profile:
// A user profile section with the user's name, avatar, or profile picture. This can include options for account settings, preferences, or logging out.
// Search Bar:

// If the application involves notifications, a sidebar might display a section for recent notifications or alerts.
// Dashboard Overview:

// Settings:

// Help/Support:

// A link or section dedicated to help resources, documentation, or customer support.
// Theme Switcher:

// If the application supports different themes (light/dark mode), a sidebar may include an option to switch between them.
// Recent Activity:
