import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  useEffect(() => {
    document.title = `El contador tiene un valor de ${counter}`;
  }, [counter]);

  return (
    <>
      <h1>{counter}</h1>

      <button onClick={incrementCounter}>Incrementar</button>
      <button onClick={decreaseCounter}>Disminuir</button>
    </>
  );
}

export default App;
