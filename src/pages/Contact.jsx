import React from "react"
import Footer from "../components/Footer"
const Contact = () => {
    return (
        <div className="bg-[#EFEAE3] min-h-screen flex flex-col items-center justify-center">
            {/* Heading */}
            <h1 className=" mt-40 text-5xl md:text-7xl font-bold text-center mb-10 text-black">
                Let’s Build Something <br className="hidden md:block" /> Amazing Together
            </h1>

            <img src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b169f_Copy%2520of%2520211023_NikeCHI_PlayNewKids_Beauty-03-p-1600.webp"
            className="w-full max-w-7xl rounded-xl shadow-lg mb-10 mt-20" alt="Contact Us" /
            >

            {/* Description */}
            <p className="mt-40 text-lg md:text-xl text-gray-700 text-center max-w-2xl mb-20 leading-relaxed">
                We’d love to hear from you! Whether it’s a new project, collaboration, or
                just a friendly hello, reach out to us and we’ll get back to you as soon
                as possible.
            </p>

            {/* Contact Info */}
            <div className="flex md:flex-col flex-col gap-10 md:gap-20 text-center md:text-left border-t border-b border-black py-10 w-full max-w-4xl mb-20">
                {/* Email */}
                <div className="space-y-3">
                    <h2 className="text-2xl font-semibold text-black">Email</h2>
                    <p className="text-gray-700">hello@sundownstudio.com</p>
                </div>

                {/* Phone */}
                <div className="space-y-3">
                    <h2 className="text-2xl font-semibold text-black">Phone</h2>
                    <p className="text-gray-700">+1 (555) 123-4567</p>
                </div>

                {/* Location */}
                <div className="space-y-3">
                    <h2 className="text-2xl font-semibold text-black">Location</h2>
                    <p className="text-gray-700">123 Creative Street, New York, USA</p>
                </div>
            </div>

          <div className="w-full ">
            <Footer />
          </div>

        </div>
    )
}

export default Contact
