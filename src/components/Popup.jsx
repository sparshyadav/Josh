// import React from 'react'

// const Popup = () => {
//     return (
//         <div className='h-[890px] w-[833px] rounded-[10px] flex flex-col gap-[10px] px-[36px] py-[28px] bg-white border-2'>
//             <div className="h-[54px] w-[189px] text-center font-[700] text-[44px] ">Add Skill</div>
//             <div className="h-[120px] w-[777px] flex flex-col gap-[14px]">
//                 <label htmlFor="domain" className='font-[500] text-[22px]'>Domain</label>
//                 <input
//                     type="text"
//                     name="domain"
//                     // value={subject}
//                     // onChange={(e) => setDomain(e.target.value)}
//                     className='bg-[#F0F0F6] w-[773px] h-[50px] rounded-[5px] px-3'
//                 />
//             </div>
//             <div className="h-[507.5px] w-[777px] flex flex-col gap-[14px]">
//                 <div className="h-[27.5px] w-[777px] font-[500] text-[22px]">Skill</div>
//                 <div className="h-[22px] w-[777px] flex gap-[590px]">
//                     <p>Skill</p>
//                     <p>Proficiency(%)</p>
//                 </div>
//                 <div className="h-[434px] w-[777px] flex flex-col gap-[16px]">
//                     <div className="h-[74px] w-[777px] flex gap-[20px]">
//                         <input
//                             type="text"
//                             name="domain"
//                             // value={subject}
//                             // onChange={(e) => setDomain(e.target.value)}
//                             className='bg-[#F0F0F6] w-[606.6px] h-[74px] rounded-[5px] px-3'
//                         />
//                         <input
//                             type="text"
//                             name="domain"
//                             // value={subject}
//                             // onChange={(e) => setDomain(e.target.value)}
//                             className='bg-[#F0F0F6] w-[150px] h-[74px] rounded-[5px] px-3'
//                         />
//                     </div>
//                     <div className="h-[74px] w-[777px] flex gap-[20px]">
//                         <input
//                             type="text"
//                             name="domain"
//                             // value={subject}
//                             // onChange={(e) => setDomain(e.target.value)}
//                             className='bg-[#F0F0F6] w-[606.6px] h-[74px] rounded-[5px] px-3'
//                         />
//                         <input
//                             type="text"
//                             name="domain"
//                             // value={subject}
//                             // onChange={(e) => setDomain(e.target.value)}
//                             className='bg-[#F0F0F6] w-[150px] h-[74px] rounded-[5px] px-3'
//                         />
//                     </div>
//                     <div className="h-[74px] w-[777px] flex gap-[20px]">
//                         <input
//                             type="text"
//                             name="domain"
//                             // value={subject}
//                             // onChange={(e) => setDomain(e.target.value)}
//                             className='bg-[#F0F0F6] w-[606.6px] h-[74px] rounded-[5px] px-3'
//                         />
//                         <input
//                             type="text"
//                             name="domain"
//                             // value={subject}
//                             // onChange={(e) => setDomain(e.target.value)}
//                             className='bg-[#F0F0F6] w-[150px] h-[74px] rounded-[5px] px-3'
//                         />
//                     </div>
//                     <div className="h-[74px] w-[777px] flex gap-[20px]">
//                         <input
//                             type="text"
//                             name="domain"
//                             // value={subject}
//                             // onChange={(e) => setDomain(e.target.value)}
//                             className='bg-[#F0F0F6] w-[606.6px] h-[74px] rounded-[5px] px-3'
//                         />
//                         <input
//                             type="text"
//                             name="domain"
//                             // value={subject}
//                             // onChange={(e) => setDomain(e.target.value)}
//                             className='bg-[#F0F0F6] w-[150px] h-[74px] rounded-[5px] px-3'
//                         />
//                     </div>
//                     <div className="h-[74px] w-[777px] flex gap-[20px]">
//                         <input
//                             type="text"
//                             name="domain"
//                             // value={subject}
//                             // onChange={(e) => setDomain(e.target.value)}
//                             className='bg-[#F0F0F6] w-[606.6px] h-[74px] rounded-[5px] px-3'
//                         />
//                         <input
//                             type="text"
//                             name="domain"
//                             // value={subject}
//                             // onChange={(e) => setDomain(e.target.value)}
//                             className='bg-[#F0F0F6] w-[150px] h-[74px] rounded-[5px] px-3'
//                         />
//                     </div>
//                 </div>
//                 <div className="w-[777px] h-[51px] flex justify-end gap-[25px]">
//                     <button className="h-[51px] w-[151px] rounded-[5px] p-16px bg-[#FFB400]">Add Skill</button>
//                     <button className="h-[51px] w-[151px] rounded-[5px] p-16px text-[#FF5252] border-[1px] border-[#FF5252]">Cancel</button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Popup




import React, { useState } from 'react';
import axios from 'axios';

