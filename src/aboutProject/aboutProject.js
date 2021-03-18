import React from "react";
import MachineText from "./machineText";
import "./aboutProject.scss";
import Converter from "./converter/converter";
const AboutProject = () => {
  return (
    <div className="containerBackground">
      <Converter />
      <MachineText
        arrayText={["Всем пацанам", "Салам", "Как у вас дела?"]}
        className="greeting"
      />
    </div>
  );
};

export default AboutProject;
