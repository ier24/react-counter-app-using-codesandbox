import { MouseEventHandler } from "react";

type CounterProps = {
  count: number;
  onClick: MouseEventHandler;
};

export default function Counter({ count, onClick }: CounterProps) {
  return <button onClick={onClick}>Clicked {count} times!</button>;
}
