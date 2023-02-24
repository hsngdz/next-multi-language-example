import { useState } from "react";
import LanguageContext from "../store/LanguageContext";

type Props = {
  children: React.ReactNode;
};

const LanguageProvider = ({ children }: Props) => {
  const [userLanguage, setUserLanguage] = useState("en");
  const provider = {
    userLanguage,
    changeUserLanguage: (selected: string) => {
      setUserLanguage(selected);
    },
  };
  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
