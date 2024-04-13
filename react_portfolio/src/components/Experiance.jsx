import React from 'react'

function Experiance() {
  return (
    <div className='dark:bg-black text-white dark:text-white py-14 '>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* first column  */}
          <div className='bg-dark/50 p-4 grid place-items-center'>
            <div className='text-center space-y-3'>
              <h2 className='text-5xl font-bold'></h2>
              <p className='text-xl font-semibold'>Fresher👦</p>
            </div>
          </div>

          {/* secound column  */}
          <div className='grid grid-rows-2 gap-4'>
            <div className='text-center p-6 bg-dark'>
              <h1 className='text-3xl font-bold'>10+</h1>
              <p>Mini JS Projects</p>
            </div>

            <div className='text-center p-6 bg-dark'>
              <h1 className='text-3xl font-bold'>5+</h1>
              <p>Certificates</p>
            </div>
          </div>

          {/* third column  */}
          <div className='grid grid-rows-2 gap-4'>
            <div className='text-center p-6 bg-dark'>
              <h1 className='text-3xl font-bold'>10+</h1>
              <p>Mini JS Projects</p>
            </div>

            <div className='text-center p-6 bg-dark'>
              <h1 className='text-3xl font-bold'>5+</h1>
              <p>Certificates</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experiance