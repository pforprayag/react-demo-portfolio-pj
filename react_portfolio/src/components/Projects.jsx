import React from 'react';
import img1 from '../assets/book-store.jpg';
import img2 from '../assets/portfolio.jpg';


function Projects() {


  const ProjectData = [
    {
      id:1,
      name:"Online Book Store",
      image: img1,
      link: "#"
    },

    {
      id:2,
      name:"Portfolio",
      image: img2,
      link: "#"
    },
  ]
  return (
    <>
      <span id='project'></span>
    <div className='py-14 dark:bg-black dark:text-white'>
      <div className="container">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className='text-3xl font-bold'>Featured Projects</h1>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div>
            <button className='bg-primary hover:bg-primary/80 duration-300 py-2 px-6 text-white'>View all</button>
          </div>
        </header>

        {/* card section  */}
        <section>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            {/* card */}
            {
              ProjectData.map(({id, name, image, link}) => (
                <div className='h-[340px] sm:h-[440px] w-full bg-dark/80 grid place-items-center p-3 sm:p-6'>
                  <div>
                    <img src={image} alt="not found" />
                  </div>
                  <div classsName='pt-4 space-y-3'>
                    <h1 className='text-3xl font-bold'>{name}</h1>
                    <div><a href={link} className='text-primary '>Know more</a></div>
                  </div>
                </div>
              ))
            }
          </div>
        </section>
      </div>
    </div>
    </>
  )
}

export default Projects