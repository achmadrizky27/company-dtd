// Package / Library
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { Link } from "react-router-dom";

// Pages
import Layout from "./Layout";

// Components
import ConstPortfolioComponent from "../components/ConstPortfolioComponent";
import Testimonial from "../components/Testimoni";

// Projects
import ArtificialIntelligence from "../projects/ArtificialIntelligence";
import MachineLearning from "../projects/MachineLearning";
import MobileDevelopment from "../projects/MobileDev";
import WebDevelopment from "../projects/WebDev";
import GameDevelopment from "../projects/GameDev";
import NaturalLanguageProcessing from "../projects/NaturalLanguageProcessing";
import ComputerVision from "../projects/ComputerVision";

const HomePage = () => {
  // AOS Animation
  useEffect(() => {
    Aos.init({
      duration: 1000, // durasi animasi
      once: true, // animasi hanya terjadi sekali
    });
  }, []);

  // Function -> Role Switcher
  const RoleSwitcher = () => {
    const roles = ["Web Development", "Android App Development", "Machine Learning", "Artificial Intelligence", "Natural Language Processing", "Computer Vision", "Game Development"];
    const [index, setIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
      const role = roles[index];
      const speed = 100;
      const deleteSpeed = 50;
      const typingSpeed = 2000;
      let timerId;

      const type = () => {
        setDisplayText((prev) => role.substring(0, prev.length + 1));
        if (displayText === role) {
          setTimeout(() => setIsDeleting(true), typingSpeed);
        }
      };

      const erase = () => {
        setDisplayText((prev) => role.substring(0, prev.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }
      };

      if (isDeleting) {
        timerId = setTimeout(erase, deleteSpeed);
      } else {
        timerId = setTimeout(type, speed);
      }
      return () => clearTimeout(timerId);
    }, [displayText, isDeleting, index, roles]);
    return <span className="text-yellow-400"> {displayText}</span>;
  };

  // Animation -> Translate Y
  const translateY = useSpring({
    from: { opacity: 0, transform: "translateY(-50px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { duration: 1000 },
  });

  // Set Active -> Button Tools and Tech Stack
  const [projects, setProject] = useState("ai");
  const renderProject = () => {
    if (projects === "ai") {
      return <ArtificialIntelligence />;
    } else if (projects === "ml") {
      return <MachineLearning />;
    } else if (projects === "md") {
      return <MobileDevelopment />;
    } else if (projects === "wd") {
      return <WebDevelopment />;
    } else if (projects === "gd") {
      return <GameDevelopment />;
    } else if (projects === "cv") {
      return <ComputerVision />;
    } else if (projects === "nlp") {
      return <NaturalLanguageProcessing />;
    }
  };

  // Pop Up (Id)
  const [popups, setPopups] = useState({});
  const handlePopup = (id) => {
    setPopups((prevPopups) => ({
      ...prevPopups,
      [id]: !prevPopups[id],
    }));
  };

  return (
    <Layout id="home">
      {/* Home - Done */}
      <section id="home" className="font-poppins tracking-wider text-white">
        <div className="bg-home flex flex-col gap-4 items-start justify-center max-w-7xl px-3 min-h-screen md:px-7">
          <div className="flex flex-col gap-2 w-full md:w-1/2">
            <p className="font-bold text-4xl md:text-5xl">Grafire Tech Development</p>
            <p className="font-bold text-2xl md:text-3xl">
              Digital Product, <RoleSwitcher />
            </p>
            <hr className="border-2 w-full" />
            <p className="text-md">Digital Product Innovation for the Future of Indonesia</p>
          </div>
          <Link to={"#about"} className="bg-blue-500 duration-300 px-6 py-2 rounded-md hover:bg-blue-700 hover:translate-x-1">
            Who we are?
          </Link>
        </div>
      </section>

      {/* About - Done*/}
      <section id="about" className="font-poppins tracking-wider text-slate-700">
        <div className="flex flex-col gap-10 items-center justify-center max-w-7xl px-3 py-28 md:py-32 md:px-7">
          {/* Row 1 - Description Company */}
          <div className="flex flex-col gap-10 items-center justify-between w-full md:flex-row md:gap-0">
            <div className="flex flex-col gap-4 items-start justify-center w-full md:w-1/2">
              <p className="font-bold text-3xl lg:text-4xl" data-aos-duration="500" data-aos-offset="150" data-aos="fade-down">
                A Brief Insight <span className="text-blue-500">Drafire Tech Development</span>
              </p>
              <p className="border-2 border-blue-500 p-4 rounded-md text-justify" data-aos-duration="500" data-aos-offset="150" data-aos="fade-right">
                A forward-thinking technology company specializing in delivering cutting-edge digital products and solutions. With expertise in mobile application development, web development, machine learning, and other advanced
                technologies, we are committed to helping businesses and individuals thrive in the digital era.
              </p>
              <div className="flex items-center gap-4 w-full" data-aos-duration="500" data-aos-offset="150" data-aos="fade-up">
                <Link to={"#service"} className="bg-blue-500 duration-300 px-6 py-2 rounded-md text-white w-auto hover:bg-blue-700 hover:translate-x-1">
                  Our Service?
                </Link>
                <animated.div style={translateY} className="flex gap-4 items-start justify-start text-start w-auto">
                  <a href="/" className="duration-300 hover:bg-blue-500 hover:p-5 hover:rounded-full hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                    </svg>
                  </a>
                  <a href="/" className="duration-300 hover:bg-blue-500 hover:p-5 hover:rounded-full hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                    </svg>
                  </a>
                  <a href="/" className="duration-300 hover:bg-blue-500 hover:p-5 hover:rounded-full hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                    </svg>
                  </a>
                  <a href="/" className="duration-300 hover:bg-blue-500 hover:p-5 hover:rounded-full hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                    </svg>
                  </a>
                </animated.div>
              </div>
            </div>
            <div className="flex items-center justify-center w-full md:w-1/2" data-aos-duration="500" data-aos-offset="150" data-aos="flip-left">
              <img src="../profile/img-about.png" alt="img-about" className="w-72" />
            </div>
          </div>

          {/* Row 2 - Dashboard Count */}
          <div className="flex flex-col gap-4 font-bold items-center justify-between text-white w-full md:flex-row" data-aos-duration="500" data-aos-offset="150" data-aos="fade-down">
            <div className="bg-blue-500 flex items-center justify-center rounded-md w-full">
              <div className="p-4 text-center w-full">
                <p>Founded On The Date</p>
                <ConstPortfolioComponent target={16} duration={5000} />
              </div>
            </div>
            <div className="bg-blue-500 flex items-center justify-center rounded-md w-full">
              <div className="p-4 text-center w-full">
                <p>Founded On The Month</p>
                <ConstPortfolioComponent target={10} duration={5000} />
              </div>
            </div>
            <div className="bg-blue-500 flex items-center justify-center rounded-md w-full">
              <div className="p-4 text-center w-full">
                <p>Founded On The Year</p>
                <ConstPortfolioComponent target={2024} duration={5000} />
              </div>
            </div>
          </div>

          {/* Row 3 - Team Officials */}
          <div className="flex flex-col gap-10 items-center justify-around w-auto">
            <p className="font-bold text-3xl md:text-4xl" data-aos-duration="500" data-aos-offset="150" data-aos="fade-down">
              Team <span className="text-blue-500">Official</span>
            </p>
            <div className="flex flex-wrap gap-10 items-start justify-center w-auto md:flex-row">
              {/* Fadilano Abraham */}
              <div className="border-2 border-blue-500 flex flex-col gap-1 items-center p-5 rounded-md w-full md:w-auto" data-aos-duration="500" data-aos-offset="150" data-aos="fade-down-right">
                <div className="flex flex-col gap-1 items-center justify-center">
                  <img src="../team-official/fadilano.png" alt="fadilano" className="rounded-full w-44" />
                  <p className="font-bold text-xl">Fadilano Abraham</p>
                  <p>Project Manager</p>
                </div>
                <hr className="border-2 border-blue-500 w-full" />
                <div className="flex flex-col items-center justify-center w-60">
                  <p>
                    <ConstPortfolioComponent target={22} duration={5000} />
                    <span className="">Tahun</span>
                  </p>
                  <p className="italic text-center text-sm">`If you're not a good shot today, don't worry. There are other ways to be usefull`</p>
                </div>
              </div>

              {/* Raihan Darrel A */}
              <div className="border-2 border-blue-500 flex flex-col gap-1 items-center p-5 rounded-md w-full md:w-auto" data-aos-duration="500" data-aos-offset="150" data-aos="fade-down">
                <div className="flex flex-col gap-1 items-center justify-center">
                  <img src="../team-official/darrel.png" alt="darrel" className="rounded-full w-44" />
                  <p className="font-bold text-xl">Raihan Darrel A</p>
                  <p>System/Software Analyst</p>
                </div>
                <hr className="border-2 border-blue-500 w-full" />
                <div className="flex flex-col items-center justify-center w-60">
                  <p>
                    <ConstPortfolioComponent target={20} duration={5000} />
                    <span className="">Tahun</span>
                  </p>
                  <p className="italic text-center text-sm">`Orang yang terlihat tenang dengan isi kepala yang berisik`</p>
                </div>
              </div>

              {/* Muhammad Ridwan */}
              <div className="border-2 border-blue-500 flex flex-col gap-1 items-center p-5 rounded-md w-full md:w-auto" data-aos-duration="500" data-aos-offset="150" data-aos="fade-down-left">
                <div className="flex flex-col gap-1 items-center justify-center">
                  <img src="../team-official/ridwan.png" alt="ridwan" className="rounded-full w-44" />
                  <p className="font-bold text-xl">Muhammad Ridwan</p>
                  <p>Software Designer</p>
                </div>
                <hr className="border-2 border-blue-500 w-full" />
                <div className="flex flex-col items-center justify-center w-60">
                  <p>
                    <ConstPortfolioComponent target={21} duration={5000} />
                    <span className="">Tahun</span>
                  </p>
                  <p className="italic text-center text-sm">`Lelaki tidak bercerita, tapi kabur ke kamboja`</p>
                </div>
              </div>

              {/* Achmad Rizky */}
              <div className="border-2 border-blue-500 flex flex-col gap-1 items-center p-5 rounded-md w-full md:w-auto" data-aos-duration="500" data-aos-offset="150" data-aos="fade-up-right">
                <div className="flex flex-col gap-1 items-center justify-center">
                  <img src="../team-official/rizky.png" alt="rizky" className="rounded-full w-44" />
                  <p className="font-bold text-xl">Achmad Rizky</p>
                  <p>Programmer</p>
                </div>
                <hr className="border-2 border-blue-500 w-full" />
                <div className="flex flex-col items-center justify-center w-60">
                  <p>
                    <ConstPortfolioComponent target={21} duration={5000} />
                    <span className="">Tahun</span>
                  </p>
                  <p className="italic text-center text-sm">`King indo lolos piala dunia 2026`</p>
                </div>
              </div>

              {/* M. Rayhan Pasyaputra */}
              <div className="border-2 border-blue-500 flex flex-col gap-1 items-center p-5 rounded-md w-full md:w-auto" data-aos-duration="500" data-aos-offset="150" data-aos="fade-up">
                <div className="flex flex-col gap-1 items-center justify-center">
                  <img src="../team-official/rayhan.png" alt="rayhan" className="rounded-full w-44" />
                  <p className="font-bold text-xl">M. Rayhan Pasyaputra</p>
                  <p>Tester</p>
                </div>
                <hr className="border-2 border-blue-500 w-full" />
                <div className="flex flex-col items-center justify-center w-60">
                  <p>
                    <ConstPortfolioComponent target={21} duration={5000} />
                    <span className="">Tahun</span>
                  </p>
                  <p className="italic text-center text-sm">`Setiap orang punya gilirannya masing - masing, jadi bersabarlah`</p>
                </div>
              </div>

              {/* Rendi Irgi Ardiansyah */}
              <div className="border-2 border-blue-500 flex flex-col gap-1 items-center p-5 rounded-md w-full md:w-auto" data-aos-duration="500" data-aos-offset="150" data-aos="fade-up-left">
                <div className="flex flex-col gap-1 items-center justify-center">
                  <img src="../team-official/rendi.png" alt="rendi" className="rounded-full w-44" />
                  <p className="font-bold text-xl"> Rendi Irgi Ardiansyah</p>
                  <p>Technical Writer</p>
                </div>
                <hr className="border-2 border-blue-500 w-full" />
                <div className="flex flex-col items-center justify-center w-60">
                  <p>
                    <ConstPortfolioComponent target={21} duration={5000} />
                    <span className="">Tahun</span>
                  </p>
                  <p className="italic text-center text-sm">`Jangan mengusik kebebasanku dingin tetapi tidak kejam aku berlutut tidak akan`</p>
                </div>
              </div>
            </div>
          </div>

          {/* Row 4 - Partners */}
          <div className="flex flex-col gap-10 items-center justify-center w-auto">
            <p className="font-bold text-3xl md:text-4xl" data-aos-duration="500" data-aos-offset="150" data-aos="fade-down">
              <span className="text-blue-500">Partner</span> in Business
            </p>
            <div className="flex flex-wrap gap-10 items-center justify-around" data-aos-duration="500" data-aos-offset="150" data-aos="fade-down">
              <img src="../patners/shopee.png" alt="shopee" data-aos-duration="500" data-aos-offset="150" data-aos="fade-up-right" />
              <img src="../patners/kominfo.png" alt="kominfo" data-aos-duration="500" data-aos-offset="150" data-aos="fade-up-right" />
              <img src="../patners/traveloka.png" alt="traveloka" data-aos-duration="500" data-aos-offset="150" data-aos="fade-down-left" />
              <img src="../patners/bluebird.png" alt="bluebird" data-aos-duration="500" data-aos-offset="150" data-aos="fade-down-left" />
              <img src="../patners/gojek.png" alt="gojek" data-aos-duration="500" data-aos-offset="150" data-aos="fade-right" />
              <img src="../patners/garudaindonesia.png" alt="garudaindonesia  " data-aos-duration="500" data-aos-offset="150" data-aos="zoom-in" />
              <img src="../patners/tokopedia.png" alt="tokopedia" data-aos-duration="500" data-aos-offset="150" data-aos="fade-left" />
              <img src="../patners/toyota.png" alt="toyota" data-aos-duration="500" data-aos-offset="150" data-aos="fade-up" />
              <img src="../patners/unitedtractors.png" alt="unitedtractors" data-aos-duration="500" data-aos-offset="150" data-aos="fade-up" />
            </div>
          </div>
        </div>
      </section>

      {/* Service - Done */}
      <section id="service" className="font-poppins tracking-wider text-slate-700 ">
        <div className="bg-blue-100 flex flex-col gap-10 items-start justify-center max-w-7xl px-3 py-28 md:py-32 md:px-7">
          <div className="flex flex-col items-center justify-center md:items-end md:justify-end md:text-end">
            <p className="font-bold text-3xl md:text-4xl" data-aos-duration="500" data-aos-offset="150" data-aos="fade-down">
              Our Services, <span className="text-blue-500">Digital Product</span>
            </p>
          </div>
          <div className="bg-white flex flex-col items-start justify-center gap-10 p-5 rounded-md shadow-lg w-full md:flex-row">
            <div className="border-2 border-blue-500 flex flex-col items-center justify-center rounded-md w-full md:w-72" data-aos-duration="500" data-aos-offset="150" data-aos="fade-right">
              <Link
                to={"#!"}
                onClick={() => setProject("ai")}
                className={`${
                  projects === "ai" ? "active bg-blue-900 flex font-semibold items-center justify-center text-center text-white" : "duration-300 flex items-center justify-center text-center hover:text-white hover:bg-blue-800"
                } px-2 py-2 w-full `}
              >
                Artificial Intelligence
              </Link>
              <Link
                to={"#!"}
                onClick={() => setProject("ml")}
                className={`${
                  projects === "ml" ? "active bg-blue-900 flex font-semibold items-center justify-center text-center text-white" : "duration-300 flex items-center justify-center text-center hover:text-white hover:bg-blue-800"
                } px-2 py-2 w-full`}
              >
                Machine Learning
              </Link>
              <Link
                to={"#!"}
                onClick={() => setProject("md")}
                className={`${
                  projects === "md" ? "active bg-blue-900 flex font-semibold items-center justify-center text-center text-white" : "duration-300 flex items-center justify-center text-center hover:text-white hover:bg-blue-800"
                } px-2 py-2 w-full`}
              >
                Mobile Development
              </Link>
              <Link
                to={"#!"}
                onClick={() => setProject("wd")}
                className={`${
                  projects === "wd" ? "active bg-blue-900 flex font-semibold items-center justify-center text-center text-white" : "duration-300 flex items-center justify-center text-center hover:text-white hover:bg-blue-800"
                } px-2 py-2 w-full`}
              >
                Web Development
              </Link>
              <Link
                to={"#!"}
                onClick={() => setProject("gd")}
                className={`${
                  projects === "gd" ? "active bg-blue-900 flex font-semibold items-center justify-center text-center text-white" : "duration-300 flex items-center justify-center text-center hover:text-white hover:bg-blue-800"
                } px-2 py-2 w-full`}
              >
                Game Development
              </Link>
              <Link
                to={"#!"}
                onClick={() => setProject("cv")}
                className={`${
                  projects === "cv" ? "active bg-blue-900 flex font-semibold items-center justify-center text-center text-white" : "duration-300 flex items-center justify-center text-center hover:text-white hover:bg-blue-800"
                } px-2 py-2 w-full`}
              >
                Computer Vision
              </Link>
              <Link
                to={"#!"}
                onClick={() => setProject("nlp")}
                className={`${
                  projects === "nlp" ? "active bg-blue-900 flex font-semibold items-center justify-center text-center text-white" : "duration-300 flex items-center justify-center text-center hover:text-white hover:bg-blue-800"
                } px-2 py-2 w-full`}
              >
                Natural Language Processing
              </Link>
            </div>
            <div className="flex items-center justify-center rounded-md w-full md:w-3/4" data-aos-duration="500" data-aos-offset="150" data-aos="zoom-in">
              <main>{renderProject()}</main>
            </div>
          </div>
          <Testimonial />
        </div>
      </section>

      {/* Project - Done */}
      <section id="project" className="font-poppins tracking-wider text-slate-700" data-aos-duration="500" data-aos-offset="150" data-aos="fade-down">
        <div className="bg-blue-100 flex flex-col gap-10 items-center justify-center max-w-7xl px-3 py-28 md:py-32 md:px-7">
          <p className="font-bold text-3xl md:text-4xl">
            <span className="text-blue-500">Highlight</span> Project
          </p>
          <div className="flex flex-col gap-10 items-center justify-center max-w-7xl mx-auto text-white w-full">
            <div className="md:bg-white flex flex-wrap gap-4 items-center justify-center overflow-y-auto md:p-10 rounded-md md:shadow-lg w-full h-96">
              {/* E - Mading JWP */}
              <div className="w-full" onClick={() => handlePopup("emading")}>
                <div className="bg-blue-500 cursor-pointer duration-300 flex flex-col gap-3 group p-5 rounded-md relative lg:flex-row hover:p-6">
                  <img src="./project-portfolio/emading.png" alt="emading" className="rounded-md w-auto lg:w-44" />
                  <div className="flex flex-col gap-2">
                    <p className="font-semibold text-1xl lg:text-xl">E - Mading</p>
                    <hr className="w-full" />
                    <p>
                      Digital Product, <span className="font-bold text-blue-50">Web Development</span>
                    </p>
                    <ul className="flex flex-wrap gap-2 text-sm">
                      <li className="bg-blue-400 px-2 py-1 rounded-md">PHP</li>
                      <li className="bg-blue-400 px-2 py-1 rounded-md">JavaScript</li>
                      <li className="bg-blue-400 px-2 py-1 rounded-md">MySQL</li>
                    </ul>
                  </div>
                  <span className="absolute bg-sky-950 bg-opacity-75 duration-300 flex inset-0 items-center justify-center opacity-0 text-white underline underline-offset-2s hover:rounded-md group-hover:opacity-100">View Project</span>
                </div>
              </div>
              {popups["emading"] && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                  <div className="bg-white flex flex-col gap-5 p-6 rounded-lg max-w-lg mx-3 w-auto">
                    <button className="bg-blue-500 duration-300 px-5 py-1 rounded-md w-full hover:bg-blue-700 " onClick={() => handlePopup("emading")}>
                      Close
                    </button>
                    <div className="border flex flex-col gap-1 items-center p-5 rounded-md shadow-lg">
                      <img src="./project-portfolio/emading.png" alt="emading" className="border p-2 rounded-md w-auto lg:w-56" />
                      <p className="text-black text-lg">E-Mading JWP</p>
                      <p className="text-gray-700 text-justify text-md">
                        Landing page website artikel berfungsi sebagai halaman utama yang menyambut pengunjung dan memberikan gambaran umum tentang isi situs. Tujuannya adalah untuk menarik perhatian, memberikan kesan pertama yang baik,
                        serta memudahkan akses ke konten secara cepat dan sederhana
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Eye Care */}
              <div className="w-full" onClick={() => handlePopup("eyecare")}>
                <div className="bg-blue-500 cursor-pointer duration-300 flex flex-col gap-3 group p-5 rounded-md relative lg:flex-row hover:p-6">
                  <img src="./project-portfolio/eyecare.png" alt="eyecare" className="rounded-md w-auto lg:w-44" />
                  <div className="flex flex-col gap-2">
                    <p className="font-semibold text-1xl lg:text-xl">Eye Care</p>
                    <hr className="w-full" />
                    <p>
                      Digital Product, <span className="font-bold text-blue-50">Mobile App Development</span>
                    </p>
                    <ul className="flex flex-wrap gap-2 text-sm">
                      <li className="bg-blue-400 px-2 py-1 rounded-md">Kotlin</li>
                      <li className="bg-blue-400 px-2 py-1 rounded-md">Firebase</li>
                    </ul>
                  </div>
                  <span className="absolute bg-sky-950 bg-opacity-75 duration-300 flex inset-0 items-center justify-center opacity-0 text-white underline underline-offset-2s hover:rounded-md group-hover:opacity-100">View Project</span>
                </div>
              </div>
              {popups["eyecare"] && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                  <div className="bg-white flex flex-col gap-5 p-6 rounded-lg max-w-lg mx-3 w-auto">
                    <button className="bg-blue-500 duration-300 px-5 py-1 rounded-md w-full hover:bg-blue-700 " onClick={() => handlePopup("eyecare")}>
                      Close
                    </button>
                    <div className="border flex flex-col gap-1 items-center p-5 rounded-md shadow-lg">
                      <img src="./project-portfolio/eyecare.png" alt="eyecare" className="border p-2 rounded-md w-auto lg:w-56" />
                      <p className="text-black text-lg">Eye Care</p>
                      <p className="text-gray-700 text-justify text-md">
                        EyeCare adalah aplikasi Android inovatif yang dirancang untuk memberdayakan pengguna dalam menilai kesehatan mata mereka secara mandiri dan mendeteksi gejala awal penyakit mata menggunakan klasifikasi gambar.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Fruit Match */}
              <div className="w-full" onClick={() => handlePopup("fruitmatch")}>
                <div className="bg-blue-500 cursor-pointer duration-300 flex flex-col gap-3 group p-5 rounded-md relative lg:flex-row hover:p-6">
                  <img src="./project-portfolio/fruitmatch.png" alt="fruitmatch" className="rounded-md w-auto lg:w-44" />
                  <div className="flex flex-col gap-2">
                    <p className="font-semibold text-1xl lg:text-xl">Fruit Match</p>
                    <hr className="w-full" />
                    <p>
                      Digital Product, <span className="font-bold text-blue-50">Game Development</span>
                    </p>
                    <ul className="flex flex-wrap gap-2 text-sm">
                      <li className="bg-blue-400 px-2 py-1 rounded-md">Unity</li>
                    </ul>
                  </div>
                  <span className="absolute bg-sky-950 bg-opacity-75 duration-300 flex inset-0 items-center justify-center opacity-0 text-white underline underline-offset-2s hover:rounded-md group-hover:opacity-100">View Project</span>
                </div>
              </div>
              {popups["fruitmatch"] && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                  <div className="bg-white flex flex-col gap-5 p-6 rounded-lg max-w-lg mx-3 w-auto">
                    <button className="bg-blue-500 duration-300 px-5 py-1 rounded-md w-full hover:bg-blue-700 " onClick={() => handlePopup("fruitmatch")}>
                      Close
                    </button>
                    <div className="border flex flex-col gap-1 items-center p-5 rounded-md shadow-lg">
                      <img src="./project-portfolio/fruitmatch.png" alt="fruitmatch" className="border p-2 rounded-md w-auto lg:w-56" />
                      <p className="text-black text-lg">Fruit Match</p>
                      <p className="text-gray-700 text-justify text-md">
                        Fruit Match adalah aplikasi game edukatif berbasis mobile yang mengajak pengguna untuk menebak dan mencocokkan gambar buah dengan nama yang sesuai. Game ini dirancang dengan tujuan meningkatkan pengetahuan pemain
                        tentang berbagai jenis buah, sekaligus melatih keterampilan kognitif seperti ingatan visual dan kemampuan identifikasi.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Multi Check Plagiarsm */}
              <div className="w-full" onClick={() => handlePopup("multicheckplagiarsm")}>
                <div className="bg-blue-500 cursor-pointer duration-300 flex flex-col gap-3 group p-5 rounded-md relative lg:flex-row hover:p-6">
                  <img src="./project-portfolio/multicheckplagiarsm.png" alt="multicheckplagiarsm" className="rounded-md w-auto lg:w-44" />
                  <div className="flex flex-col gap-2">
                    <p className="font-semibold text-1xl lg:text-xl">Multi Check Plagiarsm</p>
                    <hr className="w-full" />
                    <p>
                      Digital Product, <span className="font-bold text-blue-50">Natural Language Processing</span>
                    </p>
                    <ul className="flex flex-wrap gap-2 text-sm">
                      <li className="bg-blue-400 px-2 py-1 rounded-md">Python</li>
                    </ul>
                  </div>
                  <span className="absolute bg-sky-950 bg-opacity-75 duration-300 flex inset-0 items-center justify-center opacity-0 text-white underline underline-offset-2s hover:rounded-md group-hover:opacity-100">View Project</span>
                </div>
              </div>
              {popups["multicheckplagiarsm"] && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                  <div className="bg-white flex flex-col gap-5 p-6 rounded-lg max-w-lg mx-3 w-auto">
                    <button className="bg-blue-500 duration-300 px-5 py-1 rounded-md w-full hover:bg-blue-700 " onClick={() => handlePopup("multicheckplagiarsm")}>
                      Close
                    </button>
                    <div className="border flex flex-col gap-1 items-center p-5 rounded-md shadow-lg">
                      <img src="./project-portfolio/multicheckplagiarsm.png" alt="multicheckplagiarsm" className="border p-2 rounded-md w-auto lg:w-56" />
                      <p className="text-black text-lg">Multi Check Plagiarsm</p>
                      <p className="text-gray-700 text-justify text-md">
                        Multi Check Plagiarism adalah aplikasi berbasis Python yang memanfaatkan teknologi Natural Language Processing (NLP) untuk mendeteksi plagiarisme pada teks. Aplikasi ini dirancang untuk memeriksa teks secara
                        menyeluruh terhadap berbagai sumber dokumen, baik online maupun offline, dengan cepat dan akurat.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Hair Idea */}
              <div className="w-full" onClick={() => handlePopup("hairidea")}>
                <div className="bg-blue-500 cursor-pointer duration-300 flex flex-col gap-3 group p-5 rounded-md relative lg:flex-row hover:p-6">
                  <img src="./project-portfolio/hairidea.png" alt="hairidea" className="rounded-md w-auto lg:w-44" />
                  <div className="flex flex-col gap-2">
                    <p className="font-semibold text-1xl lg:text-xl">Hair Idea</p>
                    <hr className="w-full" />
                    <p>
                      Digital Product, <span className="font-bold text-blue-50">Web Development</span>
                    </p>
                    <ul className="flex flex-wrap gap-2 text-sm">
                      <li className="bg-blue-400 px-2 py-1 rounded-md">Bootstrap</li>
                      <li className="bg-blue-400 px-2 py-1 rounded-md">Laravel</li>
                      <li className="bg-blue-400 px-2 py-1 rounded-md">MySQL</li>
                    </ul>
                  </div>
                  <span className="absolute bg-sky-950 bg-opacity-75 duration-300 flex inset-0 items-center justify-center opacity-0 text-white underline underline-offset-2s hover:rounded-md group-hover:opacity-100">View Project</span>
                </div>
              </div>
              {popups["hairidea"] && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                  <div className="bg-white flex flex-col gap-5 p-6 rounded-lg max-w-lg mx-3 w-auto">
                    <button className="bg-blue-500 duration-300 px-5 py-1 rounded-md w-full hover:bg-blue-700 " onClick={() => handlePopup("hairidea")}>
                      Close
                    </button>
                    <div className="border flex flex-col gap-1 items-center p-5 rounded-md shadow-lg">
                      <img src="./project-portfolio/hairidea.png" alt="hairidea" className="border p-2 rounded-md w-auto lg:w-56" />
                      <p className="text-black text-lg">Hair Idea</p>
                      <p className="text-gray-700 text-justify text-md">
                        HairIdea adalah sebuah situs website yang dirancang untuk membantu pengguna dalam menemukan tren rambut dan merawat rambut pengguna dengan lebih baik. Website ini menawarkan berbagai fitur yang informatif dan
                        interaktif bagi pengguna yang mencari rekomendasi tren gaya rambut, sesuai dengan bentuk wajah dan jenis rambut melalui fitur chatbot.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Presensi UG */}
              <div className="w-full" onClick={() => handlePopup("presensiug")}>
                <div className="bg-blue-500 cursor-pointer duration-300 flex flex-col gap-3 group p-5 rounded-md relative lg:flex-row hover:p-6">
                  <img src="./project-portfolio/presensiug.png" alt="presensiug" className="rounded-md w-auto lg:w-44" />
                  <div className="flex flex-col gap-2">
                    <p className="font-semibold text-1xl lg:text-xl">Presensi UG</p>
                    <hr className="w-full" />
                    <p>
                      Digital Product, <span className="font-bold text-blue-50">Computer Vision</span>
                    </p>
                    <ul className="flex flex-wrap gap-2 text-sm">
                      <li className="bg-blue-400 px-2 py-1 rounded-md">Python</li>
                      <li className="bg-blue-400 px-2 py-1 rounded-md">JavaScript</li>
                      <li className="bg-blue-400 px-2 py-1 rounded-md">Bootstrap</li>
                      <li className="bg-blue-400 px-2 py-1 rounded-md">PyCharm</li>
                    </ul>
                  </div>
                  <span className="absolute bg-sky-950 bg-opacity-75 duration-300 flex inset-0 items-center justify-center opacity-0 text-white underline underline-offset-2s hover:rounded-md group-hover:opacity-100">View Project</span>
                </div>
              </div>
              {popups["presensiug"] && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                  <div className="bg-white flex flex-col gap-5 p-6 rounded-lg max-w-lg mx-3 w-auto">
                    <button className="bg-blue-500 duration-300 px-5 py-1 rounded-md w-full hover:bg-blue-700 " onClick={() => handlePopup("presensiug")}>
                      Close
                    </button>
                    <div className="border flex flex-col gap-1 items-center p-5 rounded-md shadow-lg">
                      <img src="./project-portfolio/presensiug.png" alt="presensiug" className="border p-2 rounded-md w-auto lg:w-56" />
                      <p className="text-black text-lg">Presensi UG</p>
                      <p className="text-gray-700 text-justify text-md">
                        Aplikasi Presensi Mahasiswa Berbasis Face Recognition adalah sebuah platform berbasis web yang memanfaatkan teknologi Computer Vision untuk melakukan absensi otomatis dengan pengenalan wajah. Aplikasi ini dirancang
                        untuk mempermudah proses presensi di lingkungan akademik dengan meningkatkan efisiensi, akurasi, dan keamanan.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
