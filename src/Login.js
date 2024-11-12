import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
   const [passwordToggle, setPasswordToggle] = useState(false);

   const handlePasswordToggle = () => {
     setPasswordToggle(passwordToggle ? false : true);
   };

  return (
    <div className="bg-brand absolute p-5 rounded-md md:rounded-2xl w-fit left-[50%] top-[50%] -translate-y-[50%] -translate-x-[50%]">
      <p className="font-bold text-lg md:text-xl xl:text-2xl mb-3">
        Welcome Back
      </p>
      <form action="">
        <p className="get-name">Email</p>
        <input
          type="email"
          className="get-input"
          placeholder="Enter your email"
        />
        <p className="get-name">Password</p>
        <div className="flex items-center border-[1px] p-1 rounded-sm outline-none text-white placeholder:text-sm md:placeholder:text-base mb-3 md:mb-5">
          <input
            type={passwordToggle ? "text" : "password"}
            placeholder="Enter your Password"
            className="border-none bg-transparent outline-none"
          />
          <i
            onClick={handlePasswordToggle}
            class={`fa-solid fa-eye${!passwordToggle ? "" : "-slash"}`}
          ></i>
        </div>
        <p className="mb-2 font-semibold">Forgot Password?</p>
        <button
          type="submit"
          className="w-8/12 m-auto flex items-center justify-center mb-2 bg-white rounded-sm border-none font-semibold"
        >
          Login
        </button>
      </form>
      <div className="flex flex-row items-center gap-1 mb-2">
        <hr className="w-full" />
        <p className="text-white w-full text-xs">or login with</p>
        <hr className="w-full" />
      </div>
      <div className="flex justify-between">
        <div className="flex gap-1 items-center justify-center hover:bg-white transition rounded-sm h-6 w-24 cursor-pointer">
          <img className="w-4 " src="/images/icons8-google-48.png" alt="" />
          <p className="font-semibold">Google</p>
        </div>
        <div className="flex gap-1 items-center justify-center hover:bg-white transition rounded-sm h-6 w-24 cursor-pointer">
          <img className="w-4" src="/images/icons8-facebook-48.png" alt="" />
          <p className="font-semibold">Facebok</p>
        </div>
      </div>
      <p className="text-white mt-2 font-bold">
        Don't have an account? 
        <span className="hover:underline">
          <Link to={'/GetStarted'}> Register</Link>
        </span>
      </p>
    </div>
  );
}

export default Login;