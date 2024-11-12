import HeadLogo from "./HeadLogo";
import { NavLink, useNavigate, } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const goToGetStarted = () => {
    navigate('/GetStarted');
  };
  
  return (
    <div>
      <div className="bg-brand mt-0 pt-0 relative">
        <div className="max-w-7xl bg-brand w-11/12 pb-10  md:pb-20 lg:pb-40 xl:pb-44 xl:relative m-auto text-white font-epilogue pt-5 md:pt-7 lg:pt-10">
          <p className="font-epilogue font-semibold text-lg md:text-3xl lg:text-5xl w-[55%] md:w-[40%] lg:w-[50%] leading-[23px] md:leading-[30px] lg:leading-[55px] text-white">
            We create your future residence
          </p>
          <p className="text-[8px] md:text-[10px] lg:text-base w-[35%] md:w-[20%] lg:w-[25%] leading-3 md:leading-4 lg:leading-6 pt-4 font-normal text-white">
            Made for you convenience for a more beautiful future for you and
            your family
          </p>
          <div className="flex md:flex-row gap-[2px] md:gap-2 pt-3 lg:pt-4">
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-base md:text-lg lg:text-xl">
                $2.5M+
              </p>
              <p className="font-normal leading-[0px] text-[7px] md:text-[10px] lg:text-xs">
                Capital raised
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-base md:text-lg lg:text-xl">
                8.4M+
              </p>
              <p className="font-normal leading-[0px] text-[7px] md:text-[10px] lg:text-xs">
                Happy customer
              </p>
            </div>
          </div>
          <button onClick={goToGetStarted} className="bg-white font-bold text-xs md:text-base text-black w-24 h-7 md:w-32 md:h-10 mt-4 md:mt-5 lg:mt-6 rounded-3xl border-none outline-none">
            Get Started
          </button>
          <img
            className="absolute object-cover bottom-0 right-0 w-[55%] h-[70%] md:w-[72%]"
            src="/images/rectangle 748.png"
            alt=""
          />
        </div>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 max-w-7xl w-11/12 m-auto gap-2 mt-4 mb-4 md:mt-5 md:mb-5 md:gap-4">
        <img src="/images/rectangle 748.png" alt="" />
        <img src="/images/rectangle 748.png" alt="" />
        <img src="/images/rectangle 748.png" alt="" />
        <img src="/images/rectangle 748.png" alt="" />
        <img src="/images/rectangle 748.png" alt="" />
        <img src="/images/rectangle 748.png" alt="" />
        <img src="/images/rectangle 748.png" alt="" />
        <img src="/images/rectangle 748.png" alt="" />
      </div>
      <div className="bg-primaryBlack pt-4 pb-4 md:pt-8 md:pb-8 lg:pt-12 lg:pb-12">
        <div className="max-w-7xl w-11/12 m-auto text-white font-epilogue flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
          <div className="flex gap-1 items-center">
            <HeadLogo />
            <NavLink
              to="/"
              className="text-white font-epilogue font-medium text-lg "
            >
              Homestead
            </NavLink>
          </div>
          <div className="flex flex-col lg:gap-3">
            <div className="md:flex flex-col lg:flex-row lg:gap-40">
              <div className="md:flex gap-2 items-center">
                <p className="font-medium text-lg">About Us</p>
                <p className="font-medium text-lg">Management</p>
                <p className="font-medium text-lg">Project</p>
                <p className="font-medium text-lg">FAQ's</p>
              </div>
              <div>
                <p className="font-bold text-lg">Newsletter</p>
              </div>
            </div>
            <div className="md:flex flex-col lg:flex-row justify-between">
              <div className="md:flex md:gap-2 md:items-center">
                <p className="text-lg font-normal">info@homestead.com</p>
                <p className="text-lg font-normal">(505)655-0125</p>
              </div>
              <div>
                <input
                  className="text-sm font-normal bg-transparent  border-b-[1px] p-1"
                  type="text"
                  placeholder="Enter Your email address"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
