import React from 'react';
import Skills from './Skills';

const ProjectCard = (props) => {
    const { title, description, skills, imageURL } = props.data;
    return (
        <div className='w-[385px] h-[433px] rounded-[12px] border-[1px] shadow-md'>
            <div className="w-full h-[256px] rounded-tl-[12px] rounded-tr-[12px]">
                <img src={imageURL} alt="" className='object-cover' />
            </div>
            <div className="w-full h-[176px] flex flex-col justify-center items-center gap-[15px]">
                <div className="w-[353px] h-[65px]">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <div className="w-[353px] h-[65px] flex flex-wrap gap-[10px]">
                    {
                        skills.map((skill, index) => (
                            <Skills key={index} skill={skill} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
