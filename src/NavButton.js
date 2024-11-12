import { Route, Routes, useNavigate } from "react-router-dom";
import ContactUsComp from "./ContactComp";

function ContactUs() {
  const navigate = useNavigate();

  const handleContactNavigate = () => {
    navigate("/ContactUsComp");
  };

  return (
    <div className=" hidden md:flex ">
      <button
        // onClick={handleContactNavigate}
        className="font-bold text-base lg:text-lg bg-brand md:bg-white text-white md:text-black border-none w-28 lg:w-32 h-9 rounded-2xl"
      >
        Contact us
      </button>
      {/* <Routes>
        <Route path="/ContactUsComp" element={<ContactUsComp />} />
      </Routes> */}
    </div>
  );
}
export default ContactUs;

//fixed right-1 top-60 z-20