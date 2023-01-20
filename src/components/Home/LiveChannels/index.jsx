import React from "react";
import Card from "./Card";
import Avatar2 from "../../../assets/images/avatar2.png";
import Avatar3 from "../../../assets/images/avatar3.png";
import Avatar4 from "../../../assets/images/avatar4.png";
import Avatar5 from "../../../assets/images/avatar5.png";
import Avatar6 from "../../../assets/images/avatar6.png";

const avatars = [Avatar2, Avatar3, Avatar4, Avatar5, Avatar6];

function LiveChannels() {
  return (
    <div className="live-channels">
      <h2 className="section-title">Live Channels</h2>
      <div className="live-channel-list">
        {Array(4)
          .fill(0)
          .map((item, index) => (
            <Card image={avatars[index]} />
          ))}
      </div>
    </div>
  );
}

export default LiveChannels;
