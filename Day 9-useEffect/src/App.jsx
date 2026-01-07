import React, { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("");

  const increase = () => {
    setCount(count + 1);
  };

  useEffect(()=>{;
    console.log(title);
  },[title]);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Name"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <h1>{count}</h1>
      <button onClick={increase}>Increase</button>
    </div>
  );
};

export default App;
