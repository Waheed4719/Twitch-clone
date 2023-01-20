import React from "react";
import Icon from "../Common/Icon";
import Avatar2 from "../../assets/images/avatar2.png";
import Avatar3 from "../../assets/images/avatar3.png";
import Avatar4 from "../../assets/images/avatar4.png";
import Avatar5 from "../../assets/images/avatar5.png";
import Avatar6 from "../../assets/images/avatar6.png";

const avatars = [Avatar2, Avatar3, Avatar4, Avatar5, Avatar6];

function MenuItem({ item, title, index }) {
  return (
    <h3 className={`menu-item`}>
      {console.log(title)}
      {title === "Following" ? (
        <div className="avatar sm">
          <img src={avatars[index]} alt="avatar" />
        </div>
      ) : (
        <Icon
          iconGroup={item.iconGroup}
          icon={item.icon}
          style={{ fontSize: 16 }}
        />
      )}

      {item.title}
    </h3>
  );
}

export default MenuItem;
