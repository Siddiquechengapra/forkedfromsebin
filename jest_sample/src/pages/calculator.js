// import '../app/globals.css'
// import Screen from '@/Components/Screen';
// import Button from '@/Components/Button';
// import ButtonBox from '@/Components/ButtonBox';
// import React, { useState } from "react";

// const toLocaleString = (num) =>
//   String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

// const removeSpaces = (num) => num.toString().replace(/\s/g, "");

// const btnValues = [
//   ["C", "+-", "%", "/"],
//   [7, 8, 9, "X"],
//   [4, 5, 6, "-"],
//   [1, 2, 3, "+"],
//   [0, ".", "="],
// ];
// export const numClickHandler2 = (e, dummy) => {
//   return dummy
// };

// const Calculator = ({ children }) => {

//   let [calc, setCalc] = useState({
//     sign: "",
//     num: 0,
//     res: 0,
//   });

//   const numClickHandler = (e, dummy) => {
//     e.preventDefault();
//     const value = e.target.innerHTML;

//     if (removeSpaces(calc.num).length < 16) {
//       setCalc({
//         ...calc,
//         num:
//           calc.num === 0 && value === "0"
//             ? "0"
//             : removeSpaces(calc.num) % 1 === 0
//               ? toLocaleString(Number(removeSpaces(calc.num + value)))
//               : toLocaleString(calc.num + value),
//         res: !calc.sign ? 0 : calc.res,
//       });
//     }

//     return dummy
//   };

//   const commaClickHandler = (e) => {
//     e.preventDefault();
//     const value = e.target.innerHTML;

//     setCalc({
//       ...calc,
//       num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
//     });
//   };

//   const signClickHandler = (e) => {
//     e.preventDefault();
//     const value = e.target.innerHTML;

//     setCalc({
//       ...calc,
//       sign: value,
//       res: !calc.res && calc.num ? calc.num : calc.res,
//       num: 0,
//     });
//   };

//   const equalsClickHandler = () => {
//     if (calc.sign && calc.num) {
//       const math = (a, b, sign) =>
//         sign === "+"
//           ? a + b
//           : sign === "-"
//             ? a - b
//             : sign === "X"
//               ? a * b
//               : a / b;

//       setCalc({
//         ...calc,
//         res:
//           calc.num === "0" && calc.sign === "/"
//             ? "Can't divide with 0"
//             : toLocaleString(
//               math(
//                 Number(removeSpaces(calc.res)),
//                 Number(removeSpaces(calc.num)),
//                 calc.sign
//               )
//             ),
//         sign: "",
//         num: 0,
//       });
//     }
//   };

//   const invertClickHandler = () => {
//     setCalc({
//       ...calc,
//       num: calc.num ? toLocaleString(removeSpaces(calc.num) * -1) : 0,
//       res: calc.res ? toLocaleString(removeSpaces(calc.res) * -1) : 0,
//       sign: "",
//     });
//   };

//   const percentClickHandler = () => {
//     let num = calc.num ? parseFloat(removeSpaces(calc.num)) : 0;
//     let res = calc.res ? parseFloat(removeSpaces(calc.res)) : 0;

//     setCalc({
//       ...calc,
//       num: (num /= Math.pow(100, 1)),
//       res: (res /= Math.pow(100, 1)),
//       sign: "",
//     });
//   };

//   const resetClickHandler = () => {
//     setCalc({
//       ...calc,
//       sign: "",
//       num: 0,
//       res: 0,
//     });
//   };

//   return (
//     <div className='wrapper'>
//       <h1 style={{ color: "black", fontWeight: "bold" }}>CALCULATOR</h1>

//       <Screen value={calc.num ? calc.num : calc.res} />
//       <ButtonBox>
//         {btnValues.flat().map((btn, i) => {
//           return (
//             <Button
//               key={i}
//               className={btn === "=" ? "equals" : ""}
//               value={btn}
//               onClick={
//                 btn === "C"
//                   ? resetClickHandler
//                   : btn === "+-"
//                     ? invertClickHandler
//                     : btn === "%"
//                       ? percentClickHandler
//                       : btn === "="
//                         ? equalsClickHandler
//                         : btn === "/" || btn === "X" || btn === "-" || btn === "+"
//                           ? signClickHandler
//                           : btn === "."
//                             ? commaClickHandler
//                             : numClickHandler
//               }
//             />
//           );
//         })}
//       </ButtonBox>
//     </div>
//   );
// };

// export default Calculator;

import Head from "next/head";
import { useState } from "react";
import "../app/newstyle.css";
export default function Calculator() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);
  const add = () => {
    setResult(parseInt(num1) + parseInt(num2));
  };
  const subtract = () => {
    setResult(parseInt(num1) - parseInt(num2));
  };
  const multiply = () => {
    setResult(parseInt(num1) * parseInt(num2));
  };

  const divide = () => {
    setResult(parseInt(num1) / parseInt(num2));
  };
  const reset = () => {
    setResult(0);
  };
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="result" data-testid="result">
        {result}
      </div>
      <div className="result2">
        <input
          type="text"
          className="input"
          data-testid="num1"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="text"
          className="input"
          data-testid="num2"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <button onClick={add} className="button" data-testid="add">
          Add
        </button>
        <button
          onClick={subtract}
          className="button"
          data-testid="subtract"
        >
          Subtract
        </button>
        <button
          onClick={multiply}
          className="button"
          data-testid="multiply"
        >
          Multiply
        </button>
        <button onClick={divide} className="button" data-testid="divide">
          Divide
        </button>
        <button onClick={reset} className="button" data-testid="reset">
          Reset
        </button>
      </div>
    </div>
  );
}