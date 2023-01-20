import React from "react";
import MenuItemHeader from "./MenuItemHeader";
import MenuItemList from "./MenuItemList";

function MenuGroupItem({ menu }) {
  return (
    <div className="menu-group-item">
      <MenuItemHeader title={menu.name} active={menu.name === "Home"} />
      <MenuItemList items={menu.items} menuTitle={menu.name} />
    </div>
  );
}

export default MenuGroupItem;
