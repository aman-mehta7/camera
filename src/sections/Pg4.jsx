import React from 'react'
import img1 from "../assets/images/pexels-photo.jpeg"
import img2 from "../assets/images/pexels.jpeg";
import img3 from "../assets/images/vintage.jpg";

const Pg4 = () => {
  return (
    <section className='flex  justify-between h-screen px-30 py-32' >
        <div className='flex flex-col justify-between '>
            <img src={img1} alt="" className='border-4 border-black w-[13vw]  object-contain ml-[10vw] -rotate-15 ' />
            <img src={img2} alt="" className='border-4 border-black w-[13vw]  object-contain ml-[20vw] mt-[5vw] rotate-20 ' />
        </div>
        <img src={img3} alt="" className='border-4 border-black w-[20vw] h-fit object-contain  mr-[5vw] mt-[10vw]  rotate-15  ' />
    </section>
  )
}

export default Pg4