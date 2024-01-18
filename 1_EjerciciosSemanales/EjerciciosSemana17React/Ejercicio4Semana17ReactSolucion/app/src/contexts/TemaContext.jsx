import { createContext, useState } from "react";

export const TemaContext = createContext();
export const TemaContextProvider = ({ children }) => {
  const [tema, setTema] = useState("light");
  const cambiarTema = () => {
    setTema(tema === "light" ? "dark" : "light");
  };

  return (
    <TemaContext.Provider value={{ tema, cambiarTema }}>
      {children}
    </TemaContext.Provider>
  );
};
