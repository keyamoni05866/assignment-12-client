import { useQuery } from "@tanstack/react-query";
import React from "react";
import SingleInstructor from "./SingleInstructor";
import { useSpring, animated } from "@react-spring/web";
import { Link } from "react-router-dom";

const PopularInstructor = () => {
  const { data: popularInstructors = [], refetch } = useQuery(
    ["popularInstructs"],
    async () => {
      const res = await fetch("https://assignment-12-server-eight-brown.vercel.app/users/6instructor");
      return res.json();
    }
  );


  return (
    <div data-aos="fade-up"
    data-aos-easing="linear"
    data-aos-duration="2000">
     
        <h2 className=" animate-text text-center bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent lg:text-5xl text-3xl font-black italic">
          Popular Instructors
        </h2>
        <div className="lg:grid grid-cols-3  lg:ms-24 mt-8  ">
          {popularInstructors.map((instructor) => (
            <SingleInstructor
              key={instructor._id}
              instructor={instructor}
            ></SingleInstructor>
          ))}
        </div>

        <div className=' flex justify-center mt-2 mb-8'>
      
            <Link to="instructor" className=" btn border-0 border-b-4  rounded-lg btn-outline text-[#168aad]  text-lg ">
             See All Instructors
            </Link>
            </div>
     
   
    </div>
  );
};

export default PopularInstructor;
