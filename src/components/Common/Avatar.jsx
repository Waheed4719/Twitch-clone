import React from "react";

function Avatar({ size = "sm", avatar }) {
  return (
    <div className={`avatar ${size}`}>
      <img src={avatar} alt="avatar" />
    </div>
  );
}

export default Avatar;
