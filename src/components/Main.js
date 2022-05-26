import React from "react";
import "../css/Main.css";
import Card from "./Card";
import Header from "./Header";

const Main = () => {
  return (
    <main className="main-container">
      <Header />
      <Card />
    </main>
  );
};

export default Main;
