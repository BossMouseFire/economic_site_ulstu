import React from "react";
import AboutProject from "./aboutProject/aboutProject";
import './App.scss'
import Sections from "./sections/sections";
const App = () => {
  return (
    <div className="containerApp">
      <AboutProject />
      <Sections/>
    </div>
  );
};
export default App;
