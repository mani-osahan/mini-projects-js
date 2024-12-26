"use client";
import react from "react";
import Styles from "./calculator.module.css";
export default function Calculator() {
  let buttons = [
    "C",
    "Del",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
    "x",
  ];

  let [screenText, setScreenText] = react.useState<Array<string>>(["0"]);

  let [aboveScreen, setAboveScreen] = react.useState<Array<string>>(["0"]);

  let calcButtons: any = buttons.map((buttonValue) => {
    return (
      <button
        key={buttonValue}
        className={Styles.calcButtons}
        onClick={(e: any) =>
          setScreenText((prev: any) => {
            if (prev[0] === "0") {
              if (["=", "Del", "C"].includes(e.target.value)) {
                return prev;
              }
              return [...buttonValue];

            } else if (!isNaN(e.target.value)) {
              return [...prev, e.target.value];

            } else if (e.target.value === "Del") {
              prev = [...prev];
              prev.pop();
              prev = prev.length ? prev : ["0"];

            } else if (e.target.value === "C") {
              return ["0"];
            }
            console.log(prev);
            return prev;
          })
        }
        value={buttonValue}
      >
        {buttonValue}
      </button>
    );
  });

  return (
    <div className={Styles.calc_container}>
      <div className={Styles.calc_screen_text}>
      <div className={Styles.above_screen}>
        <p>
        {aboveScreen}
        </p>
        </div>
        <p>

      {screenText}
      </p>
            </div>

      <div className={Styles.calc_keys}>{calcButtons}</div>
    </div>
  );
}
