import React from "react";
import Banner from "../Banner/Banner";
import { animated, useSpring } from "@react-spring/web";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
const Home = () => {
  const springs = useSpring({
    from: { y: 100 },
    to: { y: 0 },
  });
  return (
    <div className=" lg:px-24 mx-auto">
      <animated.div
        style={{
          ...springs,
        }}
      >
        <Banner></Banner>
      </animated.div>
    
      <PopularInstructor></PopularInstructor>
    </div>
  );
};

export default Home;
