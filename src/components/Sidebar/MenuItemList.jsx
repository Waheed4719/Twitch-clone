import React from "react";
import MenuItem from "./MenuItem";

function MenuItemList({ items, menuTitle }) {
  return items.map((item, index) => (
    <MenuItem title={menuTitle} key={item.title} index={index} item={item} />
  ));
}

export default MenuItemList;
