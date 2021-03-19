import React from "react";
import MachineText from "./machineText";
import "./aboutProject.scss";
import Converter from "./converter/converter";
const AboutProject = () => {
  return (
    <div className="containerBackground">
      <Converter />
      <div className="contanerStartText">
        <MachineText
          arrayText={["Добро пожаловать на cryptoeconomics.tech!", "Погрузитесь в мир криптовалют с нами!"]}
          className="greeting"
        />
        <p>
          На этом сайте мы постараемся простым языком рассказать о криптовалюте,
          ответить на самые популярные вопросы о ней и дадим Вам возможность
          узнать, в каких пропорциях относятся цифровые (и не только) деньги по
          отношению друг к другу!
        </p>
        <p>
          Вы сможете получить больше информации о криптовалюте, пролистав ниже,
          а побывать в роли биржевого брокера Вам помоможет наш конвертер валют.
        </p>
      </div>
    </div>
  );
};

export default AboutProject;
