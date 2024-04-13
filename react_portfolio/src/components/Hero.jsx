import React from 'react'
import myImg2 from '../assets/myImg2.png'

function Hero() {
  return (
    <div className='dark:bg-black dark:text-white'>
      <div className='container'>
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          {/* image section  */}
          <div>
            <div>
              <img src={myImg2} alt="not found" />
            </div>
          </div>
          {/* details section  */}
          <div className='space-y-2'>
            <p className='text-primary text-2xl'>Hello there, I'm Prayag </p>
            <h1 className='text-5xl font-semibold'>React Developer</h1>
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, officia sunt. Qui recusandae a, architecto culpa accusantium necessitatibus aperiam eius? Quo officiis esse accusantium illum quasi! Voluptatum sapiente eos reiciendis?</p>
            <button className=' bg-primary text-white py-2 px-6 hover:bg-primary/80 duration-300'>Hire Me</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero