import { Link } from "react-scroll";

const ArtificialIntelligence = () => {
  return (
    <div className="flex flex-col gap-10 items-start justify-center w-full md:flex-row">
      <div className="w-full md:w-1/2">
        <img src="../services/ai.png" alt="ai" />
      </div>
      <div className="flex flex-col gap-2 w-full md:w-1/2">
        <div>
          <p className="font-bold text-xl md:text-2xl">Artificial Intelligence</p>
          <p className="italic text-justify md:text-left">
            "Jadikan bisnismu lebih pintar dengan solusi AI dan Machine Learning yang dirancang khusus untuk kebutuhan Anda. Kami hadir untuk menciptakan sistem cerdas yang dapat meningkatkan efisiensi, mengoptimalkan proses, dan
            mendongkrak performa bisnis Anda di masa depan." <span className="font-bold">Inovasi tanpa batas, kembangkan bisnis Anda bersama teknologi AI!</span>
          </p>
        </div>
        <Link to={"#about"} className="bg-blue-500 duration-300 px-4 py-1 rounded-md hover:bg-blue-700 hover:translate-x-1">
          Siapa Kami?
        </Link>
      </div>
    </div>
  );
};
export default ArtificialIntelligence;
