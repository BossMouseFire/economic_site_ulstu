import React from "react";
import "./useCoin.scss";
export default function UseCoin() {
  return (
    <div className="containerUseCoin">
      <div className="titleBlock">
        <div className="titleInteriorBlock">
          Как использовать криптовалюту?
          <hr />
        </div>
      </div>
      <div>
        Первое, что нужно сделать, чтобы начать использовать или зарабатывать
        биткойны, — завести кошелёк: приобрести (в случае аппаратного кошелька)
        или установить специальную программу-клиент. Подробнее о видах кошельков
        и способах взаимодействия с ними вы сможете узнать на этом сайте.
      </div>
      <div>
        Стоит прояснить разницу между койнами и токенами: койны — это валюта,
        которую можно заработать и потратить на товары и услуги. Построены койны
        именно на блокчейне. А токены — акции, построенные на вспомогательной
        платформе — например, Etherium. Они подтверждают наличие доли в
        каком-либо проекте, а их стоимость зависит от успешности проекта. Токены
        нельзя намайнить, можно только купить. Потратить напрямую тоже нельзя,
        можно только продать за другую валюту или обменять на услуги компании,
        которая их выпустила. Койны стоит покупать тем, кто хочет просто
        пользоваться криптовалютой и не хочет рисковать. А токены подойдут
        рисковым инвесторам, которые хотят заработать быстро и сразу.
      </div>
      <div>
        Одного лишь созданного кошелька мало, ведь чтобы использовать биткойн,
        нужно предварительно иметь ненулевой криптоденежный баланс, пополнить
        который можно несколькими способами:
        <ul>
          <li>
            Майнинг — естественный способ получения биткойнов (рассмотрен выше).
            Также существует облачный майнинг — добыча криптовалюты с
            использованием удаленного центра обработки данных. Криптовалюту
            можно майнить даже на бумаге, вручную, как описано в этой статье;
          </li>
          <li>
            Купить биткойны за фиатные деньги в криптовалютных обменниках и
            банкоматах, напрямую у держателей, на криптовалютных биржах;
          </li>
          <li>
            Сайты-краны, на которых пользователь играет в мини-игры, кликает по
            рекламным баннерам, смотрит видео, а взамен получает криптомонеты.
            Не требует вложений;
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
            Осуществлять прямые анонимные платежи или микротранзакции (без
            посредников, которые нередко подвергаются хакерским атакам, и со
            сравнительно низкой комиссией);
          </li>
          <li>
            Безопасно хранить активы (только владелец кошелька, располагающий
            уникальным ключом, может контролировать расход своих средств);
          </li>
          <li>
            Заключать смарт-контракты - компьютерные протоколы, позволяющие
            людям меняться друг с другом деньгами, товарами, недвижимостю и
            другими активами и выступающие в роли некого гаранта между
            заключившими контракт сторонами.
          </li>
          <li>
            Осуществлять торговлю на криптовалютных биржах и получать прибыль;
          </li>
          <li>
            Оплачивать криптоденьгами некоторые товары и услуги. Биткойны
            принимаются в качестве метода оплаты тысячами организаций и
            предприятий по всему миру: Microsoft, Steam, Reddit, Subway,
            Bloomberg, Wikipedia и т.д.
          </li>
        </ul>
      </div>
      <div>
        Но криптовалюты могут быть использованы в том числе и в преступных
        целях, однако развитие любых новых технологий, от автомобилей до
        интернета, всегда сопряжено с подобными рисками. Нередко биткойн и
        другие криптовалюты используются в преступных схемах, например, для
        отмывания денег, покупки незаконных веществ или при построении
        финансовых пирамид. О преступлениях, связаных с криптовалютой достаточно
        информативно написано в этой статье.
      </div>
    </div>
  );
}