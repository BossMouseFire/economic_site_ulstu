import React, { useEffect, useState } from "react";
import "./technicalSide.scss";
export default function TechnicalSide() {
  const [positionCoin, setPositionCoin] = useState(0);
  const [positonTransactions, setPositionTransactions] = useState(0);
  const [positionCard, setPositionCard] = useState(0);
  const [positionCardBlock, setPositionCardBlock] = useState(0);
  const listener = (e) => {
    let coin = document.querySelector("#mainBitcoin");
    if (
      window.scrollY > positionCoin &&
      window.scrollY < positonTransactions * 0.984
    ) {
      coin.style.transform = `translate(0, ${
        (window.pageYOffset - positionCoin) * 1.3
      }px) scale(${window.scrollY <= positionCoin * 1.005 ? 1 : 0.34})`; //0.35
      coin.style.opacity = `${window.scrollY <= positionCoin * 1.005 ? 1 : 0.5}`
    }

    let transactions = document.querySelector("#transactions");
    if (
      window.scrollY > positonTransactions &&
      window.scrollY < positionCard * 0.984
    ) {
      transactions.style.transform = `translate(0, ${
        (window.pageYOffset - positonTransactions) * 1.3
      }px) scale(${window.scrollY <= positonTransactions * 1.005 ? 1 : 0.6})`; //0.35
    }

    let card = document.querySelector("#card");
    if (
      window.scrollY > positionCard &&
      window.scrollY < positionCardBlock * 0.974
    ) {
      card.style.transform = `translate(0, ${
        (window.pageYOffset - positionCard) * 1.3
      }px) scale(${window.scrollY <= positionCard * 1.012 ? 1 : 0.38})`; //0.35
    }
  };
  useEffect(() => {
    let coin = document.querySelector("#mainBitcoin");
    setPositionCoin(window.pageYOffset + coin.getBoundingClientRect().top);

    let transactions = document.querySelector("#transactions");
    setPositionTransactions(
      window.pageYOffset + transactions.getBoundingClientRect().top
    );

    let card = document.querySelector("#card");
    setPositionCard(window.pageYOffset + card.getBoundingClientRect().top);

    let cardBlock = document.querySelector("#cardBlock");
    setPositionCardBlock(
      window.pageYOffset + cardBlock.getBoundingClientRect().top
    );
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });
  return (
    <div className="containerTechnicalSide">
      <div className="titleBlock">
        <div className="titleInteriorBlock">
          Криптовалюты с технической стороны <hr />
        </div>
      </div>
      <div>
        Говоря простыми словами, в основе криптовалюты лежит{" "}
        <a href="https://crypto-fox.ru/article/kriptografiya-v-kriptovalyutah/">
          криптография
        </a>
        , на которой строится любая система передачи данных, в том числе и
        банковская. Если мы рассмотрим самые популярные криптовалюты, то увидим,
        что их всех объединяет набор базовых технологий и концепций, которые
        позволяют организовывать платёжные сервисы и отслеживать транзакции
        между банками и пользователями.
      </div>
      <div className="contentWithImage">
        <div className="textContent">
          Когда вы совершаете банковский перевод или любую транзакцию, ваш банк
          не берёт деньги с вашего счёта и не переводит их на счёт получателя:
          он просто хранит информацию о платеже в своей базе данных столько,
          сколько ему нужно и удобно. Деньги сейчас перемещаются по принципу
          изменения записей в базах данных, а не физически.
        </div>
        <div className="imageContent">
          <img src="/images/technicalSide.png" />
        </div>
      </div>
      <div>
        Для того, чтобы криптовалюта функционировала независимо от любого
        централизованного посредника, всем участникам процесса необходимо иметь
        способ записи и хранения финансовых транзакций, чтобы исключить проблему
        двойного списания, которая позволяет дважды «купить» товаров на вдвое
        большую, чем имеющаяся, сумму. При этом проблема должна решаться без
        использования какого-то центрального сервера и базы, как это делается в
        банках.
      </div>
      <div>
        В большинстве существующих криптовалют используется открытый
        распределённый реестр, который называется блокчейн — цепочка из блоков с
        записями транзакций, которые связаны между собой и защищаются с
        использованием криптографии. Перейдём к основным элементам
        функционирования блокчейна и рассмотрим их на примере биткойна (как и во
        всех следующих разделах):
      </div>
      <div className="blockchainBlock">
        <div className="infoBlockchain">
          <div>
            <img
              src="/images/technicalSide/bitcoin.svg"
              id="mainBitcoin"
              style={{ transition: "all 0.5s ease", zIndex: 1 }}
            />
          </div>
          <div>
            <div className="titleBlock">Актив</div>
            <div>
              Актив — это что-то ценное: деньги, имущество, ценные бумаги,
              информация и т.д. Активы могут существовать в реальном мире, как,
              например, квартира или автомобиль, а могут быть полностью
              цифровыми. В нашем случае актив — это биткойн.
            </div>
          </div>
        </div>
        <div className="infoBlockchain">
          <div>
            <img
              src="/images/technicalSide/transactions.svg"
              id="transactions"
              style={{ transition: "all 0.5s ease", zIndex: 2 }}
            />
          </div>
          <div>
            <div className="titleBlock">Транзакция</div>
            <div>
              <a href="https://ru-bitcoinwiki-org.turbopages.org/ru.bitcoinwiki.org/s/wiki/Bitcoin_%D1%82%D1%80%D0%B0%D0%BD%D0%B7%D0%B0%D0%BA%D1%86%D0%B8%D1%8F">
                Транзакция биткойна
              </a>{" "}
              — это секция данных, которая передаётся по сети Bitcoin и
              собирается в блоки. Обычно она содержит ссылки на предыдущие
              транзакции и ассоциирует определённое количество биткойнов с одним
              или несколькими публичными ключами (биткоин-адресами). Транзакции
              транслируются в сеть без шифрования. Существуют сайты, на которых
              можно увидеть каждую транзакцию, записанную в блок, — такие сайты
              называют{" "}
              <a href="https://blockchair.com/ru/bitcoin/transactions">
                обозревателями блокчейна
              </a>
              .
            </div>
          </div>
        </div>
        <div className="infoBlockchain">
          <div>
            <img
              src="/images/technicalSide/account.svg"
              id="card"
              style={{ transition: "all 0.5s ease", zIndex: 3 }}
            />
          </div>
          <div>
            <div className="titleBlock">Учёт транзакций</div>
            <div>
              Учёт транзакций – это фиксация всех переходов биткойна или права
              на него от одного человека к другому. В блокчейне реестр
              владельцев не хранится на сервере одной организации: его копии
              одновременно обновляются на множестве независимых компьютеров,
              объединённых через интернет. Как следствие, в блокчейне реестры с
              данными о владельцах активов невозможно подделать, ведь эти данные
              хранятся у огромного числа участников сети. Ближайшие участники
              системы могут подтвердить, что на кошельке есть деньги,
              подтвердить транзакцию и добавить ее в следующий блок, чтобы
              завершить перевод. А чтобы информация у всех пользователей была
              абсолютно полной и верной, в блокчейне ввели понятие консенсус
              (лат. consensus — согласие).
            </div>
          </div>
        </div>
        <div className="infoBlockchain">
          <div></div>
          <div>
            <div className="titleBlock">Консенсус</div>
            <div>
              Если некоторые участники сети выключат свои компьютеры и часть
              транзакций у них не отразится или их записи окажутся неверными,
              это не повлияет на работу сети. Процедура консенсуса, то есть
              достижения согласия, позволит восстановить верную информацию.
              Способ достижения этого консенсуса влияет на безопасность и
              экономические параметры протокола. Пять примеров его достижения
              хорошо описаны на этом сайте.
            </div>
          </div>
        </div>
        <div className="infoBlockchain">
          <div>
            <img
              src="/images/technicalSide/block.svg"
              id="cardBlock"
              style={{ transition: "all 0.5s ease", zIndex: 3 }}
            />
          </div>
          <div>
            <div className="titleBlock">Блок</div>
            <div>
              Блок – это запись в распределенном реестре о нескольких
              транзакциях. В нем отражено, кто кому и когда перевел какой объём
              активов. Все блоки последовательно соединяются в одну цепь.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
