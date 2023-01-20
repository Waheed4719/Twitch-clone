import React from "react";
import LiveChannels from "./LiveChannels";
import NextVideos from "./NextVideos";
import Recommended from "./Recommended";

function index() {
  return (
    <div className="home">
      <Recommended />
      <NextVideos />
      <LiveChannels />
    </div>
  );
}

export default index;
