import React from 'react'
import Navbar from './components/Navbar'
import InfiniteSlider from './components/Slider'
import HoverProjects from './components/HoverProjects'
const App = () => {
  return (
    <div className='bg-[#EFEAE3] min-h-screen'>
      <Navbar />
      {/* section 1 */}
      <div className='flex items-center justify-between mt-44 pl-10'>
        <div className='font-bold text-3xl space-y-2'>
          <span>Sundown is a multi-disciplinary</span><br />
          <span>studio focused on creating</span><br />
          <span>unique, end-to-end experiences</span><br />
          <span>and environments.</span>
        </div>
        <div className='text-9xl font-bold pr-20'>
          <span>SPACES</span> <br />
          <span>THAT</span><br />
          <span>INSPIRE</span>
        </div>
      </div>
      <hr className='border-t border-gray-500 mt-3' />

      {/* video section */}
      <div className='w-full h-screen mt-20'>
        <video autoPlay muted loop src="https://sundown-ivory.vercel.app/video.mp4"
          className='w-[95%] h-[95%] object-contain pl-20 rounded-full' />
      </div>

      {/* slider */}

      <InfiniteSlider />

      <div className='w-full h-screen mt-40 flex items-center justify-between'>
        <div className='pl-10 text-6xl font-bold'>
          <span>We are a group of design-</span><br />
          <span>driven, goal-focused creators,</span><br />
          <span>producers, and designers who</span><br />
          <span>believe that the details make</span><br />
          <span>all the difference.</span>
        </div>

        <div className='relative flex flex-col items-center'>
          <img
            src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15d1_Holding_thumb-p-500.jpg"
            className='w-[70%] h-[70%] rounded-xl'
            alt="Design team"
          />
          <p className='absolute top-64 pr-10 text-center p-4 rounded-lg'>
            We love to create, we love to solve, we love to collaborate, and we love to turn amazing ideas into reality. We’re here to partner with you through every step of the process and know that relationships are the most important things we build.
          </p>
        </div>
      </div>

      {/* section 3  */}
     <HoverProjects />
    </div>
  )
}

export default App
