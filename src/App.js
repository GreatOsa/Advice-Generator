import "./App.css";
import React, { useEffect, useState } from "react";
import mobileDivider from "./images/pattern-divider-mobile.svg";
import desktopDivider from "./images/pattern-divider-desktop.svg";
import dice from "./images/icon-dice.svg";

const URL = "https://api.adviceslip.com/advice";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(URL);

      result.json().then((json) => {
        setAdvice(json.slip.advice);
        setId(json.slip.id);
      });
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      {/* <div className="stack"> */}
      <div className="container">
        <p className="adviceTitle">ADVICE #{id} </p>
        <p className="advice">"{advice}"</p>

        <img src={mobileDivider} alt="divider" className="mobileDivider" />
        <img src={desktopDivider} alt="divider" className="desktopDivider" />

        <div className="rowCenter">
          <button className="diceContainer">
            <img src={dice} alt="dice" className="dice" />
          </button>
        </div>
      </div>
    </div>
  );
}
