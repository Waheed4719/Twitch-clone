import React from "react";

function MenuItemHeader({ title, active }) {
  return (
    <h2 className={`menu-item-header ${active ? "active" : ""}`}>{title}</h2>
  );
}

export default MenuItemHeader;
