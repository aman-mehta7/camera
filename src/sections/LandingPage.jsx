import React from "react";
import Nav from "../components/Nav";
import cam from "../assets/images/digitalCamera.png";

const LandingPage = () => {
  return (
    <section className="relative  h-[85dvh]">
      <Nav />
      <div className="w-full pt-35  h-full  flex items-center justify-center lg:text-[7vw] lg:leading-[6vw] md:text-[10vw] md:leading-[9vw] text-[13vw] leading-[13vw]  font-bold header-font text-center">
        UNTIMITED <br /> FILMI SCENES
      <img src={cam} alt=""  className=" absolute w-24 object-cover -mt-65 ml-180  -rotate-12  opacity-70"/>
      </div>
    </section>
  );
};

export default LandingPage;
