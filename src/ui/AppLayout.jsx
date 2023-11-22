import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 24rem 1fr;
  grid-template-rows: auto 1fr;
`;

const Main = styled.main`
  background-color: #ccc;
  padding: 3rem;
`;

export default function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <SideBar />
      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
}
