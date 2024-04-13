import React from 'react'
import { GrUserManager } from "react-icons/gr";
import { FaCameraRetro } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";


function Skills() {

  const skillsData = [

    {
      id:1,
      name: "Designer",
      icon:(
        <FaCameraRetro className='text-5xl  text-primary group-hover:text-white duration-300'/>
      ),
      link: "/#",
      description: "lorem jipsm dolor sit okaydvue "
    },

    {
      id:2,
      name: "Management",
      icon:(
        <GrUserManager className='text-5xl text-primary group-hover:text-white duration-300' />
      ),
      link: "/#",
      description: "lorem jipsm dolor sit okaydvue "
    },

    {
      id:2,
      name: "Coding",
      icon:(
        <FaLaptopCode  className='text-5xl text-primary group-hover:text-white duration-300' />
      ),
      link: "/#",
      description: "lorem jipsm dolor sit okaydvue "
    },


  ];
  return (
    <>
    <span id='about'></span>
    <div className='dark:bg-black dark:text-white py-14'>
      <div className='container'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {skillsData.map((skill)=>(
            <div className='group space-y-3 bg-dark p-4 hover:bg-primary duration-300 text-white'>
              <div>{skill.icon}</div>
              <h1 className='text-2xl font-bold'>{skill.name}</h1>
              <p>{skill.name}</p>
              <a className='inline-block text-lg font-semibold py-3 group-hover:text-white duration-300 text-primary' href={skill.link}>Learn more</a>
            </div>

          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default Skills