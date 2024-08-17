// import React, { useState, useEffect } from 'react'
// import SkillCard from './skillCard';

// const SkillsPage = () => {
//     const [skillInfo, setSkillInfo] = useState([]);

//     const getskills = async () => {
//         try {
//             const response = await fetch("http://localhost:3000/skills");
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             const data = await response.json();
//             // console.log(data);
//             setSkillInfo(data);
//         } catch (error) {
//             console.log("An Error Occurred: ", error);
//         }
//     };

//     useEffect(() => {
//         getskills();
//     }, []);

//     return (
//         <div className="pt-[152px]">
//             <div className='h-[1000px] w-[100%] flex justify-center items-center bg-[#F0F0F6] z-0'>
//                 <div className="h-[950px] w-[1244px] flex flex-col gap-[45px]">
//                     <div className="h-[132.5px] w-[1244px] flex flex-col items-center gap-[25px]">
//                         <div className="h-[41px] w-[1245px] font-[700] text-[32px] text-center">Skills & Languages</div>
//                         <div className="h-[70px] w-[440px] text-center font-[400] text-[15px] text-[#767676]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facere explicabo odit odio molestiae eveniet commodi voluptatum eligendi dignissimos obcaecati. Explicabo, provident.</div>
//                     </div>
//                     <div className="h-[773px] w-[1244px] flex justify-between flex-wrap">
//                         {
//                             skillInfo.map((skill, index) => (
//                                 <SkillCard data={skill} key={index} />
//                             ))
//                         }
//                     </div>
//                     <div className="flex justify-center items-center">
//                         <div className='bg-[#FFB400] h-[51px] w-[151px] px-[17px] py-[16px] rounded-[5px] font-[600] text-[14px] flex justify-center items-center'>ADD SKILL</div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default SkillsPage




import React, { useState, useEffect } from 'react';
// import SkillCard from './SkillCard';
import Popup from './Popup'; // Ensure this import path is correct

const SkillsPage = () => {
    const [skillInfo, setSkillInfo] = useState([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const getskills = async () => {
        try {
            const response = await fetch("http://localhost:3000/skills");
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setSkillInfo(data);
        } catch (error) {
            console.log("An Error Occurred: ", error);
        }
    };

    useEffect(() => {
        getskills();
    }, []);

    const handleAddSkillClick = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <div className="pt-[152px]">
            <div className='h-[1000px] w-[100%] flex justify-center items-center bg-[#F0F0F6] z-0'>
                <div className="h-[950px] w-[1244px] flex flex-col gap-[45px]">
                    <div className="h-[132.5px] w-[1244px] flex flex-col items-center gap-[25px]">
                        <div className="h-[41px] w-[1245px] font-[700] text-[32px] text-center">Skills & Languages</div>
                        <div className="h-[70px] w-[440px] text-center font-[400] text-[15px] text-[#767676]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facere explicabo odit odio molestiae eveniet commodi voluptatum eligendi dignissimos obcaecati. Explicabo, provident.</div>
                    </div>
                    <div className="h-[773px] w-[1244px] flex justify-between flex-wrap">
                        {
                            skillInfo.map((skill, index) => (
                                <SkillCard data={skill} key={index} />
                            ))
                        }
                    </div>
                    <div className="flex justify-center items-center">
                        <div
                            className='bg-[#FFB400] h-[51px] w-[151px] px-[17px] py-[16px] rounded-[5px] font-[600] text-[14px] flex justify-center items-center cursor-pointer'
                            onClick={handleAddSkillClick}
                        >
                            ADD SKILL
                        </div>
                    </div>
                </div>
            </div>
            {isPopupOpen && <Popup onClose={handleClosePopup} />}
        </div>
    );
};

export default SkillsPage;
