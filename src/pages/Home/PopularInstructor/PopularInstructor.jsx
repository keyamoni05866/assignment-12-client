import { useQuery } from "@tanstack/react-query";
import React from "react";
import SingleInstructor from "./SingleInstructor";
import { useSpring, animated } from "@react-spring/web";
import { Link } from "react-router-dom";

const PopularInstructor = () => {
  const { data: popularInstructors = [], refetch } = useQuery(
    ["popularInstructs"],
    async () => {
      const res = await fetch("http://localhost:5000/users/6instructor");
      return res.json();
    }
  );

  const springs = useSpring({
    from: { x: 100 },
    to: { x: 0 },
  });
  return (
    <div>
      <animated.div
        style={{
          ...springs,
        }}
      >
        <h2 className="text-5xl text-center font-semibold pt-8 uppercase underline text-[#168aad] italic">
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
      
            <Link to="instructor" className=" btn border-0 border-b-4  rounded-lg btn-outline text-[#168aad]  text-2xl ">
             See All Instructors
            </Link>
            </div>
      </animated.div>
   
    </div>
  );
};

export default PopularInstructor;
