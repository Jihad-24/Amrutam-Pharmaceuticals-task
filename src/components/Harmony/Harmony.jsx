import image from '../../assets/Rectangle 4167.png';

const Harmony = () => {
    return (
        <div className='bg-cover bg-no-repeat h-full md:min-h-[500px] w-full flex flex-col justify-center items-center bg-gradient-to-r from-[#000000] via-[#000000] to-[#0E0E0E] ' style={{
            backgroundImage: `url(${image})`,
          }}>
            <div className="text-center py-10"> 
                <h1 className='text-[#FFF7E2] text-2xl md:text-5xl'>
                    Ready to restore harmony in <br /> your mind, body and spirit?
                </h1>
                <button className=" mt-5 bg-[#3A643B] hover:bg-[#4e754f] px-5 py-2 rounded-lg  text-[#FFFFFF]">
                    Book an Appointment
                </button>
            </div>
        </div>
    );
};

export default Harmony;
