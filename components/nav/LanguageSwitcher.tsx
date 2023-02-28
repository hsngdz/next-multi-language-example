import { useContext } from "react";
import LanguageContext from "../../store/LanguageContext";

const LanguageSwitcher = () => {
  const { changeUserLanguage } = useContext(LanguageContext);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    //Change HTML body direction based on the selected language
    const lang = event.target.value;
    if (lang === "fa") {
      document.querySelector("body")!.dir = "rtl";
    } else {
      document.querySelector("body")!.dir = "ltr";
    }

    changeUserLanguage(lang);
  };

  return (
    <select
      aria-label="Language Switcher"
      className="text-black"
      onChange={handleChange}
    >
      <option value="en">English</option>
      <option value="fa">فارسی</option>
    </select>
  );
};

export default LanguageSwitcher;
