import { useState } from "react";
import CloseNavBar from "./CloseNavBar";
import OpenNav from "./OpenNavBar";
import CoverMenu from "./CoverMenu";
import ContactUs from "./NavButton";

function SideMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = () => {
    setIsOpen(!isOpen);
  };

  

  return (
    <div>
      <div
        className={`fixed right-0 top-0 bottom-0 h-full ${
          !isOpen ? "" : "w-36"
        } w-0 bg-white shadow-md flex flex-col gap-2 pt-10 transition-all duration-[200ms] ease-in-out z-10`}
      >
        <div className="side-menu-navs">
          <a href="">About Us</a>
        </div>
        <div className="side-menu-navs">
          <a href="">Management </a>
        </div>
        <div className="side-menu-navs">
          <a href="">Project</a>
        </div>
        <div className="side-menu-navs">
          <a href="">FAQ's</a>
        </div>
        {/* <NavLink to='/ContactComp'>
        Contact us the 
        </NavLink> */}
        {/* <button  className="font-bold text-xs bg-brand text-white border-none w-24 ml-2 h-9 rounded-xl">
          Contact Us
        </button> */}
        <div>
          {<ContactUs />}
        </div>
      </div>
      <div onClick={handleNav}>{isOpen ? <CoverMenu /> : ""}</div>
    </div>
  );
}

export default SideMenu;