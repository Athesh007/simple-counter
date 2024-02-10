import { useState } from "react";
import "./style.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <>
      <h1>Simple Counter</h1>
      <div className="container">
        <h1 className="number"> {count} </h1>
      </div>

      <div className="btn-container">
        <button onClick={() => increment()} className="increment">
          +
        </button>
        <button onClick={() => decrement()} className="decrement">
          -
        </button>
        <button onClick={() => reset()} className="reset">
          reset
        </button>
      </div>
    </>
  );
};

export default Counter;
