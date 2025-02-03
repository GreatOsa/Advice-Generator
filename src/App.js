import "./App.css";
import React, { useEffect, useState } from "react";
import mobileDivider from "./images/pattern-divider-mobile.svg";
import desktopDivider from "./images/pattern-divider-desktop.svg";
import dice from "./images/icon-dice.svg";

const URL = "https://api.adviceslip.com/advice";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [id, setId] = useState("");
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  const fetchData = async () => {
    const result = await fetch(URL);

    result.json().then((json) => {
      setAdvice(json.slip.advice);
      setId(json.slip.id);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  // const fetchAdvice = async () => {
  //   setLoading(true);
  //   // setError(null);
  //   try {
  //     const response = await fetch(URL);
  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }
  //     // const result = await response.json();
  //     const result = await fetch(URL);
  //     result.json().then((json) => {
  //       setAdvice(json.slip.advice);
  //       setId(json.slip.id);
  //     });
  //   } catch (error) {
  //     setError(error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <div className="App">
      {/* <div className="stack"> */}
      <div className="container">
        <p className="adviceTitle">ADVICE #{id} </p>
        <p className="advice">"{advice}"</p>

        <img src={mobileDivider} alt="divider" className="mobileDivider" />
        <img src={desktopDivider} alt="divider" className="desktopDivider" />

        <div className="rowCenter">
          <button
            className="diceContainer shadow__btn"
            onClick={() => fetchData()}
          >
            <img src={dice} alt="dice" className="dice" />
          </button>
        </div>
      </div>
    </div>
  );
}
