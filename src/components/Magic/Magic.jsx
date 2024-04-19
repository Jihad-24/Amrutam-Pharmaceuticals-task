/* eslint-disable react/no-unescaped-entities */
import heartbeat from "../../assets/heartbeat (1) 1.png";
import bgimage from "../../assets/image 54.png";
import image57 from "../../assets/image 57.png";

const Magic = () => {
  return (
    <div className="py-12 bg-white">
      <div className="flex flex-col items-center space-y-5">
        <h1 className="text-[#3A643B] text-center font-bold text-3xl border-b-4 w-[536px] border-[#C3D0C4]">
          Discover Ayurveda’s Magic With Us
        </h1>
        <p className="text-[#666666] text-center w-[536px]">
          Ayurvedic treatment aims to balance your body and mind, bringing
          harmony and vitality. It's like a journey to better health using
          ancient wisdom, a totally effective approach for a better life.{" "}
        </p>
      </div>
      <div className="flex items-center justify-evenly">
        <div className="flex items-center gap-4">
          <div className="text-right w-56">
            <h2 className="text-lg font-bold">Personalized Wellness</h2>
            <p className="text-sm text-[#515151]">
              Get treatments made just for you based on your individual doshas
              (body type)
            </p>
          </div>
          <div className="bg-[#EDF5FA] rounded-full  py-5 px-4 ">
            {" "}
            <img className="w-12" src={heartbeat} alt="" />
          </div>
        </div>
        <div
          className=""
          style={{
            backgroundImage: `url(${bgimage})`,
          }}
        >
          <img className="pt-10" src={image57} alt="" />
        </div>
        <div className="flex items-center">
          <div className="text-right">
            <h2 className="text-[16px] font-bold">Personalized Wellness</h2>
          </div>
          <img src={heartbeat} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Magic;
