import React from "react";

function Main() {
  return (
    <div className="flex w-full h-screen text-center items-center justify-center bg-[url('/dmas.jpg')] bg-cover text-stone-200" id="home">
      <div className="border-8 mx-10 p-20">
        <h1 className="sm:text-5xl text-4xl font-semibold">Welcome to Diamond Nails & Spa</h1>
        <p className="sm:text-lg text-sm pt-7">
          Making our loyal customers <span className="text-cyan-300">shine</span>
        </p>
      </div>
    </div>
  );
}

export default Main;
