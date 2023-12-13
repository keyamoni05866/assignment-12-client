import { useQuery } from "@tanstack/react-query";
import React from "react";
import SingleClass from "./SingleClass";
import { useSpring, animated } from "@react-spring/web";
const Classes = () => {


          const {data: allClass=[], refetch} = useQuery(['allClass'], async() =>{
            const res = await fetch('https://assignment-12-server-eight-brown.vercel.app/addClasses/approved')
            return res.json();
          })


          const springs = useSpring({
            from: { x: 100 },
            to: { x: 0 },
          });

  return (
    <div className=""  data-aos="fade-up"
    data-aos-easing="linear"
    data-aos-duration="3000">
       <animated.div
        style={{
          ...springs,
        }}
      >
        
      <h2 className="animate-text mt-3 text-center bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent lg:text-5xl text-3xl font-black italic">
       All Classes
      </h2>

    <div className="grid grid-cols-3 gap-2 mx-auto max-w-7xl py-8 ">
    {
        allClass.map(singleClass =><SingleClass
             key={singleClass._id} 
            singleClass={singleClass}

        ></SingleClass>)
      }
    </div>
      </animated.div>

    </div>
  );
};

export default Classes;
