function AboutUs() {
  return (
    <div className="about-container">
      <div className="flex justify-between items-center">
        <div>
          <p className="satisfaction">Satisfaction is the key</p>
        </div>
        <div className="w-[50%] ">
          <p className="about">More about us</p>
          <p className="key-satisfaction">
            "Satisfaction is the key to our success. We strive to ensure every
            customer leaves happy with our quality service and attention to
            detail. Your satisfaction is our priority.
          </p>
        </div>
      </div>
      <div className="bg-black flex flex-col gap-6 mt-4 md:mt-8 p-2 md:p-4 md:flex-row">
        <div className="md:w-[50%]">
          <img className="md:w-full" src="/images/Rectangle 752.png" alt="" />
        </div>
        <div className="flex flex-col gap-10 md:justify-between md:w-[40%]">
          <p className="font-semibold text-lg md:text-2xl lg:text-3xl xl:text-5xl text-white">
            Your ideal your dreams all you want we createted it.
          </p>
          <div>
            <p className="font-normal text-sm md:text-base lg:text-lg xl:text-xl text-white">
              We are here to make your dream comes true, no matter how crazy,
              whatever you want we make can create to full fill your dream home.
            </p>
            <p className="text-white mt-2 text-xs md:text-sm lg:text-base xl:text-lg font-medium flex gap-1">
              See more
              <img
                className="object-contain"
                src="/images/Arrow 11.png"
                alt="arrow-img"
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
