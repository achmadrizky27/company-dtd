const NaturalLanguageProcessing = () => {
  return (
    <div className="flex flex-col gap-5 items-start justify-center w-full md:flex-row">
      <div className="w-full md:w-1/2">
        <img src="../services/nlp.png" alt="nlp" />
      </div>
      <div className="flex flex-col gap-5 w-full md:w-1/2">
        <div className="flex flex-col gap-2 items-center justify-center md:items-start">
          <p className="font-bold text-3xl md:text-4xl">Natural Language Processing</p>
          <p className="italic text-justify md:text-left">
            Create applications that understand and respond to human language naturally. With NLP, we provide text analysis capabilities, intelligent chatbots, and advanced language processing for various needs.
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
export default NaturalLanguageProcessing;
