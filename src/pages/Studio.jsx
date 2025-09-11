import React from "react";
import { motion } from "framer-motion";
import useLenis from "../lenis";
import useTextReveal from "../useTextReveal";
import Footer from "../components/Footer";
const Studio = () => {
  useLenis();
  useTextReveal();

  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <section className="relative h-[100vh] flex items-center justify-center text-center mt-20">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="Studio Background"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10 mt-96">
          <h1 className=" mb-16 text-6xl md:text-[250px] font-serif">
            Our Studio
          </h1>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-24 grid md:grid-cols-2 gap-80 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">About Our Studio</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We are a multidisciplinary creative studio passionate about design,
            branding, and digital innovation. Our mission is to transform ideas
            into impactful experiences that inspire and engage.
          </p>
        </motion.div>

        <motion.img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          alt="Studio Space"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.8 }}
          viewport={{ once: true }}
          className="rounded-2xl shadow-lg"
        />
      </section>

      {/* Showcase Section */}
      <section className="bg-gray-100 py-24">
        <h2 className="text-4xl font-bold text-center mb-16">Our Work</h2>

        <div className="max-w-7xl mx-auto px-6 md:px-16 grid md:grid-cols-2 gap-12 items-center">
          {/* Left big image */}
          <motion.video
            playsInline
            autoPlay
            muted
            loop
            src="https://www.pexels.com/download/video/18069165/"
            alt="Featured Project"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="w-full h-[500px] object-cover rounded-2xl shadow-lg"
          />

          {/* Right stacked content */}
          <div className="space-y-8">
            {/* Top small image + text */}
            <div className="grid grid-cols-2 gap-6 items-center">
              <video
                playsInline
                autoPlay
                muted
                loop
                src="./p-22.mp4"
                alt="Project Detail 1"
                className="w-full h-48 object-cover rounded-xl shadow-md"
              />
              <div>
                <h3 className="text-xl font-bold mb-2">Project One</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Creative spaces designed to inspire innovation and elevate
                  branding experiences.
                </p>
              </div>
            </div>

            {/* Bottom small image + text */}
            <div className="grid grid-cols-2 gap-6 items-center">
              <video
                playsInline
                autoPlay
                muted
                loop
                src="https://www.pexels.com/download/video/4716259/"
                alt="Project Detail 2"
                className="w-full h-48 object-cover rounded-xl shadow-md"
              />
              <div>
                <h3 className="text-xl font-bold mb-2">Project Two</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Blending technology and design, we create seamless digital
                  experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-6xl mx-auto px-6 md:px-16 py-24">
        <h2 className="text-4xl font-bold text-center mb-16">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { name: "Alex Carter", role: "Creative Director" },
            { name: "Sophia Lee", role: "Lead Designer" },
            { name: "James Kim", role: "Developer" },
          ].map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all"
            >
              <img
                src={`https://randomuser.me/api/portraits/men/${i + 32}.jpg`}
                alt={member.name}
                className="w-28 h-28 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-24 text-center space-y-10">
        <h2 className="text-5xl font-bold">Let’s Create Together</h2>
        <p className="mt-6 text-lg text-gray-300">
          Have a project in mind? We’d love to hear from you.
        </p>
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-white">Email</h2>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-[40%] py-3 px-5 rounded-full bg-white text-black border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
          />
        </div>

        {/* Phone */}
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-white">Phone</h2>
          <input
            type="tel"
            placeholder="Enter your phone number"
            className="w-[40%] py-3 px-5 rounded-full bg-white text-black border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
          />
        </div>

        {/* Location */}
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-white">Location</h2>
          <input
            type="text"
            placeholder="Share your location"
            className="w-[40%] py-3 px-5 rounded-full bg-white text-black border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
          />
        </div>
        <button className="mt-10 px-8 py-4 bg-orange-500 hover:bg-orange-600 rounded-xl text-lg font-semibold transition">
          Contact Us
        </button>
      </section>
      <Footer />
    </div>
  );
};

export default Studio;
