import React from "react";
import { Home } from "./Home";
import Offer from "./Offer";
import { Slidersecotion } from "./Holidays ";
import {Featured_Hotels} from './Featured_Hotels';
import { Clientpage } from "./Clientpage";
import Testimonial from "./Testimonial";
import { Nearby } from "./Nearby";
import Downloadapp from "./Downloadapp";
import ServicesSection from "./Services";
import Reviews from './Rateing';
import FAQ from './Faq';
import WhyChoosus from "./WhyChoosus";

const Main = () => {
  return (
    <>
      <Home />
      <Offer/>
      <Slidersecotion />
      <Featured_Hotels />
      <Clientpage />
      <ServicesSection/>
      <Testimonial />
      {/* <Nearby /> */}
      <Downloadapp />
      <WhyChoosus/>
      <FAQ/>
      <Reviews/>    
    </>
  );
};

export default Main;
