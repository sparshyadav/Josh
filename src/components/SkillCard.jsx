import React from 'react'

const SkillCard = (props) => {
    const { title, skill } = props.data;
    console.log(skill);
    return (
        <div className='h-[316px] w-[385px] flex justify-center items-center bg-white border-2 border-purple-300 flex-wrap'>
            <div className="h-[290.5px] w-[244.5px]">
                <div className="font-[500] text-[18px]">{title}</div>
                <div className="">
                    {skill.map((sk) => (
                        <>
                            <div className="flex justify-between">
                                <p>{sk.topic}</p>
                                <p>{sk.percentage}</p>
                            </div>
                            <div className="border-1 border-red-400 w-full ">
                                <progress value={Number(sk.percentage)} max="100" className='p-1 rounded-sm color-[#FFB400] bg-white border-1 border-[#FFB400]' />
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SkillCard
