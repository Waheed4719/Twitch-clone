import React from "react";
import Button from "../Common/Button";
import Lolwp from "../../assets/images/lol-wp.jpg";
import Person2 from "../../assets/images/avatar2.png";
import Avatar from "../Common/Avatar";

function Recommended() {
  return (
    <div className="home-recommended">
      <h2 className="section-title">Recommended</h2>
      <div className="recommended-card">
        <div className="thumbnail">
          <picture>
            <img className="cover-image" src={Lolwp} alt="player-wallpaper" />
          </picture>
        </div>

        <div className="text-section">
          <div className="content-description">
            <h2>League of Legends - Pro League</h2>
            <p>
              Exercitation elit occaecat aute laborum pariatur eu id. Anim
              incididunt fugiat officia magna ullamco adipisicing mollit. Duis
              dolore id.
            </p>
          </div>
          <div className="content-meta">
            <Button text="Watch now" />
            <div className="creator">
              <Avatar size="sm" avatar={Person2} />
              <span className="name">RiotGames</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recommended;
