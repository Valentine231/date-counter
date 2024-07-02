import React, { useState } from 'react';
import './index.css';

const App = () => {
  return (
    <div>
      <Counter />
    </div>
  );
};

const Counter = () => {
  // const [count, setcount] = useState(0);
  // const [step, setstep] = useState(1);
  const [range, setrange] = useState(0);
  const [current, setcurrent] = useState(1);

  const handlereset = () => {
    setcurrent(0);
    setrange(0);
  };

  const date = new Date('june 21 2028');
  date.setDate(date.getDate() + range);
  return (
    <div className="play">
      <div>
        <button onClick={() => setcurrent((c) => c - 1)}>-</button>
        <span>step:{current}</span>
        <input
          type="range"
          min="1"
          max="10"
          value={current}
          onChange={(e) => setcurrent(Number(e.target.value))}
        />
        <button onClick={() => setcurrent((c) => c + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setrange((c) => c - current)}>-</button>
        {/* <span>count:{count}</span> */}
        <input
          type="number"
          value={range}
          onChange={(e) => setrange(Number(e.target.value))}
        />
        <button onClick={() => setrange((c) => c + current)}>+</button>
      </div>
      <p>
        <span>
          {range === 0
            ? 'Today is'
            : 'count > 0'
            ? `${range} days from today is`
            : `${Math.abs(range)}days ago was`}
        </span>
        {date.toDateString()}
      </p>
      {range !== 0 || current !== 1 ? (
        <div>
          <button onClick={handlereset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
};
export default App;
