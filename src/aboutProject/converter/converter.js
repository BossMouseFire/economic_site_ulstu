import React, { useEffect, useState, useRef } from "react";
import axios from 'axios'
import "../aboutProject.scss";
export default function Converter() {
  const [currencyOne, setCurrencyOne] = useState([1, "Bitcoin"]);
  const [currencyTwo, setCurrencyTwo] = useState([2806, "Russian Ruble"]);
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState(0);
  const refreshEl = useRef(null);
  const inputRef = useRef(null);
  const LabelRef = useRef(null);
  const getCurrencyTranslation = () => {
      axios.get(`https://www.cryptoeconomics.tech/get_price-conversion?id=${currencyOne[0]}&convert_id=${currencyTwo[0]}&amount=${amount}`)
          .then(response => {
              let price = response.data.data.quote[`${currencyTwo[0]}`].price;
              setResult(price.toFixed(2));
          })
          .catch(error => {
            console.log(error);
          })
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
  const inputHandler = (e) => {
    const element = e.target.value;
    let checkElement = /^[1-9]\d{0,5}$/.test(element);
    if(!checkElement){
      inputRef.current.classList.add("errorInput");
      LabelRef.current.classList.add("errorLabel");
      LabelRef.current.classList.remove("trueLabel");
      if(!element){
        setAmount(0);
        setResult(0);
      }
    }
    else{
      inputRef.current.classList.remove("errorInput");
      LabelRef.current.classList.remove("errorLabel");
      LabelRef.current.classList.add("trueLabel");
      setAmount(e.target.value)
    }
  }
  return (
    <div className="converterBlock">
      <div className="titleConverter">Конвертер валют</div>
      <div>
        <label ref={LabelRef} className={"trueLabel"}>Введите число, чтобы получить результат</label>
        <input
          value={amount !== 0 ? amount : null}
          placeholder="Введите сумму для конвертации..."
          onChange={inputHandler}
          onClick={(e) => e.target.focus()}
          ref={inputRef}
        />
      </div>
      <div className="selection">
        <select
          value={currencyOne}
          onChange={(e) => setCurrencyOne(e.target.value.split(","))}
        >
          <option value={[1, "Bitcoin"]}>Bitcoin</option>
          <option value={[1027, "Etherium"]}>Etherium</option>
          <option value={[1839, "Binance Coin"]}>Binance Coin</option>
          <option value={[52, "XRP"]}>XRP</option>
          <option value={[825, "Tether"]}>Tether</option>
          <option value={[2, "Litecoin"]}>Litecoin</option>
          <option value={[1975, "Chainlink"]}>Chainlink</option>
          <option value={[2781, "United States Dollar"]}>
            United States Dollar
          </option>
          <option value={[2790, "Euro "]}>Euro</option>
          <option value={[2792, "Hong Kong Dollar"]}>Hong Kong Dollar</option>
          <option value={[2796, "Indian Rupee"]}>Indian Rupee</option>
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
          <option value={[1839, "Binance Coin"]}>Binance Coin</option>
          <option value={[52, "XRP"]}>XRP</option>
          <option value={[825, "Tether"]}>Tether</option>
          <option value={[2, "Litecoin"]}>Litecoin</option>
          <option value={[1975, "Chainlink"]}>Chainlink</option>
          <option value={[2781, "United States Dollar"]}>
            United States Dollar
          </option>
          <option value={[2790, "Euro "]}>Euro</option>
          <option value={[2792, "Hong Kong Dollar"]}>Hong Kong Dollar</option>
          <option value={[2796, "Indian Rupee"]}>Indian Rupee</option>
          <option value={[2806, "Russian Ruble"]}>Russian Ruble</option>
        </select>
      </div>
      <div className="result">
        {amount} {currencyOne[1]} = {result} {currencyTwo[1]}
      </div>
    </div>
  );
}
