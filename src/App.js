import React from "react";
import "./App.css";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Hero from "./components/hero";

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
