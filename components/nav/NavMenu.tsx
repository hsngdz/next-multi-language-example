import { useContext } from "react";
import Link from "next/link";
import SidenavMenu from "./SidenavMenu";
import LanguageContext from "../../store/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import english from "../../db/en.json";
import persian from "../../db/fa.json";

const NavMenu = () => {
  const { userLanguage } = useContext(LanguageContext);
  const renderMenuItems =
    userLanguage == "en"
      ? english.navMenu.map((item, index) => {
          return (
            <li key={index} className="mr-5 uppercase">
              <Link href={item.link}>{item.name}</Link>
            </li>
          );
        })
      : userLanguage == "fa"
      ? persian.navMenu.map((item, index) => {
          return (
            <li key={index} className="mr-5 uppercase">
              <Link href={item.link}>{item.name}</Link>
            </li>
          );
        })
      : "Error!";
  return (
    <nav className="flex items-center mx-4 w-full h-16 text-white ">
      <button className="inline-flex mr-6 mb-1">
        <svg
          className="w-7 h-7 fill-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
        </svg>
      </button>
      <ul className="hidden md:inline-flex">{renderMenuItems}</ul>
      <div className="flex-1 text-right rtl:text-left">
        <LanguageSwitcher />
      </div>
    </nav>
  );
};

export default NavMenu;
