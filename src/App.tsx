import { useState } from "react";
import "./index.css";
import { Button } from "./components/atoms/button";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <Button onClick={handleClick}>Clickme ({count})</Button>
    </>
  );
}

export default App;
