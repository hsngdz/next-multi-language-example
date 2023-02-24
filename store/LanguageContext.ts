import { createContext } from "react";

const LanguageContext = createContext({
  userLanguage: "",
  changeUserLanguage: (value: string) => {},
});

export default LanguageContext;
