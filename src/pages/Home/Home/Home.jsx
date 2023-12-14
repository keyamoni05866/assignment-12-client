import React from "react";
import Banner from "../Banner/Banner";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import PopularClasses from "../../PopularClasses/PopularClasses";
import ExtraSection from "../ExtraSection/ExtraSection";
const Home = () => {

  return (
    <div className=" lg:px-4  mx-auto">
      
        <Banner></Banner>
      <PopularInstructor></PopularInstructor>
      <PopularClasses></PopularClasses>
      <ExtraSection></ExtraSection>
    </div>
  );
};

export default Home;
