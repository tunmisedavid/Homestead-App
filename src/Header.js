// import { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";

import HeadLogo from "./HeadLogo";
import MiddleNavs from "./MiddleNavs";
import ContactUs from "./NavButton";
import SideMenu from "./SideMenu";

function HeaderComponent() {  
  return (
    <div className="bg-brand">
      <div className=" max-w-7xl flex items-center justify-between w-11/12 m-auto h-10 md:h-14">
        <div className="flex  items-center gap-1 ">
          <HeadLogo />
          <NavLink
            to="/"
            className="text-white font-epilogue font-medium text-lg "
          >
            Homestead
          </NavLink>
        </div>
        <div>
          <MiddleNavs />
        </div>
        <NavLink to="/ContactComp">
          <ContactUs />
        </NavLink>
        {/* <div className="md:hidden"> */}
        {/* <SideMenu /> */}
        {/* </div> */}
      </div>
    </div>
  );
}

export default HeaderComponent;