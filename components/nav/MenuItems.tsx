import { useContext } from "react";
import Link from "next/link";
import LanguageContext from "../../store/LanguageContext";
import english from "../../db/en.json";
import persian from "../../db/fa.json";

const MenuItems = ({ navMenu }: { navMenu?: boolean }) => {
  const { userLanguage } = useContext(LanguageContext);

  //Render menu items conditionally based on the selected language
  const renderMenuItems =
    userLanguage == "en"
      ? english.navMenu.map((item) => {
          return (
            <li key={item.id} className="mr-5 uppercase">
              <Link href={item.link}>{item.name}</Link>
            </li>
          );
        })
      : userLanguage == "fa"
      ? persian.navMenu.map((item) => {
          return (
            <li key={item.id} className="mr-5 uppercase">
              <Link href={item.link}>{item.name}</Link>
            </li>
          );
        })
      : "<li>Error!</li>";
  return (
    <ul
      className={
        navMenu ? "hidden items-center py-4 pl-4 grow sm:flex" : "sidemenu"
      }
    >
      {renderMenuItems}
    </ul>
  );
};

export default MenuItems;
