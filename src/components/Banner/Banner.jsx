import banner1 from "../../assets/Rectangle 3464760.png";
import doctor from "../../assets/doctor (1) 1.png";
import prescription from "../../assets/prescription (1) 1.svg";
import shield from "../../assets/shield 1.png";
import speechbubble from "../../assets/speech-bubble (2) 1.svg";
const Banner = () => {
  return (
    <div className="pt-12 bg-[#FFF7E2] relative">
      <div className="min-h-[500px] max-h-[500px] ">
        <img
          className="float-end min-h-[500px] max-h-[500px] w-[700px]"
          src={banner1}
          alt=""
        />
        <div className="absolute flex items-center min-h-[500px] max-h-[500px] w-full left-0 top-12 bg-gradient-to-r from-[#121212] via-[#121212] to-[rgba(21, 21, 21, 0)] text-white max-w-7xl">
          <div
            className="text-white space-y-5 pl-12  hidden md:block"
            data-aos="fade-left"
          >
            <p className="text-[#FFF7E2] text-lg">
              Namaste, Welcome to Amrutam{" "}
            </p>
            <h2 className="lg:text-4xl md:text-4xl font-bold pr-20">
              Step into Holistic Healing with{" "}
              <span className="text-[#FFF7E2] border-b-2">Ayurveda</span>{" "}
              <p className="mt-2">
                {" "}
                Book Consultation with certified Experts.{" "}
              </p>
            </h2>
            <p className="text-[#C9C9C9]">
              Dive into the world of ayurveda and Experience Personalized Health
              Solutions and <br />
              Holistic Guidance from Trusted Ayurvedic Doctors Anytime,
              anywhere.
            </p>
            <div>
              <button className="btn bg-[#3A643B] hover:bg-[#4e754f] px-5 py-2 rounded-lg  text-[#FFFFFF]">
                Book an Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-10 py-6">
        <div className="flex items-center justify-center gap-2">
          <div className="bg-white rounded-full  p-3 border border-[#3A643B]">
            {" "}
            <img className="w-10" src={speechbubble} alt="" />
          </div>

          <h3 className="text-[#3A643B]">
            convenient online & <br />
            In-clinic consultations
          </h3>
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="bg-white rounded-full border border-[#3A643B] p-3">
            {" "}
            <img className="w-10" src={shield} alt="" />
          </div>

          <h3 className="text-[#3A643B]">
            Safe and effective <br /> treatment
          </h3>
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="bg-white rounded-full border border-[#3A643B] p-3">
            {" "}
            <img className="w-10" src={doctor} alt="" />
          </div>

          <h3 className="text-[#3A643B]">
            Experienced Ayurvedic <br /> Practitioners
          </h3>
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="bg-white rounded-full border border-[#3A643B] p-3">
            {" "}
            <img className="w-10" src={prescription} alt="" />
          </div>

          <h3 className="text-[#3A643B]">
            personalized Treatment <br />
            Plans & Guidance
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Banner;
