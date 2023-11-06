import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { createPortal } from "react-dom";
import { MyProfile } from "../others/MyProfile";

const PageLayout = () => {
  return (
    <>
      <Navbar />
      <section className="main">
        <Outlet />
      </section>
      {createPortal(<MyProfile />, document.body)}
    </>
  );
};
export default PageLayout;
