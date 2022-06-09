import { useState, useEffect } from "react";
import "./App.css";
const BadStopWatch = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount((v) => v + 0.1);
    }, 100);
  }, []);

  return <div>Bad Stopwatch: {count.toFixed(1)}</div>;
};

const GoodStopWatch = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((v) => v + 0.1);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return <div>Good Stopwatch: {count.toFixed(1)}</div>;
};

function App() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
      }}
    >
      <BadStopWatch />
      <GoodStopWatch />
    </div>
  );
}

export default App;
