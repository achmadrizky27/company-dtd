const ArtificialIntelligence = () => {
  return (
    <div className="flex flex-col gap-5 items-start justify-center w-full md:flex-row">
      <div className="w-full md:w-1/2">
        <img src="../services/ai.png" alt="ai" />
      </div>
      <div className="flex flex-col gap-5 w-full md:w-1/2">
        <div className="flex flex-col gap-2 items-center justify-center md:items-start">
          <p className="font-bold text-3xl md:text-4xl">Artificial Intelligence</p>
          <p className="italic text-justify md:text-left">
            Make your business smarter with AI and Machine Learning solutions tailored to your needs. We are here to create intelligent systems that can enhance efficiency, optimize processes, and boost your business performance for the
            future. Innovation without limits, develop your business with AI technology!
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
export default ArtificialIntelligence;
