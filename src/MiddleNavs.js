import { useState } from "react";
import OpenNav from "./OpenNavBar";
import CloseNavBar from "./CloseNavBar";
import CoverMenu from "./CoverMenu";
import { NavLink } from "react-router-dom";

function MiddleNavs() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className={`flex flex-col fixed md:static md:flex-row md:items-center md:w-full md:bg-transparent  ${
          !isOpen ? "" : "w-32"
        } bg-white w-0 md:shadow-none shadow-md top-0 bottom-0 h-full right-0 gap-2 pt-10 md:pt-0 transition-all duration-[200ms] ease-in-out z-10`}
      >
        <div
          className="md:hidden cursor-pointer top-2 right-4 w-6 h-6 border-2 border-black absolute rounded-sm "
          onClick={handleNav}
        >
          {isOpen ? <CloseNavBar /> : <OpenNav />}
        </div>
        <NavLink to="/AboutUs" className="side-menu-navs md:middle-navs">
          About Us
        </NavLink>
        <a href="" className="side-menu-navs md:middle-navs">
          Management
        </a>
        <NavLink to="/Projects" className="side-menu-navs md:middle-navs">
          Project
        </NavLink>
        <NavLink to="/Faqs" className="side-menu-navs md:middle-navs">
          FAQ's
        </NavLink>
      </div>
      <div onClick={handleNav}>{isOpen ? <CoverMenu /> : ""}</div>
    </div>
  );
}
export default MiddleNavs;
