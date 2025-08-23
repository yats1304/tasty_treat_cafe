import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <main style={{ padding: "30px" }}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
