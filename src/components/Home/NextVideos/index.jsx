import React from "react";
import Card from "./Card";
import Person2 from "../../../assets/images/avatar2.png";
import Person3 from "../../../assets/images/avatar3.png";
import Person4 from "../../../assets/images/avatar4.png";
import Person5 from "../../../assets/images/avatar5.png";
import Person6 from "../../../assets/images/avatar6.png";
import Lolwp3 from "../../../assets/images/lol-wp3.jpg";
import Lolwp2 from "../../../assets/images/lol-wp2.jpg";
import Gtawp from "../../../assets/images/gta-wp.png";

const avatars = [Person2, Person3, Person4, Person5, Person6];
const thumbnails = [Lolwp3, Lolwp2, Gtawp];

function NextVideos() {
  return (
    <div className="next-videos">
      <div className="next-videos-header">
        <h2 className="section-title">Next Videos</h2>
        <button className="see-all-btn">See all</button>
      </div>

      <div className="next-video-list">
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <Card image={thumbnails[index]} avatar={avatars[index]} />
          ))}
      </div>
    </div>
  );
}

export default NextVideos;
