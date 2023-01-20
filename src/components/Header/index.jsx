import React from "react";
import SearchBar from "./SearchBar";
import { BiMoon } from "react-icons/bi";
import { BiBell } from "react-icons/bi";
import IconButton from "../Common/IconButton";
import Avatar from "../../assets/images/avatar1.png";

function index() {
  return (
    <div className="header">
      <div className="header-left-children">
        <h2>Gameco - Dashboard</h2>
      </div>
      <div className="header-right-children">
        <SearchBar />
        <IconButton icon={<BiMoon />} />
        <IconButton icon={<BiBell />} />
        <div className="avatar" style={{ border: "2px solid #603acd" }}>
          <img src={Avatar} alt="Avatar" />
        </div>
      </div>
    </div>
  );
}

export default index;
