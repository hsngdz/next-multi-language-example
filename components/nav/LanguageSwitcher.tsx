import { useContext } from "react";
import LanguageContext from "../../store/LanguageContext";

const LanguageSwitcher = () => {
  const { userLanguage, changeUserLanguage } = useContext(LanguageContext);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = event.target.value;
    if (lang === "fa") {
      document.querySelector("body")!.dir = "rtl";
    } else {
      document.querySelector("body")!.dir = "ltr";
    }
    changeUserLanguage(lang);
  };

  return (
    <select className="text-black" onChange={handleChange}>
      <option value="en">English</option>
      <option value="fa">فارسی</option>
    </select>
  );
};

export default LanguageSwitcher;
