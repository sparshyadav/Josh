import React from 'react'
import heroImage from "../assets/HeroImage.png";

const Hero = () => {
    return (
        <div className='h-[782px] w-[100%] pt-[150px] flex items-center overscroll-y-contain z-0'>
            <div className="w-[46%] h-[100%] flex justify-center items-center">
                <div className="w-[522px] h-[405px] flex flex-col justify-between">
                    <div className="font-[700] text-[48px]">I'm Rayan Adlrdard <span className='text-[#FFb400]'>Front-end</span> Developer</div>
                    <div className="w-[620px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam corporis cum reiciendis laborum minima voluptate voluptatem, ipsam dolor quaerat suscipit.</div>
                    <div className="bg-[#FFB400] w-[180px] h-[50px] flex justify-center items-center font-bold rounded-md">HIRE ME</div>
                </div>
            </div>
            <div className="w-[54%] h-[100%] flex flex-col-reverse">
                <div className="w-[808px] h-[550px] ">
                    <img src={heroImage} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero

