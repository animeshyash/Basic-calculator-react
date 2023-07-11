import React, { useState } from "react";

export const Calculator = () => {
  var [res, setRes] = useState("0");

  function solveHandler() {
    if (res) {
      if (res.includes("+")) {
        let arr = res.split("+");
        let temp = Number(arr[0]);
        for (let i = 1; i < arr.length; i++) {
          temp += Number(arr[i]);
        }
        setRes(temp);
      } else if (res.includes("-")) {
        let arr = res.split("-");
        let temp = Number(arr[0]);
        for (let i = 1; i < arr.length; i++) {
          temp -= Number(arr[i]);
        }
        setRes(temp);
      } else if (res.includes("x")) {
        let arr = res.split("x");
        let temp = Number(arr[0]);
        for (let i = 1; i < arr.length; i++) {
          temp *= Number(arr[i]);
        }
        setRes(temp);
      } else if (res.includes("/")) {
        let arr = res.split("/");
        let temp = Number(arr[0]);
        for (let i = 1; i < arr.length; i++) {
          temp /= Number(arr[i]);
        }
        temp = temp.toFixed(2);
        setRes(temp);
      }
    }
  }

  return (
    // Boundary of Calculator
    <div className="border-8 border-rose-500 rounded-3xl h-[700px] w-[700px] flex flex-col justify-center select-none mt-10">
      {/* Screen Area */}
      <div className="border-4 border-cyan-600 rounded-lg h-[100px] mt-3 ml-2 mr-2 font-semibold text-7xl flex items-center">
        <div className="ml-1 mx-auto">{res}</div>
      </div>

      {/* Keypad Area */}
      <div className="border-4 border-cyan-600 rounded-lg mt-3 ml-2 mr-2 h-[540px] mb-4 flex justify-evenly flex-wrap items-center">
        {/* 1st Row */}
        <div
          className="border-4 border-green-600 rounded-lg h-[70px] w-[131px]
         mt-2 font-semibold text-[50px] flex items-center justify-center hover:bg-gray-900 hover:text-white"
          onClick={() => {
            if (res === "0") {
              setRes("7");
            } else {
              res += "7";
              setRes(res);
            }
          }}
        >
          7
        </div>
        <div
          className="border-4 border-green-600 rounded-lg h-[70px] w-[131px] 
        mt-2 ml-2 font-semibold text-[50px] flex items-center justify-center hover:bg-gray-900 hover:text-white"
          onClick={() => {
            if (res === "0") {
              setRes("8");
            } else {
              res += "8";
              setRes(res);
            }
          }}
        >
          8
        </div>
        <div
          className="border-4 border-green-600 rounded-lg h-[70px] w-[131px] 
        mt-2 ml-2 font-semibold text-[50px] flex items-center justify-center hover:bg-gray-900 hover:text-white"
          onClick={() => {
            if (res === "0") {
              setRes("9");
            } else {
              res += "9";
              setRes(res);
            }
          }}
        >
          9
        </div>
        <div
          className="border-4 border-green-600 rounded-lg h-[70px] w-[131px] 
        mt-2 ml-2 font-semibold text-[50px] flex items-center justify-center hover:bg-gray-900 hover:text-white"
          onClick={() => setRes("0")}
        >
          CLR
        </div>

        {/* 2nd Row */}
        <div
          className="border-4 border-green-600 rounded-lg h-[70px] w-[131px] 
        mt-2 font-semibold text-[50px] flex items-center justify-center hover:bg-gray-900 hover:text-white"
          onClick={() => {
            if (res === "0") {
              setRes("4");
            } else {
              res += "4";
              setRes(res);
            }
          }}
        >
          4
        </div>
        <div
          className="border-4 border-green-600 rounded-lg h-[70px] w-[131px] 
        mt-2 ml-2 font-semibold text-[50px] flex items-center justify-center hover:bg-gray-900 hover:text-white"
          onClick={() => {
            if (res === "0") {
              setRes("5");
            } else {
              res += "5";
              setRes(res);
            }
          }}
        >
          5
        </div>
        <div
          className="border-4 border-green-600 rounded-lg h-[70px] w-[131px] 
        mt-2 ml-2 font-semibold text-[50px] flex items-center justify-center hover:bg-gray-900 hover:text-white"
          onClick={() => {
            if (res === "0") {
              setRes("6");
            } else {
              res += "6";
              setRes(res);
            }
          }}
        >
          6
        </div>
        <div
          className="border-4 border-green-600 rounded-lg h-[70px] w-[131px] 
        mt-2 ml-2 font-semibold text-[50px] flex items-center justify-center hover:bg-gray-900 hover:text-white"
          onClick={() => {
            if (res === "0") {
              setRes("/");
            } else {
              res += "/";
              setRes(res);
            }
          }}
        >
          /
        </div>

        {/* 3rd Row */}
        <div
          className="border-4 border-green-600 rounded-lg h-[70px] w-[131px] 
        mt-2 font-semibold text-[50px] flex items-center justify-center hover:bg-gray-900 hover:text-white"
          onClick={() => {
            if (res === "0") {
              setRes("1");
            } else {
              res += "1";
              setRes(res);
            }
          }}
        >
          1
        </div>
        <div
          className="border-4 border-green-600 rounded-lg h-[70px] w-[131px] 
        mt-2 ml-2 font-semibold text-[50px] flex items-center justify-center hover:bg-gray-900 hover:text-white"
          onClick={() => {
            if (res === "0") {
              setRes("2");
            } else {
              res += "2";
              setRes(res);
            }
          }}
        >
          2
        </div>
        <div
          className="border-4 border-green-600 rounded-lg h-[70px] w-[131px] 
        mt-2 ml-2 font-semibold text-[50px] flex items-center justify-center hover:bg-gray-900 hover:text-white"
          onClick={() => {
            if (res === "0") {
              setRes("3");
            } else {
              res += "3";
              setRes(res);
            }
          }}
        >
          3
        </div>
        <div
          className="border-4 border-green-600 rounded-lg h-[70px] w-[131px] 
        mt-2 ml-2 font-semibold text-[50px] flex items-center justify-center hover:bg-gray-900 hover:text-white"
          onClick={() => {
            if (res === "0") {
              setRes("x");
            } else {
              res += "x";
              setRes(res);
            }
          }}
        >
          X
        </div>

        {/* 4th Row */}
        <div
          className="border-4 border-green-600 rounded-lg h-[70px] w-[131px] 
        mt-2 font-semibold text-[50px] flex items-center justify-center hover:bg-gray-900 hover:text-white"
          onClick={() => {
            if (res === "0") {
              setRes("0");
            } else {
              res += "0";
              setRes(res);
            }
          }}
        >
          0
        </div>
        <div
          className="border-4 border-green-600 rounded-lg h-[70px] w-[131px] 
        mt-2 ml-2 font-semibold text-[50px] flex items-center justify-center hover:bg-gray-900 hover:text-white"
          onClick={solveHandler}
        >
          <div className="mb-3"> = </div>
        </div>
        <div
          className="border-4 border-green-600 rounded-lg h-[70px] w-[131px] 
        mt-2 ml-2 font-semibold text-[100px] flex items-center justify-center hover:bg-gray-900 hover:text-white"
          onClick={() => {
            if (res === "0") {
              setRes("-");
            } else {
              res += "-";
              setRes(res);
            }
          }}
        >
          <div className="mb-5"> - </div>
        </div>
        <div
          className="border-4 border-green-600 rounded-lg h-[70px] w-[131px] 
        mt-2 ml-2 font-semibold text-[50px] flex items-center justify-center hover:bg-gray-900 hover:text-white"
          onClick={() => {
            if (res === "0") {
              setRes("+");
            } else {
              res += "+";
              setRes(res);
            }
          }}
        >
          <div className="mb-3"> + </div>
        </div>
      </div>
    </div>
  );
};
