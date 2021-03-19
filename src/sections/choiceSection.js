import React from "react";
import "./sections.scss";
export default function ChoiceSection() {
  return (
    <div>
      <div className="titleChoice">Итак, перейдём к разделам!</div>
      <div className="choiceSection">
        <div className="sectionBlock">Криптовалюта – простыми словами</div>
        <div className="sectionBlock">Заголовок подзаголовок</div>
        <div className="sectionBlock">Что такое блокчейн?</div>
        <div className="sectionBlock">От чего зависит курс криптовалюты?</div>
        <div className="sectionBlock">На что можно потратить криптовалюту?</div>
        <div className="sectionBlock">ЗаголовокЗаголовок</div>
        <div className="sectionBlock">Откуда берётся криптовалюта?</div>
        <div className="sectionBlock">Ответы на популярные вопросы</div>
      </div>
    </div>
  );
}
