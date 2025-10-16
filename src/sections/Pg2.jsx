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
    <section className="h-[70dvh] w-full">
      <div className="lg:flex justify-between pr-20 pl-30 ">
        <div className="bottom">
          <p className="pb-1 ml-1.5 text-lg font-semibold">limited verson</p>
          <h1 className="text-[5vw] leading-[4vw] font-bold header-font text-wrap">
            INTAX <br /> FILMI FUN
          </h1>
          <p className=" text-sm w-[40%] ml-1.5 mt-3 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
            veritatis error, tenetur ab facere maxime, ullam cupiditate
            consectetur doloribus eius totam velit magnam repudiandae quisquam.
            Illum cupiditate soluta quae atque molestiae vero tempore aperiam
            voluptas.
          </p>
          <button className=" ml-1.5 mt-3 ">BUY NOW</button>
        </div>
        <div className="flex flex-col gap-5 pt-8 text-black ">
          <div className=" bottom w-[25vw] h-fit border-3 border-black p-5">
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
          <div className="w-[25vw] h-fit border-3 border-black p-5">
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
          <div className="w-[25vw] h-fit border-3 border-black p-5">
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
