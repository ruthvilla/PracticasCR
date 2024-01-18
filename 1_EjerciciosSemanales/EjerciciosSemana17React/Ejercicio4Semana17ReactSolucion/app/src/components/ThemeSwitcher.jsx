import { useContext } from "react";
import { TemaContext } from "../contexts/TemaContext";

const ThemeSwitcher = () => {
  const { cambiarTema } = useContext(TemaContext);
  return <button onClick={cambiarTema}>🌙</button>;
};

export default ThemeSwitcher;
