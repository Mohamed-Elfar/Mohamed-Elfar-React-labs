import { useState } from "react";

function CounterFun(props) {
  const [count, setCount] = useState(props.count);

  function handleIncrease() {
    setCount(count + 1);
  }
  function handleDecreas() {
    setCount(count - 1);
  }
  console.log(count);

  return (
    <div className="container">
      <h1>Counter From Functioass</h1>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>{" "}
      <button onClick={handleDecreas}>Decrease</button>
    </div>
  );
}

export default CounterFun;
