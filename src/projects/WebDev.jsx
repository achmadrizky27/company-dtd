const WebDevelopment = () => {
  return (
    <div className="flex flex-col gap-5 items-start justify-center w-full md:flex-row">
      <div className="w-full md:w-1/2">
        <img src="../services/wd.png" alt="wd" />
      </div>
      <div className="flex flex-col gap-5 w-full md:w-1/2">
        <div className="flex flex-col gap-2 items-center justify-center md:items-start">
          <p className="font-bold text-3xl md:text-4xl">Web Development</p>
          <p className="italic text-justify md:text-left">
            Enhance your digital presence with a modern, fast, and responsive website designed to convert visitors into customers. We are here to create a platform that aligns with your brand identity and the evolving needs of your
            business. An attractive, functional website ready to compete in the digital world.
          </p>
        </div>
        <div>
          <a href="#project" className="bg-blue-500 duration-300 px-6 py-3 rounded-md text-white hover:bg-blue-700 hover:translate-y-1">
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};
export default WebDevelopment;