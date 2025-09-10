import React from "react"
import Footer from "../components/Footer"
// 123 Creative Street, New York, USA
const Contact = () => {
    return (
        <div className="bg-[#EFEAE3] min-h-screen flex flex-col items-center justify-center">
            {/* Heading */}
            <h1 className=" mt-40 text-5xl md:text-7xl font-bold text-center mb-10 text-black font-serif">
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
            <div className="w-full max-w-4xl mb-20 border-t border-b border-black py-16 px-6 md:px-10 bg-[#EFEAE3]">
                <h1 className="text-center mb-16 text-7xl font-serif font-bold">Connect with us</h1>
                <div className="flex flex-col gap-10 text-center md:text-left">

                    {/* Email */}
                    <div className="space-y-3">
                        <h2 className="text-2xl font-semibold text-black">Email</h2>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full py-3 px-5 rounded-full bg-white text-black border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                        />
                    </div>

                    {/* Phone */}
                    <div className="space-y-3">
                        <h2 className="text-2xl font-semibold text-black">Phone</h2>
                        <input
                            type="tel"
                            placeholder="Enter your phone number"
                            className="w-full py-3 px-5 rounded-full bg-white text-black border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                        />
                    </div>

                    {/* Location */}
                    <div className="space-y-3">
                        <h2 className="text-2xl font-semibold text-black">Location</h2>
                        <input
                            type="text"
                            placeholder="Share your location"
                            className="w-full py-3 px-5 rounded-full bg-white text-black border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-6">
                        <button className="w-full md:w-auto px-8 py-3 bg-orange-600 text-white font-semibold rounded-full shadow-md hover:bg-orange-700 transition">
                            Submit
                        </button>
                    </div>
                </div>
            </div>


            <div className="w-full ">
                <Footer />
            </div>

        </div>
    )
}

export default Contact
