import React from "react";
import img3 from "../assets/images/vintage.jpg";

const LastPg = () => {
  return ( 
    <section className="flex gap-10 items-center mt-8 px-32 text-black h-screen">
      <img src={img3} alt="" className="object-cover w-[50vw] h-[50vh] rounded-md" />
      <div>
        <p className="text-xl mb-3">Power of GSAP & 3js/R3F</p>
        <h1 className="header-font font-bold text-9xl leading-[5.5vw]" >WELL/ <br /> THANKS/</h1>
        <p className="text-sm opacity-50 mt-5" >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae quis
          recusandae fugiat! Eligendi fugit quam officiis suscipit ea, vero
          provident recusandae culpa dolor modi repudiandae eveniet nemo
          cupiditate, corporis magnam natus quis sit? Molestiae, consequuntur
          perferendis odit nam excepturi dolor error reiciendis illo earum a.
        </p>
        <p className="text-sm opacity-50 mt-8" >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ipsam
          tenetur modi repellendus consectetur tempore amet alias obcaecati
          itaque voluptatum.
        </p>
      </div>
    </section>
  );
};

export default LastPg;
