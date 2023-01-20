import React from "react";
import Card from "./Card";
import Person2 from "../../../assets/images/avatar2.png";
import Person3 from "../../../assets/images/avatar3.png";
import Person4 from "../../../assets/images/avatar4.png";
import Person5 from "../../../assets/images/avatar5.png";
import Person6 from "../../../assets/images/avatar6.png";
import Lolwp2 from "../../../assets/images/lol-wp2.jpg";
import Lolwp3 from "../../../assets/images/lol-wp3.jpg";
import Gtawp from "../../../assets/images/gta-wp.png";
import Gtawp2 from "../../../assets/images/gta-wp2.jpg";

const avatars = [Person2, Person3, Person4, Person5, Person6];
const thumbnails = [Lolwp2, Lolwp3, Gtawp, Gtawp2];

function LiveChannels() {
  return (
    <div className="live-channels">
      <h2 className="section-title">Live Channels</h2>
      <div className="live-channel-list">
        {Array(4)
          .fill(0)
          .map((item, index) => (
            <Card image={thumbnails[index]} avatar={avatars[index]} />
          ))}
      </div>
    </div>
  );
}

export default LiveChannels;
