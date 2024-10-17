const GameDevelopment = () => {
  return (
    <div className="flex flex-col gap-5 items-start justify-center w-full md:flex-row">
      <div className="w-full md:w-1/2">
        <img src="../services/gd.png" alt="gd" />
      </div>
      <div className="flex flex-col gap-5 w-full md:w-1/2">
        <div className="flex flex-col gap-2 items-center justify-center md:items-start">
          <p className="font-bold text-3xl md:text-4xl">Game Development</p>
          <p className="italic text-justify md:text-left">Experience exceptional gameplay! We develop interactive and immersive games, from concept to implementation, using the latest technology to ensure the best gaming experience.</p>
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
export default GameDevelopment;
