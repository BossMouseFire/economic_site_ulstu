import React from "react";
import QuestionBlock from "./questionBlock";
import {arrayData} from './questions.json'
export default function Questions() {
  return (
    <div className="containerQuestions">
      <div className="titleBlock">
        <div className="titleInteriorBlock">
          Ответы на популярные вопросы <hr />
        </div>
      </div>
      <div>
        Здесь мы собрали самые распространённые вопросы (и, конечно же, ответы
        на них), которые могут возникнуть у людей, начинающих исследовать
        криптомир:
      </div>
      {arrayData.map(question => 
      <QuestionBlock titleQuestion={question.title} textQuestion={question.text}/>
        )}
    </div>
  );
}
