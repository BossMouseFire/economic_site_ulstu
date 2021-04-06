import React, { useRef } from "react";
import "./questions.scss";
export default function QuestionBlock({titleQuestion, textQuestion}) {
  const questionBlock = useRef();
  const questionArrow = useRef();
  const changeHeightBlock = () => {
    let height = questionBlock.current;
    let img = questionArrow.current;
    height.classList.toggle("textHidden");
    img.classList.toggle("stateImg");
  };
  return (
    <div className="containerQuestion">
      <div className="titleQuestion" onClick={changeHeightBlock}>
        <img src="/images/questionArrow.svg" class="stateImg" ref={questionArrow}/>
        <p>
          {titleQuestion}
        </p>
      </div>
      <div class="textFull textHidden" ref={questionBlock}>
        <p>
          {textQuestion}
        </p>
      </div>
      <hr/>
    </div>
  );
}
