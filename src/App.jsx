import { createContext } from "react";
import Login from "./components/Login";
import { useState } from "react";

export const LanguageContext = createContext({
  language: null,
  setLanguage: () => {},
});

const App = () => {
  const [language, setLanguage] = useState("id");
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <div>
        <Login />
      </div>
    </LanguageContext.Provider>
  );
};

export default App;
