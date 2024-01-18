import YogaPoses from "./landingpage/yoga_poses";
import HelpConfident from "./landingpage/helpconfident";
import Experts from "./landingpage/experts";
import Inspirational from "./landingpage/inspirational";
import WatchList from "./landingpage/watch_list";
import MeetOurExperts from "./landingpage/meetourexperts";
import MapStudio from "./landingpage/map";
import Paratice from "./landingpage/paratice";
import Video from "./landingpage/video";
import Blog from "./landingpage/blog";
const LandingPage = () => {
  return (
    <div className="w-full">
      {/* <div className="pt-10 bg-be/20">
        <WatchList />
      </div>
      <div className="mb-10">
        <YogaPoses />
      </div>
      <div className="mt-20">
        <HelpConfident />
      </div> */}
      <div className="mt-40">
        <Paratice />
      </div>
      {/* <div className="">
        <Video />
      </div> */}
      {/* <div className="pt-10">
        <Experts />
      </div> */}
      {/* <div className="mt-20">
        <Blog />
      </div> */}
      <div className="-translate-y-[10%] pb-40">
        <Inspirational />
      </div>
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
