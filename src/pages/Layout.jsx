import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import AutoScroll from "../components/AutoScrollComponent";
import FooterComponent from "../components/FooterComponent";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <AutoScroll />
      <NavbarComponent />
      <div className="container items-center justify-center mx-auto max-w-screen-xl">
        <main>{children}</main>
      </div>
      {/* <FooterComponent /> */}
      <FooterComponent />
    </React.Fragment>
  );
};

export default Layout;
