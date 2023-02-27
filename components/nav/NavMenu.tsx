import { useContext, useState } from "react";
import Link from "next/link";
import LanguageContext from "../../store/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import english from "../../db/en.json";
import persian from "../../db/fa.json";

const NavMenu = () => {
  const { userLanguage } = useContext(LanguageContext);
  const [mobileMenuToggle, setMobileMenuToggle] = useState<"open" | "close">(
    "close"
  );
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

  const handleMenuButton = () => {
    if (mobileMenuToggle === "close") {
      setMobileMenuToggle("open");
    } else {
      setMobileMenuToggle("close");
    }
  };

  const handleCloseMenu = () => {
    setMobileMenuToggle("close");
  };

  return (
    <>
      <nav
        id="navbar"
        className="flex w-full px-4 justify-between text-white"
        onBlur={handleCloseMenu}
      >
        <button type="button" className="py-4 pr-4" onClick={handleMenuButton}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-8 w-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <ul className="hidden items-center py-4 grow sm:flex">
          {renderMenuItems}
        </ul>
        <div className="flex py-4">
          <LanguageSwitcher />
        </div>
      </nav>
      <nav
        id="sidebar"
        className={`${
          mobileMenuToggle === "open" ? "translate-x-0" : "translate-x-full"
        } flex flex-col fixed right-0 bottom-0 top-16 w-64 space-y-6 py-6 px-4 bg-[#3b50b4] text-white transition duration-300 ease-in-out`}
      >
        <ul>{renderMenuItems}</ul>
      </nav>
    </>
  );
};

export default NavMenu;
