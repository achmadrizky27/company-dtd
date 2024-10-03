import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  // Set Active -> Link (Id)
  const [activeId, setActiveId] = useState("home");
  const handleSetActive = (id) => {
    setActiveId(id);
  };

  // Hamburger Menu
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 w-full font-poppins tracking-wider z-50">
      <div className="max-w-7xl mx-auto px-4 bg-white">
        <div className="flex justify-between items-center py-4">
          <p>My Portfolio</p>

          {/* Menu Items */}
          <div className="hidden md:flex space-x-4">
            <Link to={"#home"} smooth={true} duration={100} className={`${activeId === "home" ? "border-b-2 border-sky-500 translate-y-0.5" : "duration-300 hover:text-blue-500"}`} onClick={() => handleSetActive("home")}>
              Home
            </Link>
            <Link to={"#service"} smooth={true} duration={100} className={`${activeId === "service" ? "border-b-2 border-sky-500 translate-y-0.5" : "duration-300 hover:text-blue-500"}`} onClick={() => handleSetActive("service")}>
              Service
            </Link>
            <Link to={"#contact"} smooth={true} duration={100} className={`${activeId === "contact" ? "border-b-2 border-sky-500 translate-y-0.5" : "duration-300 hover:text-blue-500"}`} onClick={() => handleSetActive("contact")}>
              Contact
            </Link>
            <Link to={"/project#project"} smooth={true} duration={100} className={`${activeId === "project" ? "border-b-2 border-sky-500 translate-y-0.5" : "duration-300 hover:text-sky-500"}`} onClick={() => handleSetActive("project")}>
              My Project
            </Link>
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <Link onClick={toggleMenu} className="focus:outline-none focus:text-blue-300 hover:text-blue-200">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-3 text-sm">
            <Link to={"#home"} smooth={true} duration={100} className={`block py-2 px-3 ${activeId === "home" ? "border-b-2 border-sky-500 px-5" : "duration-300 hover:text-blue-500"}`} onClick={() => handleSetActive("home")}>
              Home
            </Link>
            <Link to={"#service"} smooth={true} duration={100} className={`block py-2 px-3 ${activeId === "service" ? "border-b-2 border-sky-500 px-5" : "duration-300 hover:text-blue-500"}`} onClick={() => handleSetActive("service")}>
              Service
            </Link>
            <Link to={"#contact"} smooth={true} duration={100} className={`block py-2 px-3 ${activeId === "contact" ? "border-b-2 border-sky-500 px-5" : "duration-300 hover:text-blue-500"}`} onClick={() => handleSetActive("contact")}>
              Contact
            </Link>
            <Link
              to={"/project#project"}
              smooth={true}
              duration={100}
              className={`block py-2 px-3 ${activeId === "project" ? "border-b-2 border-sky-500 px-5" : "duration-300 hover:text-blue-500"}`}
              onClick={() => handleSetActive("project")}
            >
              My Project
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavbarComponent;
