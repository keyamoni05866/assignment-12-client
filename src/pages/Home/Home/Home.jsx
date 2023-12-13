import React from "react";
import Banner from "../Banner/Banner";
import { animated, useSpring } from "@react-spring/web";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import PopularClasses from "../../PopularClasses/PopularClasses";
import ExtraSection from "../ExtraSection/ExtraSection";
const Home = () => {
  const springs = useSpring({
    from: {  y: 100 },
    to: { y: 0 },
  });
  return (
    <div className=" lg:px-4  mx-auto">
      <animated.div
        style={{
          ...springs,
        }}
      >
        <Banner></Banner>
      </animated.div>
    
      <PopularInstructor></PopularInstructor>
      <PopularClasses></PopularClasses>
      <ExtraSection></ExtraSection>
    </div>
  );
};

export default Home;
