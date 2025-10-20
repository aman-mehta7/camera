import React from "react";
import img3 from "../assets/images/vintage.jpg";

const LastPg = () => {
  return ( 
    <section className="lg:flex items-center gap-10 lg:pr-30 lg:pl-50 md:pl-30 p-8  text-black lg:h-[90vh]">
      <img src={img3} alt="" className="object-cover lg:w-[45%] h-[50vh] rounded-md" />
      <div>
        <p className="lg:text-[1vw] text-[3vw] mb-3 lg:mt-0 mt-3">Playing with GSAP & 3js/R3F</p>
        <h1 className="header-font font-bold text-[7vw] leading-[5.5vw]" >WELL/ <br /> THANKS/</h1>
        <p className="text-sm opacity-50 mt-5 lg:w-[35vw]" >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae quis
          recusandae fugiat! Eligendi fugit quam officiis suscipit ea, vero
          provident recusandae culpa dolor modi repudiandae eveniet nemo
          cupiditate, corporis magnam natus quis sit? Molestiae, consequuntur
          perferendis odit nam excepturi dolor error reiciendis illo earum a.
        </p>
        <p className="text-sm opacity-50 mt-8 lg:w-[35vw]" >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ipsam
          tenetur modi repellendus consectetur tempore amet alias obcaecati
          itaque voluptatum.
        </p>
      </div>
    </section>
  );
};

export default LastPg;
