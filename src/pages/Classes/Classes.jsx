import { useQuery } from "@tanstack/react-query";
import React from "react";
import SingleClass from "./SingleClass";
import { useSpring, animated } from "@react-spring/web";
const Classes = () => {


          const {data: allClass=[], refetch} = useQuery(['allClass'], async() =>{
            const res = await fetch('http://localhost:5000/addClasses/approved')
            return res.json();
          })


          const springs = useSpring({
            from: { x: 100 },
            to: { x: 0 },
          });

  return (
    <div className="bg-[#f0f5f7]">
       <animated.div
        style={{
          ...springs,
        }}
      >
        
      <h2 className="text-5xl text-center font-semibold pt-8 uppercase underline text-[#168aad] italic">
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
