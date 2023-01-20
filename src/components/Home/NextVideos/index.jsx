import React from "react";
import Card from "./Card";
import Avatar2 from "../../../assets/images/avatar2.png";
import Avatar3 from "../../../assets/images/avatar3.png";
import Avatar4 from "../../../assets/images/avatar4.png";
import Avatar5 from "../../../assets/images/avatar5.png";
import Avatar6 from "../../../assets/images/avatar6.png";

const avatars = [Avatar2, Avatar3, Avatar4, Avatar5, Avatar6];

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
            <Card image={avatars[index]} />
          ))}
      </div>
    </div>
  );
}

export default NextVideos;
