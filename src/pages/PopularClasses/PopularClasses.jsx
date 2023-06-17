import { useSpring, animated } from "@react-spring/web";
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

      const springs = useSpring({
        from: {  x: 100 },
        to: {  x: 0 },
      });
    return (
        <div>
        <animated.div
          style={{
            ...springs,
          }}
        >
          <h2 className="text-5xl text-center font-semibold pt-8 uppercase underline text-[#168aad] italic">
            Popular Classes
          </h2>
          <div className="lg:grid grid-cols-3  lg:ms-24  mt-8  ">
            {popularClasses.map((popular) => <SinglePopular 
             key={popular._id}
             popular={popular}
            ></SinglePopular>)}
          </div>
  
          <div className=' flex justify-center mt-2 mb-8'>
        
              <Link to="classes" className=" btn border-0 border-b-4  rounded-lg btn-outline text-[#168aad]  text-2xl ">
               See All Classes
              </Link>
              </div>
        </animated.div>
     
      </div>
    );
};

export default PopularClasses;