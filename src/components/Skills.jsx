import React from 'react'

const Skills = ({ skill }) => {
    return (
        <div className="h-[25.5px] px-[10px] rounded-full bg-[#e8e7e7]" style={{ whiteSpace: 'nowrap' }}>
            {skill}
        </div>
    )
}

export default Skills
