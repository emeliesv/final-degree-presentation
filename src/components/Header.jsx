import Nav from "./Nav";

const Header = () => {
  return (
    <header className="flex justify-evenly items-center p-4 bg-neutral-light shadow-md relative z-10">
      <img
        src="/Images/Logo.png"
        alt="Emelie Svensson round logo"
        className="w-28 md:w-32"
      />
      <Nav />
    </header>
  );
};

export default Header;
