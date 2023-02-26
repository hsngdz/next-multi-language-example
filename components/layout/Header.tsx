import NavMenu from "../nav/NavMenu";

const Header = () => {
  return (
    <header className="flex shadow-lg bg-[#3b50b4] rtl:flex-row-reverse">
      <NavMenu />
    </header>
  );
};

export default Header;
