import React from "react";
import "./compilation.scss";
export default function Compilation() {
  return (
    <div className="containerCompilation">
      <div className="titleBlock">
        <div className="titleInteriorBlock">
          Подборка полезных материалов
          <hr />
        </div>
      </div>
      <div>
        Рассказанное выше подано в очень упрощенной форме. Более любопытным
        пользователем стоит разобраться с вопросом подтверждения транзакций, с
        более подробным описанием содержимого блоков, с тем, что такое хэш, и
        т.д. Мы подготовили для вас список ресурсов и материалов, которые
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
            <a herf="https://qna.habr.com/tag/%D0%BA%D1%80%D0%B8%D0%BF%D1%82%D0%BE%D0%B2%D0%B0%D0%BB%D1%8E%D1%82%D0%B0/questions">
              Вопросы по тегу «Криптовалюта» / Хабр Q&A
            </a>
          </li>
          <li>
            <a herf="https://qna.habr.com/tag/%D0%BA%D1%80%D0%B8%D0%BF%D1%82%D0%BE%D0%B2%D0%B0%D0%BB%D1%8E%D1%82%D0%B0/questions">
              Криптовалюты – деньги 2.0 / Хабр
            </a>
          </li>
          <li>
            <a>Крипто – сообщество, новости, обзоры, видео / vc.ru</a>
          </li>
          <li>
            <a>YouTube-канал «Blockchain Conferences»</a>
          </li>
          <li>
            <a>Топ-10 книг про криптовалюты и финансы от Maff</a>
          </li>
          <li>
            <a>
              50 книг о блокчейне и цифровой валюте / Блог компании Wirex / Хабр
            </a>
          </li>
          <li>
            <a>Лучшие YouTube-каналы и подкасты о криптовалюте / РБК</a>
          </li>
          <li>
              <a>Топ-100 русскоязычных крипто-СМИ / Bits Media</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
