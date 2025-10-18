import React from "react";
import img3 from "../assets/images/vintage.jpg";

const Pg3 = () => {
  return (
    <section className=" pl-30 h-fit w-full">
      <div className=" flex items-center justify-between">
        <h1 className="text-[14vw] font-bold header-font text-wrap">
          RETROCROP
        </h1>
      </div>
      <div className="flex justify-between pr-20 ">
        <div>
          <div className="">
            <img src={img3} alt="" className="w-[25vw] object-contain rounded-md  " />
          </div>

          <p className=" ml-1.5 mt-8 ">
            Watch the actual footage recorded <br /> on <span>Intax</span>
          </p>
        </div>
        <div className="flex flex-col gap-5 pt-8 w-[25vw]  ">
          <div>
            <p>
              Camera have evolved significiently since inception, transform from
              bulkey devices to sleek,portable gadgets. Today digital cameras
              sffer high-resulstion images and advanced features that cater both
              amateur and professional photographers. With the rise of
              smartphones cameras, capturing stunning photos has never been
              easier, alloeing everyone to socument there lives in vivid
              details.
            </p>
          </div>
          <div>
            <h1 className=" font-bold mb-2 text-xl">DESIGN</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
              tempore ea non! Aliquid quidem excepturi, minima consectetur a
              natus animi doloremque, praesentium, maiores qui nam debitis
              voluptas fuga possimus dolorum consequuntur saepe voluptatem
              cumque cupiditate blanditiis. Magni, beatae ipsum fugiat laborum
              hic quo velit error.
            </p>
            <p className="pt-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
              tempore ea non! Aliquid quidem excepturi, minima consectetur a
              natus animi doloremque, praesentium, maiores qui nam debitis
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pg3;
