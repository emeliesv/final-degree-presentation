import Nav from "./Nav";

const Header = () => {
  return (
    <header className="flex justify-evenly items-center p-4 bg-neutral-light shadow-md relative z-10">
      <img
        src="/Images/Logo.webp"
        alt="Emelie Svensson round logo"
        className="w-28 md:w-32"
        width="112"
        height="128"
        loading="eager"
      />
      <Nav />
    </header>
  );
};

export default Header;
