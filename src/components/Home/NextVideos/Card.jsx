import Avatar from "../../Common/Avatar";

function Card({ image, avatar }) {
  return (
    <div className="next-video-card">
      <div className="thumbnail">
        <picture>
          <img src={image} alt="next-video" />
        </picture>
      </div>
      <div className="content-meta-box">
        <div className="content-description">
          <h5>Fortnite - Winter Cup</h5>
          <p>
            Ut non veniam fugiat non non tempor non tempor commodo culpa
            proident sunt...
          </p>
        </div>
        <div className="time-and-views">
          <span>2 days ago</span>
          <span>8.2m views</span>
        </div>
        <div className="creator">
          <Avatar size="sm" avatar={avatar} />
          <span> Epic Games </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
