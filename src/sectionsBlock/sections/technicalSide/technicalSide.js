import React from "react";
import "./technicalSide.scss";
export default function TechnicalSide() {
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
    </div>
  );
}