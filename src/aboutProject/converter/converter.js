import React, { useEffect, useState } from "react";
import axios from "axios";
import "../aboutProject.scss";
export default function Converter() {
  const [currencyOne, setCurrencyOne] = useState(1);
  const [currencyTwo, setCurrencyTwo] = useState(2806);
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState(0);

  const params = {
    CMC_PRO_API_KEY: "3814aac7-4d3f-41e8-8a91-1294e1015c5a",
    id: currencyOne,
    convert_id: currencyTwo,
    amount,
  };
  const getСurrencyTranslation = () => {
    axios
      .get("https://pro-api.coinmarketcap.com/v1/tools/price-conversion", {
        params,
      })
      .then((response) => {
        let price = response.data.data.quote[`${currencyTwo}`].price;
        setResult(price.toFixed(2));
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getСurrencyTranslation();
  }, [currencyOne, currencyTwo, amount]);
  return (
    <div className="converterBlock">
        <div className="titleConverter">
            Конвертер Криптовалют
        </div>
      <div>
        <input
          value={amount != 0 ? amount : null }
          placeholder="Введите сумму для конвертации"
          onChange={(e) => setAmount(e.target.value)}
          onClick={(e) => e.target.focus()}
        />
      </div>
      <div className="selection">
        <select
          value={currencyOne}
          onChange={(e) => setCurrencyOne(e.target.value)}
        >
          <option value="1">Bitcoin</option>
          <option value="1027">Etherium</option>
          <option value="2781">United States Dollar</option>
          <option value="2806">Russian Ruble </option>
        </select>
      </div>
      <div className="selection">
        <select
          value={currencyTwo}
          onChange={(e) => setCurrencyTwo(e.target.value)}
        >
          <option value="1">Bitcoin</option>
          <option value="1027">Etherium</option>
          <option value="2781">United States Dollar</option>
          <option value="2806">Russian Ruble </option>
        </select>
      </div>
      <div className="result">
        {amount} Валют = {result} Валют
      </div>
    </div>
  );
}
