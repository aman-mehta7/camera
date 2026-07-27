import React from 'react'
import img1 from "../assets/images/pexels-photo.jpeg"
import img2 from "../assets/images/pexels.jpeg";
import img3 from "../assets/images/vintage.jpg";

const Pg4 = () => {
  return (
    <section className='  flex  justify-between lg:h-screen md:px-30 px-2 md:py-32 mb-20 mt-50 lg:mt-0' >
        <div className='relative flex flex-col justify-between '>
            <img src={img1} alt="" className='border-4 border-black w-[30vw] md:w-[13vw]  object-contain md:ml-[10vw] ml-[0vw] -rotate-15 ' />
            <img src={img2} alt="" className=' absolute -bottom-50  md:-bottom-30 z-60 border-4 border-black w-[30vw] md:w-[13vw]   object-contain ml-[25vw] mt-[5vw] rotate-20 ' />
        </div>
        <img src={img3} alt="" className=' border-4 border-black w-[40vw] md:w-[20vw]  h-fit object-contain  md:mr-[5vw] mt-[10vw]  rotate-15  ' />
    </section>
  )
}

export default Pg4