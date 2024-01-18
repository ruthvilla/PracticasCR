import useContador from "./hooks/useContador";

function App() {
  const { counter, incrementCounter, decreaseCounter } = useContador(0);

  return (
    <>
      <h1>{counter}</h1>

      <button onClick={incrementCounter}>Incrementar</button>
      <button onClick={decreaseCounter}>Disminuir</button>
    </>
  );
}

export default App;
