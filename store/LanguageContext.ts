import { createContext } from "react";

const LanguageContext = createContext({
  userLanguage: "en",
  changeUserLanguage: (value: string) => {},
});

export default LanguageContext;
