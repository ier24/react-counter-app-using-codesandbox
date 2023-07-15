import { MouseEventHandler, useState } from "react";
import Counter from "./components/Counter/Counter";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>カウントしよう！！！！！</h1>
      <Counter count={count} onClick={handleClick} />
    </div>
  );
}
