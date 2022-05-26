import { Typography } from "@mui/material";
import React from "react";
import "../css/Sidebar.css";
import sidebarData from "../data/sidebar.json";

const Sidebar = () => {
  const data = sidebarData.menu;
  return (
    <div className="sidebar-container">
      <img className="logo" src={sidebarData.logo} alt="Cloudbank Logo" />
      <div className="menu-tab">
        {data.map((menu, index) => (
          <ul>
            <li className="menu-tab-item" key={index}>
              <img
                src={menu.icon}
                alt={menu.title}
                className="menu-tab-image"
              />
              <Typography sx={{ color: "#489494" }}>{menu.title}</Typography>
            </li>
          </ul>
        ))}
      </div>
      <footer className="footer">
        <div className="footer-container">
          <img
            src={sidebarData.logout.icon}
            alt={sidebarData.logout.title}
            className="footer-image"
          />
          <Typography variant="h6" sx={{ color: "#DB261B" }}>
            {sidebarData.logout.title}
          </Typography>
        </div>
      </footer>
    </div>
  );
};

export default Sidebar;
