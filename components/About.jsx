import React from "react";

function About() {
  return (
    <div className=" w-full h-screen text-center bg-gray-200" id="about">
      <div className="sm:flex sm:p-32 pt-20">
        <div>
          <h1 className="text-4xl font-bold mb-20">About</h1>
          <p className="leading-8 sm:text-xl sm:leading-loose sm:pl-16 px-10">
            We are a family-owned business that focuses on high quality service at an affordable price. Each and every one of our customers has a unique relatonship with our employees, which enhances
            the quality of your manicure, pedicure, or eyebrow servce.
          </p>
          <div className="sm:mt-32 mt-10">
            <a className="border-black border-[1px] p-4 px-6 hover:bg-cyan-200 duration-300 hover:scale-105" href={"#contact"}>
              Get in touch!
            </a>
          </div>
        </div>
        <div className="hidden sm:block border-8 border-stone-100">
          <img src="/nails1.jpg" className="hidden sm:flex p-4" />
        </div>
      </div>
    </div>
  );
}

export default About;
