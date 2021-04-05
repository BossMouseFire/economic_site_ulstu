import React, { useEffect, useRef } from "react";
import AboutProject from "./aboutProject/aboutProject";
import "./App.scss";
import SectionsBlock from "./sectionsBlock/sectionsBlock";
const App = () => {
  const arrowRef = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", arrowUpScroll);
    return () => {
      window.removeEventListener("scroll", arrowUpScroll);
    };
  });
  const arrowUpScroll = () => {
    if (window.scrollY > document.documentElement.clientHeight) {
      arrowRef.current.style.display = "block";
      setTimeout(() => (arrowRef.current.style.opacity = 1), 0);
    } else {
      if (arrowRef.current.style.opacity === "1") {
        arrowRef.current.style.opacity = 0;
        setTimeout(
          () => (arrowRef.current.style.display = "none"),
          700
        );
      }
    }
  };
  const arrowlUp = () => {
    const aboutProjectRef = document.querySelector(".containerBackground");
    aboutProjectRef.scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
  };
  return (
    <div className="containerApp">
      <AboutProject />
      <div className="arrowUp" onClick={arrowlUp} ref={arrowRef}>
        <img src="images/arrowUp.svg" />
      </div>
      <SectionsBlock />
      <div className="endBar"></div>
    </div>
  );
};
export default App;
