"use client";
import Image from "next/image";
import Header from "./header";
import YogaPoses from "./components/landingpage/yoga_poses";
import HelpConfident from "./components/landingpage/helpconfident";
import YogaLifeStyle from "./components/landingpage/yoga_lifestyle";
import Experts from "./components/landingpage/experts";
import Inspirational from "./components/landingpage/inspirational";
import WatchList from "./components/landingpage/watch_list";
import Footer from "./footer";
import MeetOurExperts from "./components/landingpage/meetourexperts";
import MapStudio from "./components/landingpage/map";
import Paratice from "./components/landingpage/paratice";
import Video from "./components/landingpage/video";

import { motion } from "framer-motion";

const LandingPage = () => {
 
  return (
    <div className="w-full">
      <div className="">
        <WatchList />
      </div>
      <div className="">
        <YogaPoses />
      </div>
      <div className="mt-20">
        <HelpConfident />
      </div>
      <div className="py-40">{/* <Paratice /> */}</div>
      <div className="">
        <Video />
      </div>
      <div className="mt-40">
        <Experts />
      </div>
      <div className="mt-20">
        <YogaLifeStyle />
      </div>
      <div className="py-40">
        <Inspirational />
      </div>
      <div className="">
        <MeetOurExperts />
      </div>
      <div className="py-40">
        <MapStudio />
      </div>
    </div>
  );
};

export default LandingPage;
