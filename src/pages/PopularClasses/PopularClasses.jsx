
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SinglePopular from "./SinglePopular";
import { Link } from "react-router-dom";

const PopularClasses = () => {
    const { data: popularClasses = [] } = useQuery(
        ["popularClasses"],
        async () => {
          const res = await fetch("https://assignment-12-server-eight-brown.vercel.app/payments/6Classes");
          return res.json();
        }
      );

      
    return (
        <div  data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="2000">
       
          <h2 className="animate-text text-center bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent lg:text-5xl text-3xl font-black italic">
            Popular Classes
          </h2>
          <p className="text-center text-lg mt-3  text-teal-700 italic font-semibold">---Most Enrolled Classes. Also People like this so much---</p>
          <div className="grid lg:grid-cols-3  lg:ms-24  mt-8  ">
            {popularClasses.map((popular) => <SinglePopular 
             key={popular._id}
             popular={popular}
            ></SinglePopular>)}
          </div>
  
          <div className=' flex justify-center mt-2 mb-8'>
        
              <Link to="classes" className=" btn border-0 border-b-4  rounded-lg btn-outline text-[#168aad]  text-lg ">
               See All Classes
              </Link>
              </div>
              

     
      </div>
    );
};

export default PopularClasses;