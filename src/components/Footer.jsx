import React from 'react'
import logoImage from "../assets/Logo.png";
import FooterLogo1 from "../assets/FooterLogo1.png";
import FooterLogo2 from "../assets/FooterLogo2.png";
import FooterLogo3 from "../assets/FooterLogo3.png";
import FooterLogo4 from "../assets/FooterLogo4.png";
import FooterImage1 from "../assets/FooterRectangle1.png";
import FooterImage2 from "../assets/FooterRectangle2.png";
import FooterImage3 from "../assets/FooterRectangle3.png";
import Facebook from "../assets/Facebook.png";
import Instagram from "../assets/Instagram.png";
import Linkedin from "../assets/Linkedin.png";

const Footer = () => {
  return (
    <div className='w-full h-[621px] bg-[#F0F0F6] flex justify-center flex-col'>
      <div className="w-[100%] h-[144px] flex justify-center items-center">
        <div className="h-[144px] w-[970px] flex justify-between">
          <div className="h-[144px] w-[140px]"><img src={FooterLogo1} alt="" /></div>
          <div className="h-[144px] w-[140px]"><img src={FooterLogo2} alt="" /></div>
          <div className="h-[144px] w-[140px]"><img src={FooterLogo3} alt="" /></div>
          <div className="h-[144px] w-[140px]"><img src={FooterLogo4} alt="" /></div>
        </div>
      </div>
      <div className="h-[401px] w-full flex justify-center ">
        <div className="w-[1320px] flex justify-between flex-col">
          <div className="h-[76px] w-[158px] my-[23px]">
            <img src={logoImage} alt="" />
          </div>
          <div className="w-[1320px] h-[230px] flex justify-between">
            <div className="h-[230px] w-[177px] flex flex-col gap-[23px]">
              <div className="h-[61px] w-[177px]">
                <img src={FooterImage1} alt="" />
                <p className=''>4.5/5 Rating On Lorem</p>
              </div>
              <div className="h-[61px] w-[177px]">
                <img src={FooterImage2} alt="" />
                <p className=''>9/10 Rating On Ipsum</p>
              </div>
              <div className="h-[61px] w-[177px]">
                <img src={FooterImage3} alt="" />
                <p className=''>4.5/5 Rating on Dorel</p>
              </div>
            </div>
            <div className="flex h-[202px] w-[870px] justify-between">
              <div className="w-[141px] h-[202px] flex flex-col justify-between">
                <p className='w-[114px] h-[30px] font-[700]'>Quick Links</p>
                <ul className='w-[141px] h-[152px]'>
                  <li>Home</li>
                  <li>Skills</li>
                  <li>Education</li>
                  <li>Projects</li>
                  <li>Recommendations</li>
                </ul>
              </div>
              <div className="w-[174px] h-[202px] flex flex-col justify-between">
                <p className='w-[114px] h-[30px] font-[700]'>Portfolio</p>
                <ul className='w-[174px] h-[152px]'>
                  <li>Frontend Development</li>
                  <li>Backend Development</li>
                  <li>Website Design</li>
                  <li>Machine Learning</li>
                  <li>Problem Solving & DSA</li>
                </ul>
              </div>
              <div className="w-[125px] h-[157px] flex flex-col justify-between">
                <p className='w-[114px] h-[30px] font-[700]'>Connect</p>
                <div className="w-[125px] h-[107px] flex flex-col justify-between">
                  <img src={Linkedin} alt="" className='w-[100px] h-[25px]' />
                  <img src={Instagram} alt="" className='w-[100px] h-[25px]' />
                  <img src={Facebook} alt="" className='w-[100px] h-[25px]' />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1320px] flex justify-center">
            <div className="w-[283px] h-[56px] py-[16px]">
              <p><span className='h-[45px]'>©</span> Copyright, All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
