import React from "react";

export default function ChoiceSection() {

  const selectBlock = (element) => {
    const container = document.querySelector(element);
    container.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  }

  return (
    <div>
      <div className="titleChoice">Итак, перейдём к разделам!</div>
      <div className="choiceSection">
        <div className="sectionBlock" onClick={() => selectBlock(".containerBackground")}>Инструмент конвертации валют</div>
        <div className="sectionBlock" onClick={() => selectBlock(".containerExplanation")}>Что такое криптовалюта?</div>
        <div className="sectionBlock" onClick={() => selectBlock(".containerHistory")}>История развития криптовалют</div>
        <div className="sectionBlock" onClick={()=> selectBlock(".containerTechnicalSide")}>Как работают криптовалюты?</div>
        <div className="sectionBlock" onClick={()=> selectBlock(".containerUseCoin")}>Как использовать криптовалюту?</div>
        <div className="sectionBlock" onClick={()=> selectBlock(".containerValutionCoin")}>Достоинства и недостатки</div>
        <div className="sectionBlock" onClick={()=> selectBlock(".containerQuestions")}>Ответы на популярные вопросы</div>
        <div className="sectionBlock" onClick={()=> selectBlock(".containerCompilation")}>Подборка полезных материалов</div>
      </div>
    </div>
  );
}
