import React, { useState } from "react";
import { Link } from "react-router-dom";
import ConstPortfolioComponent from "../components/ConstPortfolioComponent";
import CopyrightComponent from "../components/CopyrightComponent";
import AutoScroll from "../components/AutoScrollComponent";
import ImageSliderComponent from "../components/ImageSliderComponent";

const ProjectPage = () => {
  // Pop Up (Id)
  const [popups, setPopups] = useState({});
  const handlePopup = (id) => {
    setPopups((prevPopups) => ({
      ...prevPopups,
      [id]: !prevPopups[id],
    }));
  };

  // Picture Front-End Web Development
  const picturePienotes = [
    "./project-portfolio/fe-web-dev/pienotes/pienotes-1.png",
    "./project-portfolio/fe-web-dev/pienotes/pienotes-2.png",
    "./project-portfolio/fe-web-dev/pienotes/pienotes-3.png",
    "./project-portfolio/fe-web-dev/pienotes/pienotes-4.png",
  ];

  const pictureLiterasik = [
    "./project-portfolio/fe-web-dev/literasik/literasik-1.png",
    "./project-portfolio/fe-web-dev/literasik/literasik-2.png",
    "./project-portfolio/fe-web-dev/literasik/literasik-3.png",
    "./project-portfolio/fe-web-dev/literasik/literasik-4.png",
    "./project-portfolio/fe-web-dev/literasik/literasik-5.png",
    "./project-portfolio/fe-web-dev/literasik/literasik-6.png",
    "./project-portfolio/fe-web-dev/literasik/literasik-7.png",
    "./project-portfolio/fe-web-dev/literasik/literasik-8.png",
    "./project-portfolio/fe-web-dev/literasik/literasik-9.png",
    "./project-portfolio/fe-web-dev/literasik/literasik-10.png",
    "./project-portfolio/fe-web-dev/literasik/literasik-11.png",
  ];

  // Handle External Link
  const handleExternalLinktree = (e) => {
    e.preventDefault();
    window.location.href = "https://linktr.ee/achmadrizky_";
  };

  return (
    <section id="project" className="font-poppins text-white tracking-wider">
      {/* Auto Scroll by Hash */}
      <AutoScroll />

      {/* Header */}
      <div className="bg-project flex flex-col gap-4 items-center justify-center max-w-7xl mx-auto px-3 py-32 w-full lg:px-7">
        <div className="flex flex-col gap-4 justify-center text-center">
          <p className="text-2xl md:text-3xl">Project Portfolio</p>
          <p className="text-sm md:text-lg">Welcome everyone! This is my project, this project can be a consideration for you in hiring me as an employee</p>
          <hr className="w-full" />
        </div>
        <div className="flex gap-4 items-center justify-between text-md">
          <Link to={"/"} className="duration-300 hover:border-b hover:border-sky-500 hover:text-sky-500 ">
            Home
          </Link>
          <Link to={"/"} onClick={handleExternalLinktree} className="duration-300 hover:border-b hover:border-sky-500 hover:text-sky-500">
            Contact Me
          </Link>
          <Link to={"/"} className="duration-300 hover:border-b hover:border-sky-500 hover:text-sky-500">
            Download CV
          </Link>
        </div>
      </div>

      {/* Project */}
      <div className="bg-sky-950 flex flex-col gap-10 items-center justify-center max-w-7xl mx-auto px-3 py-20 w-full lg:px-7">
        {/* Component 1 - Front-End Web Development */}
        <div id="fe-webdev" className="flex flex-col gap-2 w-full ">
          {/* Title */}
          <div className="flex items-center justify-between ">
            <p className="text-md">Front-End Web Development</p>
            <p className="flex items-center gap-2">
              <ConstPortfolioComponent target={2} duration={2000} />
              Project
            </p>
          </div>
          <hr className="border-2 rounded-full" />

          {/* Project - Front-End Web Development */}
          <div className="flex flex-wrap gap-4 items-center justify-center overflow-y-auto p-5 w-auto h-48">
            {/* Literasik */}
            <div className="w-auto" onClick={() => handlePopup("literasik")}>
              <div className="bg-sky-600 cursor-pointer duration-300 flex flex-col gap-3 group p-3 rounded-md relative lg:flex-row hover:p-5">
                <img src="./project-portfolio/fe-web-dev/literasik/literasik-1.png" alt="literasik" className="rounded-md w-auto lg:w-28" />
                <div className="flex flex-col gap-2">
                  <p className="font-semibold text-1xl lg:text-xl">Literasik</p>
                  <p className="text-xs italic">Slicing design figma to HTML and CSS</p>
                  <hr className="w-full" />
                  <p>
                    Work as a <span className="font-bold text-yellow-500">Front-End Web Development</span>
                  </p>
                  <ul className="flex flex-wrap gap-2 text-sm">
                    <li className="bg-sky-500 px-2 py-1 rounded-md">HTML</li>
                    <li className="bg-sky-500 px-2 py-1 rounded-md">CSS</li>
                  </ul>
                </div>
                <span className="absolute bg-sky-950 bg-opacity-75 duration-300 flex inset-0 items-center justify-center opacity-0 text-white underline underline-offset-2s hover:rounded-md group-hover:opacity-100">View Project</span>
              </div>
            </div>
            {popups["literasik"] && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white flex flex-col gap-5 p-6 rounded-lg max-w-lg mx-7 w-auto">
                  <button className="bg-sky-500 duration-300 px-5 py-1 rounded-md w-full hover:bg-sky-700 " onClick={() => handlePopup("literasik")}>
                    Close
                  </button>
                  <div className="border flex flex-col gap-1 items-center p-5 rounded-md shadow-lg">
                    <ImageSliderComponent images={pictureLiterasik} intervalTime={3000} />
                    <p className="text-black text-lg">Literasik</p>
                    <p className="text-gray-700 text-justify text-sm">
                      Literasik is a modern and intuitive website designed to promote literacy and education. Featuring a user-friendly interface, it provides users with curated articles, book reviews, and learning resources. The platform
                      encourages reading habits and critical thinking, making knowledge accessible to all through engaging content and an interactive community section. Literasik is ideal for students, educators, and book enthusiasts
                      looking for insightful and reliable information.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Pienotes */}
            <div className="w-auto" onClick={() => handlePopup("pienotes")}>
              <div className="bg-sky-600 cursor-pointer duration-300 flex flex-col gap-3 group p-3 rounded-md relative lg:flex-row hover:p-5">
                <img src="./project-portfolio/fe-web-dev/pienotes/pienotes-1.png" alt="pienotes" className="rounded-md w-auto lg:w-28" />
                <div className="flex flex-col gap-2">
                  <p className="font-semibold text-1xl lg:text-xl">Pienotes</p>
                  <p className="text-xs italic">Slicing design figma to React + Vite using React Bootstrap</p>
                  <hr className="w-full" />
                  <p>
                    Work as a <span className="font-bold text-yellow-500">Front-End Web Development</span>
                  </p>
                  <ul className="flex flex-wrap gap-2 text-sm">
                    <li className="bg-sky-500 px-2 py-1 rounded-md">React + Vite</li>
                    <li className="bg-sky-500 px-2 py-1 rounded-md">React Bootstrap</li>
                  </ul>
                </div>
                <span className="absolute bg-sky-950 bg-opacity-75 duration-300 flex inset-0 items-center justify-center opacity-0 text-white underline underline-offset-2s hover:rounded-md group-hover:opacity-100">View Project</span>
              </div>
            </div>
            {popups["pienotes"] && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white flex flex-col gap-5 p-6 rounded-lg max-w-lg mx-7 w-auto">
                  <button className="bg-sky-500 duration-300 px-5 py-1 rounded-md w-full hover:bg-sky-700 " onClick={() => handlePopup("pienotes")}>
                    Close
                  </button>
                  <div className="border flex flex-col gap-1 items-center p-5 rounded-md shadow-lg">
                    <ImageSliderComponent images={picturePienotes} intervalTime={3000} />
                    <p className="text-black text-lg">Pienotes</p>
                    <p className="text-gray-700 text-justify text-sm">
                      Pienotes is a web application designed to simplify personal finance management. It enables users to effortlessly track their income and expenses, monitor spending habits, and manage monthly budgets.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Component 2 - Graphic Design */}
        <div id="graphic-design" className="flex flex-col gap-2 w-full ">
          {/* Title */}
          <div className="flex items-center justify-between ">
            <p className="text-md">Graphic Design</p>
            <p className="flex items-center gap-2">
              <ConstPortfolioComponent target={2} duration={2000} />
              Project
            </p>
          </div>
          <hr className="border-2 rounded-full" />

          {/* Project - Graphic Design */}
          <div className="flex flex-wrap gap-4 items-center justify-center overflow-y-auto p-5 w-auto h-48">
            {/* Wav Drape */}
            <div className="w-auto" onClick={() => handlePopup("wavDrape")}>
              <div className="bg-sky-600 cursor-pointer duration-300 flex flex-col gap-3 group p-3 rounded-md relative lg:flex-row hover:p-5">
                <img src="./project-portfolio/graphic-design/wav-drape.png" alt="wav-drape" className="rounded-md w-auto lg:w-28" />
                <div className="flex flex-col gap-2">
                  <p className="font-semibold text-1xl lg:text-xl">Wav Drape</p>
                  <hr className="w-full" />
                  <p>
                    Work as a <span className="font-bold text-yellow-500">Logo Designer</span>
                  </p>
                  <ul className="flex flex-wrap gap-2 text-sm">
                    <li className="bg-sky-500 px-2 py-1 rounded-md">Inkscape</li>
                  </ul>
                </div>
                <span className="absolute bg-sky-950 bg-opacity-75 duration-300 flex inset-0 items-center justify-center opacity-0 text-white underline underline-offset-2s hover:rounded-md group-hover:opacity-100">View Project</span>
              </div>
            </div>
            {popups["wavDrape"] && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white flex flex-col gap-5 p-6 rounded-lg max-w-lg mx-7 w-auto">
                  <button className="bg-sky-500 duration-300 px-5 py-1 rounded-md w-full hover:bg-sky-700 " onClick={() => handlePopup("wavDrape")}>
                    Close
                  </button>
                  <div className="border flex flex-col gap-1 items-center p-5 rounded-md shadow-lg">
                    <img src="./project-portfolio/graphic-design/wav-drape.png" alt="wav-drape" className="border p-2 rounded-md w-auto lg:w-56" />
                    <p className="text-black text-lg">Wav Drape</p>
                    <p className="text-gray-700 text-justify text-sm">
                      The logo features a modern, minimalistic design with geometric shapes that abstractly represent the letters "W" and "D" for the brand "WAV DRAPE." Its deep brown color conveys sophistication, while the clean, uppercase
                      font for the brand name below adds a professional touch, blending creativity with a contemporary aesthetic.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Mangan Sedulur */}
            <div className="w-auto" onClick={() => handlePopup("manganSedulur")}>
              <div className="bg-sky-600 cursor-pointer duration-300 flex flex-col gap-3 group p-3 rounded-md relative lg:flex-row hover:p-5">
                <img src="./project-portfolio/graphic-design/mangan-sedulur.png" alt="mangan-sedulur" className="rounded-md w-auto lg:w-28" />
                <div className="flex flex-col gap-2">
                  <p className="font-semibold text-1xl lg:text-xl">Mangan Sedulur</p>
                  <hr className="w-full" />
                  <p>
                    Work as a <span className="font-bold text-yellow-500">Logo Designer</span>
                  </p>
                  <ul className="flex flex-wrap gap-2 text-sm">
                    <li className="bg-sky-500 px-2 py-1 rounded-md">Inkscape</li>
                  </ul>
                </div>
                <span className="absolute bg-sky-950 bg-opacity-75 duration-300 flex inset-0 items-center justify-center opacity-0 text-white underline underline-offset-2s hover:rounded-md group-hover:opacity-100">View Project</span>
              </div>
            </div>
            {popups["manganSedulur"] && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white flex flex-col gap-5 p-6 rounded-lg max-w-lg mx-7 w-auto">
                  <button className="bg-sky-500 duration-300 px-5 py-1 rounded-md w-full hover:bg-sky-700 " onClick={() => handlePopup("manganSedulur")}>
                    Close
                  </button>
                  <div className="border flex flex-col gap-1 items-center p-5 rounded-md shadow-lg">
                    <img src="./project-portfolio/graphic-design/mangan-sedulur.png" alt="mangan-sedulur" className="border p-2 rounded-md w-auto lg:w-56" />
                    <p className="text-black text-lg">Mangan Sedulur</p>
                    <p className="text-gray-700 text-justify text-sm">
                      The logo features stylized letters "M" and "A" in a modern, symmetrical design with a rich gold color, conveying elegance. An icon resembling a plate above the "A" symbolizes food, while the brand name "Mangan Sedulur"
                      is presented below in a clean, contemporary font, enhancing its sophisticated and approachable aesthetic.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Component 3 - UI/UX Design */}
        <div id="uiux-design" className="flex flex-col gap-2 w-full ">
          {/* Title */}
          <div className="flex items-center justify-between ">
            <p className="text-md">UI/UX Design</p>
            <p className="flex items-center gap-2">
              <ConstPortfolioComponent target={0} duration={2000} />
              Project
            </p>
          </div>
          <hr className="border-2 rounded-full" />
        </div>
      </div>
      <CopyrightComponent />
    </section>
  );
};

export default ProjectPage;
