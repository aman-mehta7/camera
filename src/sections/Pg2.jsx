import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Pg2 = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".bottom",
      { y: 100 },
      { y: 0, duration: 1, ease: "power2.inOut" }
    );
  }, []);
  return (
    <section className=" backdrop-blur-sm lg:backdrop-blur-none md:pl-30 p-8 lg:h-[70dvh] w-full">
      <div className="lg:flex justify-between lg:pr-20">
        <div className="bottom">
          <p className="pb-1 lg:ml-1.5 text-lg font-semibold">limited verson</p>
          <h1 className="text-[5vw] leading-[4vw] font-bold header-font text-wrap">
            INTAX <br /> FILMI FUN
          </h1>
          <p className=" lg:ml-1.5 text-sm lg:w-[40%] mt-3 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
            veritatis error, tenetur ab facere maxime, ullam cupiditate
            consectetur doloribus eius totam velit magnam repudiandae quisquam.
            Illum cupiditate soluta quae atque molestiae vero tempore aperiam
            voluptas.
          </p>
          <button className=" lg:ml-1.5 mt-3 px-4 py-2  rounded-sm cursor-pointer font-bold bg-[brown] text-[white]">BUY NOW</button>
        </div>
        <div className="flex flex-col gap-5 pt-8 text-black ">
          <div className=" bottom lg:w-[25vw] h-fit border-3 border-black p-5">
            <div className="border-b-2 border-black">
              <h1 className="font-bold text-xl">RES</h1>
              <p className=" pb-1 text-sm opacity-65">Lens Resolution</p>
            </div>
            <div className="flex gap-5 pt-1">
              <h1 className="font-bold text-5xl">55%</h1>
              <p className="text-wrap opacity-65">
                Camera have evolved significiently since inception, transform
                from bulkey devices.
              </p>
            </div>
          </div>
          <div className="lg:w-[25vw] h-fit border-3 border-black p-5">
            <div className=" border-b-2 border-black">
              <h1 className="font-bold text-xl">RES</h1>
              <p className=" pb-1 text-sm opacity-65">Lens Resolution</p>
            </div>
            <div className="flex gap-5 pt-1">
              <h1 className="font-bold text-5xl">34%</h1>
              <p className="text-wrap opacity-65">
                Camera have evolved significiently since inception, transform
                from bulkey devices.
              </p>
            </div>
          </div>
          <div className="lg:w-[25vw] h-fit border-3 border-black p-5">
            <div className=" border-b-2 border-black">
              <h1 className="font-bold text-xl">RES</h1>
              <p className=" pb-1 text-sm opacity-65">Lens Resolution</p>
            </div>
            <div className="flex gap-5 pt-1">
              <h1 className="font-bold text-5xl">12%</h1>
              <p className="text-wrap opacity-65">
                Camera have evolved significiently since inception, transform
                from bulkey devices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pg2;
