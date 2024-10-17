const MachineLearning = () => {
  return (
    <div className="flex flex-col gap-5 items-start justify-center w-full md:flex-row">
      <div className="w-full md:w-1/2">
        <img src="../services/ml.png" alt="ml" />
      </div>
      <div className="flex flex-col gap-5 w-full md:w-1/2">
        <div className="flex flex-col gap-2 items-center justify-center md:items-start">
          <p className="font-bold text-3xl md:text-4xl">Machine Learning</p>
          <p className="italic text-justify md:text-left">
            Need a unique technology solution? We offer custom development for artificial intelligence and machine learning, helping you understand data patterns, predict trends, and automate complex business processes. We are ready to turn
            your data into smart decisions!
          </p>
        </div>
        <div>
          <a href="#project" className="bg-blue-500 duration-300 px-6 py-3 rounded-md text-white hover:bg-blue-700 hover:translate-y-1">
            View Project?
          </a>
        </div>
      </div>
    </div>
  );
};
export default MachineLearning;
