import { NavLink, Outlet, Route, Routes } from "react-router-dom";

function ContactUsComp() {
  return (
    <div className="bg-contactImage bg-contain rounded-xl md:rounded-3xl w-fit h-fit absolute top-0 bottom-0 left-3 right-3 m-auto">
      <div className=" backdrop-filter backdrop-blur rounded-xl md:rounded-3xl p-5 md:p-8">
        <p className="text-white font-bold text-lg md:text-2xl mb-3 md:mb-5">
          Please fill in Your details
        </p>
        <form action="">
          <p className="text-black font-semibold text-lg md:text-xl mb-1 md:mb-2">Full Name</p>
          <div className="flex flex-col gap-3 md:gap-5 mb-3 md:mb-5">
            <input
              type="text"
              placeholder="First Name"
              className="contact-input"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="contact-input"
            />
          </div>
          <input
            type="email"
            placeholder="Enter your Email"
            className="contact-input mb-3"
          />
          <textarea
            className="resize-none contact-input mb-6 w-full"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" className="bg-brand w-[80%] m-auto rounded-md h-7 md:h-10 flex items-center justify-center text-white font-bold text-lg md:text-xl">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUsComp;
