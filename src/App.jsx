import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import ChartRoom from "./pages/ChartRoom";
import Blog from "./pages/Blog";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate replace to={"home"} />} />
        <Route path="home" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="chartroom" element={<ChartRoom />} />
        <Route path="profile" element={<Profile />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
