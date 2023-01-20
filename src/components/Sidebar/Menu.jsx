import React from "react";
import MenuItems from "../../json/MenuItems.json";
import MenuGroupItem from "./MenuGroupItem";

function Menu() {
  return (
    <div className="menu">
      {Object.keys(MenuItems).map((menu) => (
        <MenuGroupItem key={menu} menu={MenuItems[menu]} />
      ))}
    </div>
  );
}

export default Menu;
