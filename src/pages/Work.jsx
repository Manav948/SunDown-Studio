import React from "react"
import { motion } from "framer-motion"
import Footer from "../components/Footer"
const Work = () => {
  return (
    <div className="bg-[#EFEAE3] min-h-screen mt-20 flex flex-col items-center justify-center">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold text-black text-center leading-tight mt-28"
      >
        Our <span className="text-orange-600">Work</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1.8 }}
        className="mt-20 text-lg md:text-xl text-gray-700 max-w-2xl text-center"
      >
        We craft experiences that blend design, technology, and storytelling.
        Every project is built with attention to detail and a passion for
        creativity.
      </motion.p>

      {/* Showcase grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20 w-full max-w-6xl">
        {[
          {
            img: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
            title: "Creative Design",
            desc: "Brand identities and immersive experiences that inspire. and you can feel it batter way.and make perfomance on this website.",
          },
          {
            img: "https://images.pexels.com/photos/3184646/pexels-photo-3184646.jpeg",
            title: "Digital Products",
            desc: "Websites and apps that balance beauty with performance. make it batter experience.on this website and you can feel it batter way.",
          },
          {
            img: "https://images.pexels.com/photos/3184456/pexels-photo-3184456.jpeg",
            title: "Installations",
            desc: "Transforming spaces into unforgettable environments.working on this website and you can feel it batter way.",
          },
        ].map((work, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
          >
            <img
              src={work.img}
              alt={work.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 ">
              <h3 className="text-xl font-bold text-black mb-5">{work.title}</h3>
              <p className="mt-2 text-black tracking-tight leading-relaxed">{work.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* new section */}
      <section className="mt-28 max-w-full mb-40 space-y-16 px-6 md:px-16">
        {/* Innovation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <h2 className="text-3xl font-bold text-black">Innovation at Every Step</h2>
          <p className="text-gray-700 tracking-tight leading-relaxed">
            From concept to execution, we explore modern tools, technologies, and
            trends. Whether it’s interactive web, immersive environments, or product
            design—we aim to push boundaries without losing clarity.
          </p>
        </div>
        <hr className="border-t border-gray-400" />

        {/* Collaboration */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <h2 className="text-3xl font-bold text-black">Collaboration & Partnership</h2>
          <p className="text-gray-700 tracking-tight leading-relaxed">
            We don’t just deliver projects—we build long-term partnerships. The best
            work comes from open dialogue, trust, and a willingness to experiment
            together.
          </p>
        </div>
        <hr className="border-t border-gray-400" />

        {/* Creativity */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <h2 className="text-3xl font-bold text-black">Creativity That Inspires</h2>
          <p className="text-gray-700 tracking-tight leading-relaxed">
            Our team thrives on creativity. Every idea is an opportunity to craft
            something bold and meaningful, turning vision into experiences that spark
            inspiration.
          </p>
        </div>
        <hr className="border-t border-gray-400" />

        {/* Quality */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <h2 className="text-3xl font-bold text-black">Quality & Attention to Detail</h2>
          <p className="text-gray-700 tracking-tight leading-relaxed">
            We believe details make the difference. Precision, craftsmanship, and
            consistency are built into every project to ensure long-lasting impact.
          </p>
        </div>
      </section>

      {/* video section  */}
      <div className="flex justify-center items-center w-full h-screen bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-[80%] h-[80%] object-cover rounded-2xl shadow-lg"
        >
          <source src="./video-sundown.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  )
}

export default Work
