import React from "react";
import Lolwp from "../../../assets/images/lol-wp.jpg";
function Card({ image }) {
  return (
    <div className="live-channel-card">
      <div className="thumbnail">
        <picture>
          <img src={Lolwp} alt="live-channel" />
        </picture>
      </div>
      <div className="content-meta-box">
        <div className="content-description">
          <div className="avatar">
            <img src={image} alt="avatar" />
          </div>
          <div className="text-description">
            <h5>LCK Summer Split 2022</h5>
            <span> Epic Games </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
