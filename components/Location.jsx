import React from "react";
import Map from "@/components/Map";

function Location() {
  return (
    <div className="flex flex-col md:flex-row w-full sm:h-[50vh] h-screen ">
      <div className="flex flex-col text-center items-center justify-center w-full h-full bg-fuchsia-200">
        <div className=" sm:px-40 py-10 px-8 bg-fuchsia-200 border-8 border-stone-50">
          <h1 className="text-4xl p-6 font-bold">Come visit us!</h1>
          <p className="text-xl ">215 W Summers Dr</p>
          <p className="text-xl">Abbeville, LA 70510</p>
          <p className="text-sm mt-5">Monday-Saturday: 9:00AM - 7:00PM</p>
        </div>
      </div>

      <div className="flex text-center items-center justify-center w-full h-full sm:p-10 sm:px-20">
        <Map />
      </div>
    </div>
  );
}

export default Location;
