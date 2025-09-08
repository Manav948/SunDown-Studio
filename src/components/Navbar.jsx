import React, { useState } from "react"
import { Menu, X } from "lucide-react"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Work", path: "/work" },
    { name: "Studio", path: "/studio" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <header className="fixed top-0 left-0 w-full bg-[#EFEAE3] shadow-md z-50">
      <div className="flex items-center justify-between px-6 md:px-16 py-4">
        {/* Logo */}
        <div>
          <Link to="/">
            <img
              src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15c2_Sundown%20logo.svg"
              className="h-10 md:h-12"
              alt="Logo"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 font-semibold text-lg">
          {navItems.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              className="relative px-6 py-2 border border-black rounded-full overflow-hidden group"
            >
              {/* Text */}
              <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                {item.name}
              </span>

              {/* Sliding background */}
              <span className="absolute left-0 bottom-0 w-full h-full bg-[#EFEAE3] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out rounded-full"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-md border border-black"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-6 px-6 pb-6 bg-[#EFEAE3] border-t border-black">
          {navItems.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              className="px-4 py-2 border border-black rounded-full text-center font-semibold hover:bg-black hover:text-white transition"
              onClick={() => setIsOpen(false)} // close menu on click
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}

export default Navbar
