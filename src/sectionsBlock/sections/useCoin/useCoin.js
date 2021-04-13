import React, {useEffect, useRef} from "react";
import "./useCoin.scss";

export default function UseCoin() {
    let index = 0;
    const diagramRef = useRef(null);
    const startAnimation = () => {
        const elements = document.querySelectorAll('.diagram_item')
        const interval = 35;
        const angle_increment = 4;

        for (let elem of elements) {
            let angle = 0;
            window.timer = window.setInterval(() => {
                elem.children[0].children[0].setAttribute("stroke-dasharray", angle + ", 20000");
                elem.children[0].children[1].innerHTML = parseInt(angle / 360 * 100) + '%';
                let computedAngle = Math.round(elem.children[0].dataset.diagram * 3.6)
                if (angle >= computedAngle) {
                    window.clearInterval(window.timer);
                } else {
                    angle += angle_increment;
                }
            }, interval);
        }
    }


    const checkAnimation = () => {
        const firstElem = diagramRef.current;
        console.log(window.scrollY >= getCoords(firstElem).top)
        if (window.scrollY >= getCoords(firstElem).top * 0.961 && index !== 1) {
            index += 1
            startAnimation();
        }
    }

    const getCoords = (elem) => {
        const box = elem.getBoundingClientRect(),
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {
            top: box.top + scrollTop,
        };
    };

    useEffect(() => {
        window.addEventListener("scroll", checkAnimation);
        return () => {
            window.removeEventListener("scroll", checkAnimation);
        };
    });
    return (
        <div className="containerUseCoin">
            <div className="titleBlock">
                <div className="titleInteriorBlock">
                    Как использовать криптовалюту?
                    <hr/>
                </div>
            </div>
            <div>
                Первое, что нужно сделать, чтобы начать использовать или зарабатывать
                биткойны, — завести кошелёк: приобрести (в случае аппаратного кошелька)
                или установить специальную программу-клиент. Подробнее о видах кошельков
                и способах взаимодействия с ними вы сможете узнать на{" "}
                <a href="https://www.rbc.ru/crypto/news/601518f29a79471424899d99">
                    этом сайте
                </a>
                .
            </div>
            <div>
                Одного лишь созданного кошелька мало, ведь чтобы использовать биткойн,
                нужно предварительно иметь ненулевой криптоденежный баланс, пополнить
                который можно несколькими способами:
                <ul>
                    <li>
                        Майнинг — естественный способ получения биткойнов (рассмотрен выше).
                        Также существует{" "}
                        <a href="https://ru-bitcoinwiki-org.turbopages.org/ru.bitcoinwiki.org/s/wiki/%D0%9E%D0%B1%D0%BB%D0%B0%D1%87%D0%BD%D1%8B%D0%B9_%D0%BC%D0%B0%D0%B9%D0%BD%D0%B8%D0%BD%D0%B3">
                            облачный майнинг
                        </a>{" "}
                        — добыча криптовалюты с использованием удаленного центра обработки
                        данных. Криптовалюту можно майнить даже на бумаге, вручную, как
                        описано в <a href="https://habr.com/ru/post/258181/">этой статье</a>
                        ;
                    </li>
                    <li>
                        Купить биткойны за фиатные деньги в{" "}
                        <a href="https://matbea.org/?utm_source=r00a51073417300">
                            криптовалютных обменниках
                        </a>{" "}
                        и банкоматах, напрямую у держателей, на{" "}
                        <a href="https://www.bitfinex.com/">криптовалютных биржах</a>;
                    </li>
                    <li>
                        <a href="https://freebitco.in/?op=signup_page&r=8691617">
                            Сайты-краны
                        </a>
                        , на которых пользователь играет в мини-игры, кликает по рекламным
                        баннерам, смотрит видео, а взамен получает криптомонеты. Не требует
                        вложений;
                    </li>
                    <li>
                        Аирдроп- и баунти-кампании – возможность получить криптовалюту за
                        выполнение простых действий: репост, комментарий, прохождение
                        регистрации и т.п.
                    </li>
                </ul>
            </div>
            <div>
                Итак, имея доступ к кошельку и ненулевой баланс на нём, вы сможете:
                <ul>
                    <li>
                        Осуществлять прямые анонимные платежи или микротранзакции (без посредников, которые нередко
                        подвергаются хакерским атакам);
                    </li>
                    <li>
                        Безопасно хранить активы (только владелец кошелька, располагающий
                        уникальным ключом, может контролировать расход своих средств);
                    </li>
                    <li>
                        Заключать{" "}
                        <a href="https://habr.com/ru/post/448056/">смарт-контракты</a> -
                        компьютерные протоколы, позволяющие людям меняться друг с другом
                        деньгами, товарами, недвижимостью и другими активами и выступающие в
                        роли некого гаранта между заключившими контракт сторонами.
                    </li>
                    <li>
                        Осуществлять торговлю на криптовалютных биржах и получать прибыль;
                    </li>
                    <li>
                        Оплачивать криптоденьгами{" "}
                        <a href="https://mining--cryptocurrency-ru.turbopages.org/mining-cryptocurrency.ru/s/chto-mozhno-kupit-za-kriptovalyutu/">
                            некоторые товары и услуги
                        </a>
                        . Биткойны принимаются в качестве метода оплаты тысячами организаций
                        и предприятий по всему миру: Microsoft, Steam, Reddit, Subway,
                        Bloomberg, Wikipedia и т.д.
                    </li>
                </ul>
            </div>
            <div>
                Компания Visual Objects провела <a
                href={"https://visualobjects.com/web-development/understanding-cryptocurrency-myths-realities"}>исследование</a>,
                касающееся
                использования криптовалют для оплаты товаров, и выяснило, на что люди (в % из участвовавших в опросе)
                тратили цифровые деньги:
            </div>
            <div className="diagrams">
                <div className="diagram_item">
                    <svg id="svg-1" data-diagram="38" xmlns="http://www.w3.org/2000/svg"
                         xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="30 15 150 150"
                         preserveAspectRatio="none">
                        <circle id="circle-1" cx="100" cy="100" r="57" fill="none" stroke="#e7df33" strokeWidth="3"
                                strokeDasharray="0,20000" transform="rotate(-90,100,100)"/>
                        <text id="timer-1" textAnchor="middle" x="100" y="110"
                        >0%
                        </text>
                    </svg>
                    <p>
                        Продукты питания
                    </p>
                </div>
                <div className="diagram_item" ref={diagramRef}>
                    <svg id="svg-2" data-diagram="34" xmlns="http://www.w3.org/2000/svg"
                         xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="30 15 150 150"
                         preserveAspectRatio="none">
                        <circle id="circle-2" cx="100" cy="100" r="57" fill="none" stroke="#e7df33" strokeWidth="3"
                                strokeDasharray="0,20000" transform="rotate(-90,100,100)"/>
                        <text id="timer-2" textAnchor="middle" x="100" y="110"
                        >0%
                        </text>
                    </svg>
                    <p>
                        Одежда
                    </p>
                </div>
                <div className="diagram_item">
                    <svg id="svg-3" data-diagram="29" xmlns="http://www.w3.org/2000/svg"
                         xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="30 15 150 150"
                         preserveAspectRatio="none">
                        <circle id="circle-3" cx="100" cy="100" r="57" fill="none" stroke="#e7df33" strokeWidth="3"
                                strokeDasharray="0,20000" transform="rotate(-90,100,100)"/>
                        <text id="timer-3" textAnchor="middle" x="100" y="110"
                        >0%
                        </text>
                    </svg>
                    <p>
                        Акции компаний
                    </p>
                </div>
                <div className="diagram_item">
                    <svg id="svg-4" data-diagram="21" xmlns="http://www.w3.org/2000/svg"
                         xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="30 15 150 150"
                         preserveAspectRatio="none">
                        <circle id="circle-4" cx="100" cy="100" r="57" fill="none" stroke="#e7df33" strokeWidth="3"
                                strokeDasharray="0,20000" transform="rotate(-90,100,100)"/>
                        <text id="timer-4" textAnchor="middle" x="100" y="110"
                        >0%
                        </text>
                    </svg>
                    <p>
                        Золото
                    </p>
                </div>
            </div>
            <div>
                Но криптовалюты могут быть использованы в том числе и в преступных
                целях, однако развитие любых новых технологий, от автомобилей до
                интернета, всегда сопряжено с подобными рисками. Нередко биткойн и
                другие криптовалюты используются в преступных схемах, например, для
                отмывания денег, покупки незаконных веществ или при построении
                финансовых пирамид. О преступлениях, связанных с криптовалютой, достаточно
                информативно написано в{" "}
                <a href="https://www.figma.com/exit?url=https%3A%2F%2Fcyberleninka.ru%2Farticle%2Fn%2Fprestupleniya-svyazannye-s-ispolzovaniem-kriptovalyuty-osnovnye-kriminologicheskie-tendentsii%2Fviewer&fuid=782308480526635809">
                    этой статье
                </a>
                .
            </div>
        </div>
    );
}
