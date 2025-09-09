import React from "react"
import { motion } from "framer-motion"
import Footer from "../components/Footer"
const Work = () => {
  return (
    <div className="bg-[#EFEAE3] min-h-screen mt-20 flex flex-col items-center justify-center px-6 md:px-12">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold text-black text-center leading-tight"
      >
        Our <span className="text-orange-600">Work</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl text-center"
      >
        We craft experiences that blend design, technology, and storytelling.
        Every project is built with attention to detail and a passion for
        creativity.
      </motion.p>

      {/* Showcase grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 w-full max-w-6xl">
        {[
          {
            img: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
            title: "Creative Design",
            desc: "Brand identities and immersive experiences that inspire.",
          },
          {
            img: "https://images.pexels.com/photos/3184646/pexels-photo-3184646.jpeg",
            title: "Digital Products",
            desc: "Websites and apps that balance beauty with performance. make it batter experience.on this website and you can feel it batter way.",
          },
          {
            img: "https://images.pexels.com/photos/3184456/pexels-photo-3184456.jpeg",
            title: "Installations",
            desc: "Transforming spaces into unforgettable environments.",
          },
        ].map((work, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
          >
            <img
              src={work.img}
              alt={work.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 ">
              <h3 className="text-xl font-bold text-black">{work.title}</h3>
              <p className="mt-2 text-black text-sm">{work.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default Work
