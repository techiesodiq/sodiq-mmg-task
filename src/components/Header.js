import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import React from "react";
import "../css/Header.css";
import data from "../data/headers.json";

const Header = () => {
  return (
    <header className="header-container">
      <div className="mobile-header-menu">
        <AppBar
          sx={{ backgroundColor: "#f3f5fc", paddingLeft: "0px" }}
          position="static"
          elevation={0}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              sx={{ mr: 2, color: "#79B0B0" }}
            >
              <MenuIcon />
            </IconButton>
            <img src={data.logo} alt={data.logoTitle} className="mobile-logo" />
          </Toolbar>
        </AppBar>
      </div>
      <h2>{data.title}</h2>
      <time>
        <span className="day">{data.day}, </span>
        {data.date}
      </time>
    </header>
  );
};

export default Header;
