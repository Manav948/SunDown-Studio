import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from "framer-motion"
import Navbar from '../components/Navbar'
import InfiniteSlider from '../components/Slider'
import HoverProjects from '../components/HoverProjects'
import Slider from '../components/ImageSlider'
import Footer from '../components/Footer'
import useLenis from '../lenis'
import useTextReveal from '../useTextReveal'

const VideoSection = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1.2])
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["1rem", "2rem"])
  const width = useTransform(scrollYProgress, [0, 1], ["90%", "80%"])
  const height = useTransform(scrollYProgress, [0, 1], ["60%", "100%"])

  return (
    <div ref={ref} className="w-full h-[60vh] md:h-screen flex items-center justify-center mt-20 md:mt-20">
      <motion.video
        style={{
          scale,
          borderRadius,
          width,
          height,
        }}
        autoPlay
        muted
        loop
        className="object-cover shadow-lg"
        src="https://sundown-ivory.vercel.app/video.mp4"
      />
    </div>
  )
}

const Home = () => {
  useLenis()
  useTextReveal()

  return (
    <div className='bg-[#EFEAE3] min-h-screen'>
      <Navbar />

      {/* section 1 */}
      <div className='flex flex-col md:flex-row  items-center justify-between mt-20 px-6 md:px-10'>
        <div className='font-bold text-2xl md:text-3xl space-y-2 text-center md:text-left'>
          <span>Sundown is a multi-disciplinary</span><br />
          <span>studio focused on creating</span><br />
          <span>unique, end-to-end experiences</span><br />
          <span>and environments.</span>
        </div>
        <div className='text-6xl md:text-9xl sm:text-7xl font-bold mt-10 md:mt-0 text-center md:text-right px-2 md:pr-20'>
          <span>SPACES</span> <br />
          <span>THAT</span><br />
          <span>INSPIRE</span>
        </div>
      </div>

      {/* video section */}
      <VideoSection />

      {/* slider */}
      <InfiniteSlider />

      <div className='w-full min-h-screen mt-10 flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-10 lg:px-20'>
        <div className='text-3xl sm:text-4xl md:text-6xl font-bold leading-snug text-center md:text-left'>
          <span>We are a group of </span><br />
          <span>design- driven, goal-</span><br />
          <span>focused creators, producers,</span><br />
          <span>and designers who believe that the details make</span><br />
          <span>all the difference.</span>
        </div>

        <div className='relative flex flex-col items-center w-full md:w-1/2'>
          <img
            src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15d1_Holding_thumb-p-500.jpg"
            className='w-full md:w-[80%] rounded-xl object-cover'
            alt="Design team"
          />
          <p className='mt-6 text-sm md:text-base text-center px-4 md:px-0'>
            We love to create, we love to solve, we love to collaborate, and we love to turn amazing ideas into reality. We’re here to partner with you through every step of the process and know that relationships are the most important things we build.
          </p>
        </div>
      </div>
      <hr className='border-t border-black mb-20 sm:mt-10' />
      
      {/* section 3 */}
      <HoverProjects />

      <div className="w-full px-6 md:px-12 py-10 mt-7">
        <Slider
          slides={[
            "https://images.prismic.io/rejouice-2024/Z1m0-JbqstJ98Vh9_pergola-module-floor-1-360-grey-blue-bioclimatic-ceiling-and-curtains2.png?auto=format,compress",
            "https://www.rejouice.com/_vercel/image?url=https:%2F%2Fimages.prismic.io%2Frejouice-2024%2FZ1m0HZbqstJ98VgZ_oura-abdul-ovaice-3d-cd-031.png?auto=format,compress?auto=compress,format&w=1536&q=80",
            "https://sundown-ivory.vercel.app/page4-1.webp",
            'https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b16f4_Copy%20of%20Nike_Soho_50th_SU22_FL1_6176.webp',
            'https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b16c5_Copy%20of%20Nike_Soho_AMD21_0781_LORES.webp',
            'https://images.pexels.com/photos/24354954/pexels-photo-24354954.jpeg',
            'https://images.pexels.com/photos/12374186/pexels-photo-12374186.jpeg'
          ]}
        />
      </div>

      <div className="w-full flex flex-col md:flex-row justify-between gap-10 px-6 md:px-20 py-10 mt-20">
        {/* Left Column */}
        <div className="flex flex-col gap-10 max-w-full md:max-w-lg">
          <div className="space-y-4 text-center md:text-left">
            <img
              src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b15ff_Nike.svg"
              alt="Nike"
              className=" h-12 md:h-20 mx-auto md:mx-0"
            />
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              Retained Production support across retail and events in NY, CHI LA. Creative Design,
              Design Management, Production/Project Management, and execution of work from concept
              to installation across the Country.
            </p>
          </div>

          <div className="space-y-4 text-center md:text-left">
            <img
              src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1600_Converse.svg"
              alt="Converse"
              className="h-12 md:h-20 mx-auto md:mx-0"
            />
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              Creative Concepting, Design, Design Management, Project Management, and execution of
              work from concept to installation across the Country. Cross functional communication
              and management of third party partners.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-10 max-w-full md:max-w-lg">
          <div className="space-y-4 text-center md:text-left">
            <img
              src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b15fd_Arc%E2%80%99teryx.svg"
              alt="Arc'teryx"
              className="h-12 md:h-20 mx-auto md:mx-0"
            />
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              Production and design along with install oversight and execution support for the SoHo
              store opening on Broadway St. New York. Also working on creative and production work
              for a new store opening in Glendale, California.
            </p>
          </div>

          <div className="space-y-4 text-center md:text-left">
            <img
              src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1601_MediaLink.svg"
              alt="MediaLink"
              className="h-12 md:h-20 mx-auto md:mx-0"
            />
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              Design and Production partner for Hunter Holiday 2022 Pop-in at Nordstrom 57th St,
              New York, including activations in Women's Men's and Kid's zones. Thirty-five (35)
              additional smaller take-downs in Nordstrom stores across the US. Concept design for
              Holiday boot customization events in stores across winter 2022.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
