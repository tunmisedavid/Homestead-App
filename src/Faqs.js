
function Faqs() {
  return (
    <div className="bg-brand font-epilogue text-white">
      <div className="max-w-7xl w-11/12 m-auto pt-2 pb-4 sm:pt-4 sm:pb-6 sm:flex justify-between items-center">
        <div className="sm:w-1/2">
          <p className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl leading-5 w-[80%] m-auto text-center sm:text-start sm:m-0">
            Let`s us listen to your problems
          </p>
          <p className="font-normal mt-2 sm:mt-4 text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl text-center sm:text-start">
            Made for you convenience for a more beautiful future for you and
            your family
          </p>
        </div>
        <div className="mt-4 sm:mt-0">
          <div className="questions-contain border-y-[1px]">
            <p className="questions">I have no idea?</p>
            <img
              className="object-contain w-3 lg:w-4"
              src="/images/Arrow 11.png"
              alt="arrow-img"
            />
          </div>
          <div className="questions-contain border-b-[1px]">
            <p className="questions">Why should Homestead?</p>
            <img
              className="object-contain w-3 lg:w-4"
              src="/images/Arrow 11.png"
              alt="arrow-img"
            />
          </div>
          <div className="questions-contain border-b-[1px]">
            <p className="questions">What benefitss can i get?</p>
            <img
              className="object-contain w-3 lg:w-4"
              src="/images/Arrow 11.png"
              alt="arrow-img"
            />
          </div>
          <div className="questions-contain border-b-[1px]">
            <p className="questions">The price we give?</p>
            <img
              className="object-contain w-3 lg:w-4"
              src="/images/Arrow 11.png"
              alt="arrow-img"
            />
          </div>
          <div className="questions-contain border-b-[1px]">
            <p className="questions">What you got?</p>
            <img
              className="object-contain w-3 lg:w-4"
              src="/images/Arrow 11.png"
              alt="arrow-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faqs;