import { useState } from "react";
import MenuItems from "./MenuItems";
import LanguageSwitcher from "./LanguageSwitcher";

const NavMenu = () => {
  const [mobileMenuToggle, setMobileMenuToggle] = useState<"open" | "close">(
    "close"
  );

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
        aria-label="navbar"
        className="flex w-full px-4 justify-between text-white"
        onBlur={handleCloseMenu}
      >
        <button
          type="button"
          aria-label="Side Menu"
          className="py-4"
          onClick={handleMenuButton}
        >
          {mobileMenuToggle === "close" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-8 w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-8 w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
        <MenuItems navMenu={true} />
        <div className="flex py-4">
          <LanguageSwitcher />
        </div>
      </nav>
      <nav
        aria-label="sidemenu"
        className={`${
          mobileMenuToggle === "open" ? "translate-x-0" : "translate-x-full"
        } flex flex-col fixed right-0 bottom-0 top-16 w-64 space-y-6 py-6 px-4 bg-[#3b50b4] text-white transition duration-300 ease-in-out`}
      >
        <MenuItems />
      </nav>
    </>
  );
};

export default NavMenu;
