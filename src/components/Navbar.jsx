import React from 'react'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between'>
            {/* Logo */}
            <div>
                <img 
                    src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15c2_Sundown%20logo.svg" 
                    className='mt-10 pl-16' 
                    alt="Logo"
                />
            </div>

            {/* Nav Links */}
            <nav className='flex gap-10 pr-20 mt-10 font-semibold text-lg'>
                {["Work", "Studio", "Contact"].map((item, i) => (
                    <a 
                        key={i}
                        href="#"
                        className="relative px-6 py-2 border border-black rounded-full overflow-hidden group"
                    >
                        {/* Text */}
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                            {item}
                        </span>

                        {/* Sliding background */}
                        <span className="absolute left-0 bottom-0 w-full h-full bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out rounded-full"></span>
                    </a>
                ))}
            </nav>
        </div>
    )
}

export default Navbar
