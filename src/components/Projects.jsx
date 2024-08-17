import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
    const [projects, setProjects]=useState([]);

    const getProjects = async () => {
        try {
            const response = await fetch("http://localhost:3000/projects");
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data);
            setProjects(data);
        } catch (error) {
            console.log("An Error Occurred: ", error);
        }
    };

    useEffect(() => {
        getProjects(); 
    }, []);

  return (
    <div className='h-[1150px] w-full flex justify-center items-center bg-[#F0F0F6]'>
      <div className="h-[1055px] w-[90%] flex flex-col gap-[30px] items-center">
        <div className="h-[101px] w-[655px] flex justify-center items-center flex-col">
            <p className='text-center  font-[700] text-[32px]'>Projects</p>
            <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati deserunt repellendus ipsum quae rerum officiis nulla repudiandae! Praesentium non tenetur placeat esse!</p>

        </div>
        <div className="flex flex-wrap gap-[45px] justify-evenly">
            {
                projects.map((project)=>(
                    <ProjectCard key={project.id} data={project}/>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default Projects

