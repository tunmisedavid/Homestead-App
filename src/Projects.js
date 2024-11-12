
function Projects() {
  return (
    <div className="about-container">
      <div className="flex justify-between items-center">
        <div className="">
          <p className="satisfaction w-[80%] ">
            T
            <img
              className="w-3 md:w-4 lg:w-6 xl:w-8 inline-flex object-contain"
              src="/images/blue-o.png"
              alt=""
            />
            p grade building
          </p>
        </div>
        <div className="w-[50%]">
          <p className="about">Our Projects</p>
          <p className="key-satisfaction">
            "Discover exceptional living with our real estate project. Tailored
            to fit your lifestyle, our properties offer timeless elegance and
            modern amenities in a prime location."
          </p>
        </div>
      </div>
      <div className="mt-3 md:mt-5 lg:mt-7 grid gap-2 gap-y-10 md:gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <div>
            <img
              className="w-full"
              src="/images/first-house.png"
              alt="Pennsylvania apartment"
            />
          </div>
          <div className="flex mt-1 justify-between">
            <p className="pennsylvania ">Pennsylvania apartment</p>
            <p className="address">4516 w. Gray,Utica Pennsylvania</p>
          </div>
        </div>
        <div>
          <div>
            <img
              className="w-full"
              src="/images/carlifonia-house.png"
              alt="Carlifonia housing"
            />
          </div>
          <div className="flex mt-1 justify-between">
            <p className="pennsylvania w-1/2">Calfornia to Housing</p>
            <p className="address">3891 ranchew Dr Richardson, calfornia</p>
          </div>
        </div>
        <div>
          <div>
            <img
              className="w-full"
              src="/images/hawai-tower.png"
              alt="hawai tower"
            />
          </div>
          <div className="flex mt-1 justify-between">
            <p className="pennsylvania w-1/2">Hawai tower</p>
            <p className="address">3891 ranchew Dr Richardson, hawai</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;