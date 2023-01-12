import React from "react";

export default function Banner() {
  return (
    <div className="px-4 mt-10 md:mt-16">
      <div className="sm:text-center">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-4xl md:text-6xl">
          <span className="block">Mutlu Tourism</span>
          <span className="blocl text-violet-500">Non-premium Prices</span>
        </h1>

        <p className="mt-3 text-base text-violet-400 md:text-xl sm:mt-5 sm:text-lg sm:max-w-2xl sm:mx-auto ">
          {" "}
          At Mutlu properties, we ensure that our clients get the best
          properties at affordable prices. Luxury is our priority and budget is
          our constrain. Pick and choose from 1000+ properties across the globe.
        </p>
        <div className="justify-center mt-5 sm:mt-8 sm:flex">
          <div className="my-3 sm:m-2">
            <a
            className="flex justify-center px-8 py-3 font-semibold text-white bg-orange-700"
            href="#properties">Wiew Properties</a>
          </div>
          <div className="my-3 sm:m-2">
            <a
            className="flex justify-center px-8 py-3 font-semibold text-white bg-orange-400"
            href="#locations">Explore Locations</a>
          </div>
        </div>
      </div>
    </div>
  );
}
