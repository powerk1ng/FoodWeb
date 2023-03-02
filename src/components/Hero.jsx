
import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1240px] mx-auto p-4'>
        <div className='max-h-[500px] relative'>
            {/* Overlay */}
            <div className="absolute w-full h-full text-gray-200 bg-black/50 flex flex-col justify-center">
              <h1 className="px-4 text-4xl sm:text md:text-6xl lg:text-7xl font-bold">The<span className='text-orange-500'> Best</span></h1>
              <h2 className="px-4 text-4xl sm:text md:text-6xl lg:text-7xl font-bold"><span className='text-orange-500'>Foods</span> Delievered</h2>
            </div>
            <img className='max-h-[500px] w-full object-cover' src="https://images.unsplash.com/photo-1626170809808-4bfd6f3d15e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="burger" />
        </div>
    </div>
  )
}

export default Hero