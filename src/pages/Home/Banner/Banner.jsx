import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";


// import "./styles.css";
import { Navigation } from "swiper";
import banner1 from "../../../assets/1.jpg";
import banner2 from "../../../assets/2.jpg";
import banner3 from "../../../assets/4.jpg";
import banner4 from "../../../assets/5.jpg";
import banner5 from "../../../assets/3.jpg";
const Banner = () => {


  return (
    <div className=" w-full mb-9 mt-1"   data-aos="fade-up"
    data-aos-easing="linear"
    data-aos-duration="2000" >
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper  ">
        <SwiperSlide >
        

<div className="relative  ">
      <img src={banner2} alt="" className="w-full h-[600px] bg-gradient-to-r  " />
        <div className="absolute   top-0 left-0 right-5 h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white">
     <div className="  lg:w-1/2 mt-32 ms-5 mr-5 lg:ms-80  ">
     {/* <h2 className="lg:text-5xl text-3xl mb-5">Feel and touch the <br /> <span className="text-[#168aad] lg:text-6xl text-4xl font-semibold">Sound of heaven!!!!</span></h2> */}
     <h2 className="lg:text-5xl text-3xl ">Feel and touch the</h2> <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent lg:text-6xl text-3xl font-black">Sound of heaven!!!!</h1>
        <p className="lg:text-xl  text-justify mb-5">Unleash your creativity and dive into the world of melodies, harmonies, and rhythms. Our expert instructors, state-of-the-art technology, and immersive learning environment make it easier than ever to learn and excel at playing the instrument of your choice.</p>
        <button className="py-3 rounded-lg px-10  text-white text-xl hover:bg-[#0f4b5e] bg-[#168aad]">Explore Us</button>
     </div>

        </div>
      </div>


        
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative  ">
      <img src={banner1} alt="" className="w-full h-[600px] bg-gradient-to-r  " />
        <div className="absolute   top-0 left-0 right-5 h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white">
     <div className="  lg:w-1/2 mt-32 ms-5 mr-5 lg:ms-80  ">
     <h2 className="lg:text-5xl text-3xl mb-5">Feel and touch the <br /> <span className="text-[#168aad] lg:text-6xl text-4xl font-semibold">Sound of heaven!!!!</span></h2>
        <p className="lg:text-xl  text-justify mb-5">Unleash your creativity and dive into the world of melodies, harmonies, and rhythms. Our expert instructors, state-of-the-art technology, and immersive learning environment make it easier than ever to learn and excel at playing the instrument of your choice.</p>
        <button className="py-3 rounded-lg px-10  text-white text-xl hover:bg-[#0f4b5e] bg-[#168aad]">Explore Us</button>
     </div>

        </div>
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative  ">
      <img src={banner3} alt="" className="w-full h-[600px] bg-gradient-to-r  " />
        <div className="absolute   top-0 left-0 right-5 h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white">
     <div className="  lg:w-1/2 mt-32 ms-5 mr-5 lg:ms-80  ">
     <h2 className="lg:text-5xl text-3xl mb-5">Feel and touch the <br /> <span className="text-[#168aad] lg:text-6xl text-4xl font-semibold">Sound of heaven!!!!</span></h2>
        <p className="lg:text-xl  text-justify mb-5">Unleash your creativity and dive into the world of melodies, harmonies, and rhythms. Our expert instructors, state-of-the-art technology, and immersive learning environment make it easier than ever to learn and excel at playing the instrument of your choice.</p>
        <button className="py-3 rounded-lg px-10  text-white text-xl hover:bg-[#0f4b5e] bg-[#168aad]">Explore Us</button>
     </div>

        </div>
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative  ">
      <img src={banner4} alt="" className="w-full h-[600px] bg-gradient-to-r  " />
        <div className="absolute   top-0 left-0 right-5 h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white">
     <div className="  lg:w-1/2 mt-32 ms-5 mr-5 lg:ms-80  ">
     <h2 className="lg:text-5xl text-3xl mb-5">Feel and touch the <br /> <span className="text-[#168aad] lg:text-6xl text-4xl font-semibold">Sound of heaven!!!!</span></h2>
        <p className="lg:text-xl  text-justify mb-5">Unleash your creativity and dive into the world of melodies, harmonies, and rhythms. Our expert instructors, state-of-the-art technology, and immersive learning environment make it easier than ever to learn and excel at playing the instrument of your choice.</p>
        <button className="py-3 rounded-lg px-10  text-white text-xl hover:bg-[#0f4b5e] bg-[#168aad]">Explore Us</button>
     </div>

        </div>
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative  ">
      <img src={banner5} alt="" className="w-full h-[600px] bg-gradient-to-r  " />
        <div className="absolute   top-0 left-0 right-5 h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white">
      
       <div className="  lg:w-1/2 mt-32 ms-5 mr-5 lg:ms-80  ">
     <h2 className="lg:text-5xl text-3xl mb-5">Feel and touch the <br /> <span className="text-[#168aad] lg:text-6xl text-4xl font-semibold">Sound of heaven!!!!</span></h2>
        <p className="lg:text-xl  text-justify mb-5">Unleash your creativity and dive into the world of melodies, harmonies, and rhythms. Our expert instructors, state-of-the-art technology, and immersive learning environment make it easier than ever to learn and excel at playing the instrument of your choice.</p>
        <button className="py-3 rounded-lg px-10  text-white text-xl hover:bg-[#0f4b5e] bg-[#168aad]">Explore Us</button>
     </div>


    

        </div>
      </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