const Popup = ({ onClose }) => {
    const [domain, setDomain] = useState('');
    const [skills, setSkills] = useState([{ topic: '', percentage: '' }]);

    const handleSkillChange = (index, e) => {
        const { name, value } = e.target;
        const newSkills = [...skills];
        newSkills[index][name] = value;
        setSkills(newSkills);
    };

    const handleSave = async () => {
        try {
            const response = await axios.post('http://localhost:3000/skills', {
                domain,
                skills
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            if (response.status === 200) {
                onClose(); 
            } else {
                throw new Error('Network response was not ok');
            }
        } catch (error) {
            console.log("An Error Occurred: ", error);
        }
    };

    return (
        <div className='inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50'>
            <div className='h-[890px] w-[833px] rounded-[10px] flex flex-col gap-[10px] px-[36px] py-[28px] bg-white border-2'>
                <div className="h-[54px] w-[189px] text-center font-[700] text-[44px] ">Add Skill</div>
                <div className="h-[120px] w-[777px] flex flex-col gap-[14px]">
                    <label htmlFor="domain" className='font-[500] text-[22px]'>Domain</label>
                    <input
                        type="text"
                        name="domain"
                        value={domain}
                        onChange={(e) => setDomain(e.target.value)}
                        className='bg-[#F0F0F6] w-[773px] h-[50px] rounded-[5px] px-3'
                    />
                </div>
                <div className="h-[507.5px] w-[777px] flex flex-col gap-[14px]">
                    <div className="h-[27.5px] w-[777px] font-[500] text-[22px]">Skill</div>
                    <div className="h-[22px] w-[777px] flex gap-[590px]">
                        <p>Skill</p>
                        <p>Proficiency(%)</p>
                    </div>
                    <div className="h-[434px] w-[777px] flex flex-col gap-[16px]">
                        {skills.map((skill, index) => (
                            <>
                            <div key={index} className="h-[74px] w-[777px] flex gap-[20px]">
                                <input
                                    type="text"
                                    name="topic"
                                    value={skill.topic}
                                    onChange={(e) => handleSkillChange(index, e)}
                                    className='bg-[#F0F0F6] w-[606.6px] h-[74px] rounded-[5px] px-3'
                                />
                                <input
                                    type="text"
                                    name="percentage"
                                    value={skill.percentage}
                                    onChange={(e) => handleSkillChange(index, e)}
                                    className='bg-[#F0F0F6] w-[150px] h-[74px] rounded-[5px] px-3'
                                />
                            </div>
                            <div key={index} className="h-[74px] w-[777px] flex gap-[20px]">
                                <input
                                    type="text"
                                    name="topic"
                                    value={skill.topic}
                                    onChange={(e) => handleSkillChange(index, e)}
                                    className='bg-[#F0F0F6] w-[606.6px] h-[74px] rounded-[5px] px-3'
                                />
                                <input
                                    type="text"
                                    name="percentage"
                                    value={skill.percentage}
                                    onChange={(e) => handleSkillChange(index, e)}
                                    className='bg-[#F0F0F6] w-[150px] h-[74px] rounded-[5px] px-3'
                                />
                            </div>
                            <div key={index} className="h-[74px] w-[777px] flex gap-[20px]">
                                <input
                                    type="text"
                                    name="topic"
                                    value={skill.topic}
                                    onChange={(e) => handleSkillChange(index, e)}
                                    className='bg-[#F0F0F6] w-[606.6px] h-[74px] rounded-[5px] px-3'
                                />
                                <input
                                    type="text"
                                    name="percentage"
                                    value={skill.percentage}
                                    onChange={(e) => handleSkillChange(index, e)}
                                    className='bg-[#F0F0F6] w-[150px] h-[74px] rounded-[5px] px-3'
                                />
                            </div>
                            <div key={index} className="h-[74px] w-[777px] flex gap-[20px]">
                                <input
                                    type="text"
                                    name="topic"
                                    value={skill.topic}
                                    onChange={(e) => handleSkillChange(index, e)}
                                    className='bg-[#F0F0F6] w-[606.6px] h-[74px] rounded-[5px] px-3'
                                />
                                <input
                                    type="text"
                                    name="percentage"
                                    value={skill.percentage}
                                    onChange={(e) => handleSkillChange(index, e)}
                                    className='bg-[#F0F0F6] w-[150px] h-[74px] rounded-[5px] px-3'
                                />
                            </div>
                            <div key={index} className="h-[74px] w-[777px] flex gap-[20px]">
                                <input
                                    type="text"
                                    name="topic"
                                    value={skill.topic}
                                    onChange={(e) => handleSkillChange(index, e)}
                                    className='bg-[#F0F0F6] w-[606.6px] h-[74px] rounded-[5px] px-3'
                                />
                                <input
                                    type="text"
                                    name="percentage"
                                    value={skill.percentage}
                                    onChange={(e) => handleSkillChange(index, e)}
                                    className='bg-[#F0F0F6] w-[150px] h-[74px] rounded-[5px] px-3'
                                />
                            </div>
                            </>
                        ))} 
                    </div>
                    <div className="w-[777px] h-[51px] flex justify-end gap-[25px]">
                        <button
                            onClick={handleSave}
                            className="h-[51px] w-[151px] rounded-[5px] p-16px bg-[#FFB400]"
                        >
                            Save
                        </button>
                        <button
                            onClick={onClose}
                            className="h-[51px] w-[151px] rounded-[5px] p-16px text-[#FF5252] border-[1px] border-[#FF5252]"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popup;
