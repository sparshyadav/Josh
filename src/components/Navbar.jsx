import React from 'react'
import logoImage from "../assets/Logo.png";

const Navbar = () => {
    return (
        <div className='w-[100%] h-[152px] flex justify-between items-center fixed shadow-sm z-10 bg-[#ffffff]'>
            <img className="px-[96px]" src={logoImage} alt="" />

            <div className="flex">
                <ul className='flex justify-center items-center gap-[40px] py-[38px] px-[96px]'>
                    <li className=''>Home</li>
                    <li className=''>Skills</li>
                    <li className=''>Education</li>
                    <li className=''>Projects</li>
                    <li className=''>Recommendations</li>
                    <li className=''>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
