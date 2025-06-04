import Nav from "./Nav";

const Header = () => {
  return (
    <header className="flex justify-evenly items-center p-4 bg-neutral-light shadow-md relative z-10">
      <p className="text-2xl font-medium">Research</p>
      <Nav />
    </header>
  );
};

export default Header;
