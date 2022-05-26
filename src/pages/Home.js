import React from "react";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import "../css/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main">
        <Main />
      </div>
    </div>
  );
};

export default Home;
