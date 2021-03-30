import React, { useEffect, useState } from "react";
import "./technicalSide.scss";
export default function TechnicalSide() {
  const [positionCoin, setPositionCoin] = useState(0);
  const [positonTransactions, setPositionTransactions] = useState(0);
  const [positionCard, setPositionCard] = useState(0);
  const [positionCardBlock, setPositionCardBlock] = useState(0);
  const [positionGroupCardBlock, setPositionGroupCardBlock] = useState(0);
  const [positionMainerBlock, setPositionMainerBlock] = useState(0);
  const [positionWallet, setPositionWallet] = useState(0);
  const [positionLock, setPositionLock] = useState(0);
  const listener = (e) => {
    if (window.screen.width > 768) {
      let coin = document.querySelector("#mainBitcoin");
      if (
        window.scrollY > positionCoin &&
        window.scrollY < positionWallet * 0.96
      ) {
        coin.style.transform = `translate(0, ${
          (window.pageYOffset - positionCoin) * 1.1
        }px) scale(${window.scrollY <= positionCoin * 1.005 ? 1 : 0.34})`; //0.35
        let opacityCoin =
          window.scrollY > positionWallet * 0.958
            ? 0
            : window.scrollY > positionMainerBlock * 0.98
            ? 1
            : window.scrollY > positonTransactions * 0.987
            ? 0
            : 1;
        coin.style.opacity = `${opacityCoin}`;
      }

      let transactions = document.querySelector("#transactions");
      if (
        window.scrollY > positonTransactions &&
        window.scrollY < positionCard * 0.984
      ) {
        transactions.style.transform = `translate(0, ${
          (window.pageYOffset - positonTransactions) * 1.3
        }px) scale(${window.scrollY <= positonTransactions * 1.005 ? 1 : 0.6})`; //0.35
        transactions.style.opacity = `${
          window.scrollY > positionCard * 0.98 ? 0 : 1
        }`;
      }

      let card = document.querySelector("#card");
      if (
        window.scrollY > positionCard &&
        window.scrollY < positionCardBlock * 0.9658
      ) {
        card.style.transform = `translate(0, ${
          (window.pageYOffset - positionCard) * 1.3
        }px) scale(${window.scrollY <= positionCard * 1.012 ? 1 : 0.38})`; //0.35
        card.style.opacity = `${
          window.scrollY > positionCardBlock * 0.964 ? 0 : 1
        }`;
      }

      let cardBlock = document.querySelector("#cardBlock");
      if (
        window.scrollY > positionCardBlock &&
        window.scrollY < positionGroupCardBlock * 0.974
      ) {
        cardBlock.style.transform = `translate(0, ${
          (window.pageYOffset - positionCardBlock) * 1.3
        }px) scale(${window.scrollY <= positionCardBlock * 1.012 ? 1 : 0.26})`;
        cardBlock.style.opacity = `${
          window.scrollY > positionGroupCardBlock * 0.973 ? 0 : 1
        }`;
      }

      let groupCardBlock = document.querySelector("#groupCardBlock");
      if (
        window.scrollY > positionGroupCardBlock &&
        window.scrollY < positionMainerBlock * 0.982
      ) {
        groupCardBlock.style.transform = `translate(0, ${
          (window.pageYOffset - positionGroupCardBlock) * 1.3
        }px)`;
        groupCardBlock.style.opacity = `${
          window.scrollY > positionMainerBlock * 0.98 ? 0 : 1
        }`;
      }

      let wallet = document.querySelector("#wallet");
      if (
        window.scrollY > positionWallet &&
        window.scrollY < positionLock * 0.974
      ) {
        wallet.style.transform = `translate(0, ${
          (window.pageYOffset - positionWallet) * 1.3
        }px)`;
      }
    }
  };

  useEffect(() => {
    getPositionElements();
  }, []);
  useEffect(() => {
    window.addEventListener("resize", getPositionElements);
    return () => {
      window.removeEventListener("resize", getPositionElements);
    };
  });
  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });
  const getPositionElements = () => {
    setTimeout(() => {
      let coin = document.querySelector("#mainBitcoin");
      setPositionCoin(getCoords(coin).top);
      let transactions = document.querySelector("#transactions");
      setPositionTransactions(getCoords(transactions).top);

      let card = document.querySelector("#card");
      setPositionCard(getCoords(card).top);

      let cardBlock = document.querySelector("#cardBlock");
      setPositionCardBlock(getCoords(cardBlock).top);

      let groupCardBlock = document.querySelector("#groupCardBlock");
      setPositionGroupCardBlock(getCoords(groupCardBlock).top);

      let mainerBlock = document.querySelector("#mainerBlock");
      setPositionMainerBlock(getCoords(mainerBlock).top);

      let wallet = document.querySelector("#wallet");
      setPositionWallet(getCoords(wallet).top);

      let lock = document.querySelector("#lock");
      setPositionLock(getCoords(lock).top);
    }, 300);
  };
  const getCoords = (elem) => {
    const box = elem.getBoundingClientRect(),
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {
      top: box.top + scrollTop,
    };
  };
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
              style={{ transition: "all 0.3s ease", zIndex: 1 }}
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
              style={{ transition: "all 0.3s ease", zIndex: 2 }}
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
              style={{ transition: "all 0.3s ease", zIndex: 3 }}
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
              style={{ transition: "all 0.3s ease", zIndex: 3 }}
            />
          </div>
          <div>
            <div className="titleBlock">Блок</div>
            <div>
              Блок – это запись в распределенном реестре о нескольких
              транзакциях. В нем отражено, кто кому и когда перевел какой объём
              активов. Все блоки последовательно соединяются в одну цепь, так
              как каждый блок содержит свой собственный уникальный
              криптографический идентификатор, который связывает его с
              предыдущим блоком цепи.
            </div>
          </div>
        </div>
        <div className="infoBlockchain">
          <div>
            <img
              src="/images/technicalSide/groupChain.svg"
              id="groupCardBlock"
              style={{ transition: "all 0.3s ease", zIndex: 3 }}
            />
          </div>
          <div>
            <div className="titleBlock">Цепь</div>
            <div>
              Цепь блокчейна неразрывна, поскольку каждый блок содержит
              уникальный идентификатор, который связывает его с предыдущим.
              Блоки нельзя изменить или удалить, можно только добавить новые.
              После добавления в блокчейн, блоки уже невозможно изменить без
              потери данных о всей последующей цепи, что незамедлительно дает
              другим пользователям знать, что было совершено стороннее
              вмешательство в обход правил. Это даёт возможность просто отказать
              в использовании изменённой версии цепочки (т. к. без признания
              изменённого блока со стороны большинства участников процесса он
              бесполезен) и продолжать работать с исходной ветвью.
            </div>
            <div>
              Таким образом, всегда можно восстановить историю переходов
              конкретного биткойна из рук в руки и узнать его нынешнего
              владельца. Новые блоки в цепь добавляют майнеры.
            </div>
          </div>
        </div>
        <div className="infoBlockchain">
          <div>
            <img
              src="/images/technicalSide/mainer.svg"
              id="mainerBlock"
              style={{ transition: "all 0.3s ease", zIndex: 3 }}
            />
          </div>
          <div>
            <div className="titleBlock">Майнеры</div>
            <div>
              Чтобы достичь консенсуса относительно того, какие блоки транзакций
              действительно должны быть добавлены в цепочку блоков и для того,
              чтобы банально создавать эти блоки данных, некоторые пользователи
              участвуют в процессе{" "}
              <a href="https://ru-bitcoinwiki-org.turbopages.org/ru.bitcoinwiki.org/s/wiki/%D0%9C%D0%B0%D0%B9%D0%BD%D0%B8%D0%BD%D0%B3">
                майнинга
              </a>{" "}
              (с англ. mining — добыча, горное дело). Замечание: для того, чтобы
              пользоваться криптовалютой, её не обязательно «добывать».
            </div>
            <div>
              Майнеры с помощью специализированного оборудования и программного
              обеспечения выполняют сложные математические вычисления, в
              результате которых создаются новые блоки в блокчейне. За создание
              очередной структурной единицы обычно предусмотрено вознаграждение
              за счёт новых единиц криптовалюты и/или комиссионных сборов.
            </div>
            <div>
              Майнеры выполняют в блокчейне несколько функций:
              <ul>
                <li>
                  хранят копии блокчейна и тем самым защищают информацию от
                  потери или подделки;
                </li>
                <li>подтверждают транзакции;</li>
                <li>
                  проверяют транзакции, которые зарегистрировали другие майнеры.
                  Чем их больше, тем лучше – такая сеть надежнее; майнерами
                  могут стать все желающие.
                </li>
              </ul>
            </div>
            <div>
              Майнинг — не единственная технология создания новых блоков и
              обеспечения эмиссии. Альтернативами являются{" "}
              <a href="https://cryptocurrency.tech/forzhing-kak-perspektivnaya-alternativa-majningu/">
                форжинг (минтинг)
              </a>{" "}
              и{" "}
              <a href="https://www.figma.com/exit?url=https%3A%2F%2Fcryptocurrency.tech%2Fforzhing-kak-perspektivnaya-alternativa-majningu%2F">
                ICO
              </a>
              .
            </div>
          </div>
        </div>
        <div className="infoBlockchain">
          <div>
            <img
              src="/images/technicalSide/wallet.svg"
              id="wallet"
              style={{ transition: "all 0.3s ease", zIndex: 3 }}
            />
          </div>
          <div>
            <div className="titleBlock">Кошелек</div>
            <div>
              Пользователи криптовалют используют специальные программные или
              аппаратные кошельки. Каждый такой кошелек содержит в себе
              уникальный криптографический ключ, который позволяет владельцу
              получить доступ к своим накоплениям, которые хранятся в рамках
              общедоступного блокчейна. Создатели криптовалют придумали
              интересную схему безопасности — для каждой операции кошелек
              создает новые уникальные адреса.
            </div>
            <div>
              При этом кошельки могут быть как «горячими» — то есть размещаться
              где-то в интернете в рамках онлайн-сервиса, так и «холодными» —
              хранение криптовалюты происходит без доступа к сети. «Холодный»
              кошелек, фактически, является файлом на компьютере, потеря
              которого обернется безвозвратной потерей доступа к кошельку и
              криптовалюте внутри него.
            </div>
            <div>
              Чаще всего такие кошельки анонимны – они не позволяют узнать, кто
              именно принимает или отправляет с него активы. Но если владелец
              кошелька, например, забудет его номер, то никак не сможет
              доказать, что счет принадлежит именно ему. Все, что хранилось в
              кошельке, окажется потерянным навсегда. Данные электронных
              кошельков и транзакции в блокчейне защищены шифрованием.
            </div>
          </div>
        </div>
        <div className="infoBlockchain">
          <div className="lockBlock">
            <img
              src="/images/technicalSide/lock.svg"
              id="lock"
              style={{
                transition: "all 0.3s ease",
                zIndex: 4,
                width: "6vw",
                marginLeft: "11vw",
              }}
            />
          </div>
          <div>
            <div className="titleBlock">Шифрование</div>
            <div>
              Благодаря криптографии, которая лежит в основе криптовалют, и
              вытекающих из неё методов шифрования, информация о транзакциях и
              состоянии кошелька остаётся верной, полной и конфиденциальной.
            </div>
          </div>
        </div>
      </div>
      <div>
        В блокчейн-сетях покупатель и продавец биткойна подтверждают транзакцию
        с помощью криптографических ключей – специальных уникальных цифровых
        кодов. Угадать последовательность символов цифрового кода
        криптографических ключей практически невозможно. Это делает технологию
        блокчейн одной из лучших для финансовых транзакций. Но в то же время уже
        были случаи взлома кошельков, поэтому их лучше подключать к сети только
        на время проведения транзакций, а в остальное время пользоваться
        «холодным» кошельком.
      </div>
      <div>
        Если вы хотите узнать больше о технической стророне криптовалют,
        предлагаем вам посмотреть следующие видео:
      </div>
      <div className="videoCoinBlock">
        <div className="videoContent">
          <div>
            <iframe
              src="https://www.youtube.com/embed/00CJAVkBlJE"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div>«Как работает биткойн?» — видео канала «ТОПЛЕС», YouTube.</div>
        </div>
        <div className="videoContent">
          <div>
            <iframe
              src="https://www.youtube.com/embed/G2d3cz84sLM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div>«Блокчейн: определения, приложения, задачи» — лекция Юрия Яновича, НИУ ВШЭ.</div>
        </div>
      </div>
    </div>
  );
}
