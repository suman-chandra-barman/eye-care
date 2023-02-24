import React from "react";
import banner from "../../../assets/eye-care-banner.jpg";

const Banner = () => {
  return (
    <div
      className="hero md:min-h-screen"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content md:text-center text-neutral-content py-16">
        <div className="w-full">
          <h1 className="mb-3 md:mb-5 text-3xl md:text-5xl font-bold">
            Eye Care Services For You
          </h1>
          <p className="mb-5  text-lg md:text-3xl">
            Give Your Vision The Treatment It Deserves.
          </p>
          <button className="btn btn-outline text-white  border-2 border-white rounded-3xl px-10 py-1 hover:border-info hover:bg-info">
            Explore More Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
