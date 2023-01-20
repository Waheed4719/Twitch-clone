import React from "react";
import Menu from "./Menu";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <a href=":null">Gameco</a>
      </div>
      <Menu />
    </aside>
  );
}

export default Sidebar;
