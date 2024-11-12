import { useState } from "react";
import { Link } from "react-router-dom";

function GetStarted() {
  const [passwordToggle, setPasswordToggle] = useState(false);

  const handlePasswordToggle = () => {
    setPasswordToggle( passwordToggle ? false : true);
  };

  return (
    <div className="">
      <div className="bg-brand absolute p-5 rounded-md md:rounded-2xl w-fit left-[50%] top-[50%] -translate-y-[50%] -translate-x-[50%]">
        <p className="font-bold text-lg md:text-xl xl:text-2xl mb-3">
          Create your Account
        </p>
        <p className="flex items-center justify-center gap-2 font-semibold bg-black text-white text-sm md:text-base lg:text-lg rounded-sm p-1 mb-2">
          <img className="w-4" src="/images/icons8-google-48.png" alt="" />
          Login with google
        </p>
        <div className="flex flex-row items-center gap-1 ">
          <hr className="w-full" />
          <p className="text-white">or</p>
          <hr className="w-full" />
        </div>
        <div>
          <form action="">
            <p className="get-name">Name</p>
            <input
              type="text"
              placeholder="Enter your Name"
              className="get-input"
            />
            <p className="get-name">Email</p>
            <input
              type="text"
              placeholder="Enter Your Email"
              className="get-input"
            />
            <p className="get-name">Password</p>
            <div className="flex items-center border-[1px] p-1 pr-2 rounded-sm outline-none text-white placeholder:text-sm md:placeholder:text-base mb-3 md:mb-5">
              <input
                type={passwordToggle ? "text" : "password"}
                placeholder="Enter your Password"
                className="border-none bg-transparent outline-none"
              />
              <i onClick={handlePasswordToggle} class={`fa-solid fa-eye${!passwordToggle ? '' : '-slash'}`}></i>
            </div>
            <div className="flex gap-2 items-center mb-2">
              <input type="checkbox" name="" id="" required />
              <p className="text-xs text-white font-semibold">
                I agree to the Terms, Privacy, Policy
              </p>
            </div>
            <button
              className="w-8/12 m-auto flex items-center justify-center mb-2 bg-white rounded-sm border-none font-semibold"
              type="submit"
            >
              Sign Up
            </button>
          </form>
        </div>
        <p className="text-white font-semibold text-sm md:text-base">
          Already have an account?{" "}
          <span>
            <Link to={"/Login"} className="hover:underline">
              Login
            </Link>
          </span>
        </p>
      </div>
      {/* <div className="login"></div> */}
    </div>
  );
}

export default GetStarted;