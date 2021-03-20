import React from "react";
import AboutProject from "./aboutProject/aboutProject";
import "./App.scss";
import SectionsBlock from "./sectionsBlock/sectionsBlock";
const App = () => {
  return (
    <div className="containerApp">
      <AboutProject />
      <SectionsBlock />
    </div>
  );
};
export default App;
