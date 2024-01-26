"use client";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";
const Video = () => {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  return (
    <div className="w-full md:px-40 md:py-20 p-6">
       {/* <iframe width="100%" height="600px" src="https://www.youtube.com/embed/CY6QP4ofwx4?si=5ixBo-iJxjR2Ym7Z&amp;start=945" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}

      {hasWindow && (
        <ReactPlayer
          width="100%"
          height="600px"
          light={
            "/images/malayoga/422002539_395544392885049_3034388222601942179_n.jpg"
          }
          url={
            "https://www.youtube.com/embed/CY6QP4ofwx4?si=5ixBo-iJxjR2Ym7Z&amp;start=945"
          }
          playing
        />
      )}
    </div>
  );
};

export default Video;
