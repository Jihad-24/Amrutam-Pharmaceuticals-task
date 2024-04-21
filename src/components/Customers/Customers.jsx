/* eslint-disable react/no-unescaped-entities */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import image from "../../assets/Image Placeholder.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";

import { FaStar } from "react-icons/fa";
import "./styles.css";
const Customers = () => {
  const posts = [
    {
      id: 1,
      title: "Consulted for Skin",
      name: "Sophie Moore",
      location: "Chennai",
      date: "17/02/24",
      rating: 5,
      reviewTitle: "One of a kind service",
      reviewContent:
        "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.",
    },
    {
      id: 2,
      title: "Consulted for Skin",
      name: "Sophie Moore",
      location: "Chennai",
      date: "17/02/24",
      rating: 5,
      reviewTitle: "One of a kind service",
      reviewContent:
        "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.",
    },
    {
      id: 3,
      title: "Consulted for Skin",
      name: "Sophie Moore",
      location: "Chennai",
      date: "17/02/24",
      rating: 5,
      reviewTitle: "One of a kind service",
      reviewContent:
        "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.",
    },
    {
      id: 4,
      title: "Consulted for Skin",
      name: "Sophie Moore",
      location: "Chennai",
      date: "17/02/24",
      rating: 5,
      reviewTitle: "One of a kind service",
      reviewContent:
        "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.",
    },
    {
      id: 5,
      title: "Consulted for Skin",
      name: "Sophie Moore",
      location: "Chennai",
      date: "17/02/24",
      rating: 5,
      reviewTitle: "One of a kind service",
      reviewContent:
        "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.",
    },
  ];

  return (
    <div className="py-16 bg-[#FFF7E2] mx-1 md:px-20">
      <div className="flex flex-col items-center space-y-5 px-1">
        <h1 className="text-[#3A643B] text-center font-bold text-xl md:text-3xl md:border-b-4  md:border-[#C3D0C4]">
        STORIES FROM OUR VALUED CUSTOMERS!
        </h1>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={20}
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        breakpoints={{
          // when window width is >= 640px
          1024: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 3,
          },
          // when window width is <= 640px
          0: {
            slidesPerView: 1,
          },
        }}
        autoplay={{ delay: 2000 }}
      >
        {posts?.map((item) => (
          <SwiperSlide key={item?._id}>
            <div
              key={item?._id}
              className="bg-white rounded-y-lg h-[300px] mb-10 md:mb-16"
            >
              <div className="bg-[#ECE7FF] rounded-t-lg font-bold py-3 px-2">
                {item.title}
              </div>
              <div className="px-3">
                <div className="flex justify-between items-center py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex flex-wrap justify-between">
                      <img
                        className="size-[80px] bg-slate-500 object-cover rounded-lg hover:blur-[2px] duration-500"
                        src={image}
                        alt="avatar navigate ui"
                      />{" "}
                    </div>
                    <div className="text-left">
                      <h1>{item.name}</h1>
                      <p>{item.location}</p>
                    </div>
                  </div>
                  <p>{item.date}</p>
                </div>
                <div className="flex gap-2">
                  <FaStar className="text-[#EEDE4D]" />
                  <FaStar className="text-[#EEDE4D]" />
                  <FaStar className="text-[#EEDE4D]" />
                  <FaStar className="text-[#EEDE4D]" />
                  <FaStar className="text-[#EEDE4D]" />
                </div>
                <div className="">
                  <h1 className="text-xl font-bold">{item.reviewTitle}</h1>
                  <p>{item.reviewContent}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Customers;
