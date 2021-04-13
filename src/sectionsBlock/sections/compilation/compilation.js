import React from "react";
import "./compilation.scss";
export default function Compilation() {
  return (
    <div className="containerCompilation">
      <div className="titleBlock">
        <div className="titleInteriorBlock">
          Полезные материалы и источники
          <hr />
        </div>
      </div>
      <div>
        Рассказанное выше подано в очень упрощенной форме. Более любопытным
        пользователем стоит разобраться с вопросом подтверждения транзакций, с
        более подробным описанием содержимого блоков, с тем, что такое хэш, и
        т.д. Мы подготовили для вас список источников и материалов, которые
        помогут расширить спектр интересов и знаний, касающихся криптовалют:
      </div>
      <div>
        <ul>
          <li>
            <a href="https://www.rbc.ru/crypto/news/5f95b6d79a7947d04d2375e0">
              Всё, что важно знать о криптовалюте. Словарь терминов.
            </a>
          </li>
          <li>
            <a href="https://qna.habr.com/tag/%D0%BA%D1%80%D0%B8%D0%BF%D1%82%D0%BE%D0%B2%D0%B0%D0%BB%D1%8E%D1%82%D0%B0/questions">
              Обзоры, аналитика и самые свежие новости о криптовалютах на РБК.
            </a>
          </li>
          <li>
            <a href="https://qna.habr.com/tag/%D0%BA%D1%80%D0%B8%D0%BF%D1%82%D0%BE%D0%B2%D0%B0%D0%BB%D1%8E%D1%82%D0%B0/questions">
              Вопросы по тегу «Криптовалюта» / Хабр Q&A
            </a>
          </li>
          <li>
            <a href="https://qna.habr.com/tag/%D0%BA%D1%80%D0%B8%D0%BF%D1%82%D0%BE%D0%B2%D0%B0%D0%BB%D1%8E%D1%82%D0%B0/questions">
              Криптовалюты – деньги 2.0 / Хабр
            </a>
          </li>
          <li>
            <a href="https://vc.ru/crypto">
              Крипто – сообщество, новости, обзоры, видео / vc.ru
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCheLso1vLOyyD0oto_k0-dw/videos">
              YouTube-канал «Blockchain Conferences»
            </a>
          </li>
          <li>
            <a href="https://maff.io/crypto_books/">
              Топ-10 книг про криптовалюты и финансы от Maff
            </a>
          </li>
          <li>
            <a href="https://habr.com/ru/company/wirex/blog/394495/">
              50 книг о блокчейне и цифровой валюте / Блог компании Wirex / Хабр
            </a>
          </li>
          <li>
            <a href="https://www.rbc.ru/crypto/news/5e8affc99a7947648ed3e31e">
              Лучшие YouTube-каналы и подкасты о криптовалюте / РБК
            </a>
          </li>
          <li>
            <a href="https://bits.media/top-100-crypto-news-sites/">
              Топ-100 русскоязычных крипто-СМИ / Bits Media
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
