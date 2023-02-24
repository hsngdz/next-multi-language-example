import { ReactEventHandler, useContext } from "react";
import LanguageContext from "../../store/LanguageContext";

const LanguageSwitcher = () => {
  const { userLanguage, changeUserLanguage } = useContext(LanguageContext);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    changeUserLanguage(event.target.value);
  };

  return (
    <select className="text-black" onChange={handleChange}>
      <option value="en">English</option>
      <option value="fa">فارسی</option>
    </select>
  );
};

export default LanguageSwitcher;
