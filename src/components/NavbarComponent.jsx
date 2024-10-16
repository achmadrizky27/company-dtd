import React, { useState, useEffect } from "react";
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

  // Dinamis Color Navbar
  const [navBackground, setNavBackground] = useState("bg-transparent");
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          switch (sectionId) {
            case "home":
              setNavBackground("");
              break;
            case "about":
              setNavBackground("bg-white text-slate-700");
              break;
            case "service":
              setNavBackground("");
              break;
            case "project":
              setNavBackground("");
              break;
            case "contact":
              setNavBackground("");
              break;
            default:
              setNavBackground("bg-transparent");
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-0 w-full font-poppins tracking-wider z-50">
      <div className={`max-w-7xl mx-auto px-3 text-white md:px-7 ${navBackground}`}>
        <div className="flex justify-between items-center py-5">
          <div className="flex gap-2 items-center">
            <img src="../profile/logo-non-bg.png" alt="logo-non-bg" width={30} />
            <p className="flex sm:hidden">DraTechDev</p>
            <p className="hidden sm:flex">Drafire Tech Development</p>
          </div>

          {/* Hamburger Icon */}
          <div>
            <Link onClick={toggleMenu} className="focus:outline-none focus:text-blue-300 hover:text-blue-200">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="bg-black bg-opacity-75 py-3 rounded-md text-sm text-white">
            <Link to={"#home"} smooth={true} duration={100} className={`block py-2 px-4 ${activeId === "home" ? "border-b-2 border-blue-200 px-8" : "duration-300 hover:text-blue-200"}`} onClick={() => handleSetActive("home")}>
              Home
            </Link>
            <Link to={"#about"} smooth={true} duration={100} className={`block py-2 px-4 ${activeId === "about" ? "border-b-2 border-blue-200 px-8" : "duration-300 hover:text-blue-200"}`} onClick={() => handleSetActive("about")}>
              About
            </Link>
            <Link to={"#service"} smooth={true} duration={100} className={`block py-2 px-4 ${activeId === "service" ? "border-b-2 border-blue-200 px-8" : "duration-300 hover:text-blue-200"}`} onClick={() => handleSetActive("service")}>
              Service
            </Link>
            <Link to={"#project"} smooth={true} duration={100} className={`block py-2 px-4 ${activeId === "project" ? "border-b-2 border-blue-200 px-8" : "duration-300 hover:text-blue-200"}`} onClick={() => handleSetActive("project")}>
              Project
            </Link>
            <Link to={"#contact"} smooth={true} duration={100} className={`block py-2 px-4 ${activeId === "contact" ? "border-b-2 border-blue-200 px-8" : "duration-300 hover:text-blue-200"}`} onClick={() => handleSetActive("contact")}>
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavbarComponent;
