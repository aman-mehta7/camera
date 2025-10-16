import React from "react";
import Nav from "../components/Nav";
import cam from "../assets/images/digitalCamera.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const LandingPage = () => {
    useGSAP(() => {
      gsap.fromTo(".maintext, .img", { scale: 0 }, {scale: 1, duration: 1 ,ease:"power2.inOut"});
      // gsap.fromTo(".img", { y: -100 }, { y: 0, duration: 1 });
    }, []);
  return (
    <section className="relative  h-[90dvh]">
      <Nav />
      <div className=" maintext w-full pt-27  h-full  flex items-center justify-center lg:text-[7vw] lg:leading-[6vw] md:text-[10vw] md:leading-[9vw] text-[13vw] leading-[13vw]  font-semibold header-font text-center">
        UNTIMITED <br /> FILMI SCENES
      <img src={cam} alt=""  className=" img absolute w-24 object-cover -mt-65 ml-180  -rotate-12  opacity-70"/>
      </div>
    </section>
  );
};

export default LandingPage;
