import React, { useState } from "react";

function Counter() {
    const [arr, setArr] = useState([])

    function addPlus() {
        setArr(prevArr => [...prevArr, "+"])
    }

    function addMinus() {
        setArr(prevArr => [...prevArr, "-"])
    }

  return (
    <>
      <button onClick={addMinus} className="">
        -
      </button>
      <button onClick={addPlus} className="">
        +
      </button>
      {arr.toString()}
    </>
  );
}

export default Counter;
