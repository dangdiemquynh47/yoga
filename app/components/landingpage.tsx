import MeetOurExperts from "./landingpage/meetourexperts";
import MapStudio from "./landingpage/map";
import Video from "./landingpage/video";
import Blog from "./landingpage/blog";
import Schedules from "./landingpage/schedules";
import AboutMe from "./landingpage/aboutme";
import Classes from "./landingpage/classes";
import Banner from "./landingpage/banner";
import { Metadata } from "next";

const LandingPage = () => {
  return (
    <div className="w-full">
      <div className="pt-10 bg-be/20">
        <Banner />
      </div>
      <div className="mb-10">
        <Classes />
      </div>
      <div className="mt-20">
        <AboutMe />
      </div>
      <div className="mt-80">
        <Schedules />
      </div>
      <div className="">
        <Video />
      </div>
      {/* <div className="pt-10">
        <Experts />
      </div> */}
      <div className="mt-20 mb-80">
        <Blog />
      </div>
      {/* <div className="-translate-y-[10%] pb-40">
        <Feedback />
      </div> */}
      <div className="">
        <MeetOurExperts />
      </div>
      <div className="pt-60 ">
        <MapStudio />
      </div>
    </div>
  );
};

export default LandingPage;
