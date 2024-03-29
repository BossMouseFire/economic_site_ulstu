import React from "react";
import "./explanation.scss";

export default function Explanation() {
    return (
        <div className="containerExplanation">
            <div className="titleBlock">
                <div className="titleInteriorBlock">
                    Что такое криптовалюта?
                    <hr/>
                </div>
            </div>
            <div className="contentWithImage">
                <div className="textContent">
                    Недавно цена Bitcoin, самой популярной криптовалюты, обновила свой
                    исторический максимум, преодолев планку в 60.000$! Криптовалюта –
                    тренд 21 века, и в настоящее время о ней не говорит только ленивый. Но
                    даже сейчас мало людей понимает суть этой технологии, поэтому
                    предлагаем вам погрузиться в этот цифровой мир вместе с нами и
                    разобраться в том, что такое криптовалюта.
                </div>
                <div className="imageContent">
                    <img src="/images/explation.jpeg"/>
                </div>
            </div>
            <div>

                Говоря простым языком, <span style={{fontStyle: "italic"}}>криптовалюта</span> – это цифровые деньги.
                Единицей такой валюты является «coin», что в переводе с английского означает «монета».
                Главное отличие криптовалюты от фиатных денег в электронном виде заключается в следующем: чтобы фиатные
                деньги появились на счету в электронном виде, они должны быть сначала физически внесены на счёт,
                например, через платёжный терминал, следовательно, для фиатной валюты электронный вид – это одна из форм
                физического воплощения. Криптовалюта, в отличие от фиатных средств, не имеет физического выражения, а
                существует лишь в интернете и никак не связана ни с какой-либо обычной валютой, ни с любой
                государственной валютной системой.
            </div>
            <div>
                Криптовалюта защищена от подделки и дублирования, её количество и
                эмиссия строго ограничены, она никому не принадлежит и никем не
                администрируется, для проведения операций с криптовалютой не нужны
                посредники и любую криптовалюту можно обменять на реальные деньги.
                Прежде чем углубляться в принципы работы криптовалюты, перейдём к
                истории её создания и развития.
            </div>
        </div>
    );
}
