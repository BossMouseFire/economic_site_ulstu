import React, { useEffect, useState, useRef } from "react";
import axios from 'axios'
import "../aboutProject.scss";
export default function Converter() {
  const [currencyOne, setCurrencyOne] = useState([1, "Bitcoin"]);
  const [currencyTwo, setCurrencyTwo] = useState([2806, "Russian Ruble"]);
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState(0);
  const refreshEl = useRef(null);

  const getCurrencyTranslation = () => {
    if (amount === 0) {
      setResult(0);
    } else {
      axios.get(`http://localhost:3001/get_price-conversion?id=${currencyOne[0]}&convert_id=${currencyTwo[0]}&amount=${amount}`)
          .then(response => {
              let price = response.data.data.quote[`${currencyTwo[0]}`].price;
              setResult(price.toFixed(2));
          })
          .catch(error => {
            console.log(error);
          })
    }
  };
  useEffect(() => {
    getCurrencyTranslation();
  }, [currencyOne, currencyTwo, amount]);
  const refreshCurrency = () => {
    const element = refreshEl.current;
    element.classList.toggle("refreshActive");
    setCurrencyTwo(currencyOne);
    setCurrencyOne(currencyTwo);
  };

  return (
    <div className="converterBlock">
      <div className="titleConverter">Конвертер валют</div>
      <div>
        <input
          value={amount !== 0 ? amount : null}
          placeholder="Введите сумму для конвертации..."
          onChange={(e) =>
            e.target.value ? setAmount(e.target.value) : setAmount(0)
          }
          onClick={(e) => e.target.focus()}
        />
      </div>
      <div className="selection">
        <select
          value={currencyOne}
          onChange={(e) => setCurrencyOne(e.target.value.split(","))}
        >
          <option value={[1, "Bitcoin"]}>Bitcoin</option>
          <option value={[1027, "Etherium"]}>Etherium</option>
          <option value={[2781, "United States Dollar"]}>
            United States Dollar
          </option>
          <option value={[2806, "Russian Ruble"]}>Russian Ruble</option>
        </select>
      </div>
      <div ref={refreshEl} className="refresh" onClick={refreshCurrency}>
        <img src="/images/refresh.svg" alt="refresh" />
      </div>
      <div className="selection">
        <select
          value={currencyTwo}
          onChange={(e) => setCurrencyTwo(e.target.value.split(","))}
        >
          <option value={[1, "Bitcoin"]}>Bitcoin</option>
          <option value={[1027, "Etherium"]}>Etherium</option>
          <option value={[2781, "United States Dollar"]}>
            United States Dollar
          </option>
          <option value={[2806, "Russian Ruble"]}>Russian Ruble</option>
        </select>
      </div>
      <div className="result">
        {amount} {currencyOne[1]} = {result} {currencyTwo[1]}
      </div>
    </div>
  );
}
