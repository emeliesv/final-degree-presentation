import { NavLink } from "react-router";

const Nav = () => {
  return (
    <nav className="flex gap-2 mb-4 w-full justify-end p-3">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `font-montserrat font-medium text-lg px-4 py-2 border-2 border-brand transition-all duration-200 hover:bg-brand hover:text-neutral-light ${
            isActive
              ? "bg-brand text-neutral-light"
              : "bg-neutral-light text-brand"
          }`
        }
      >
        HEM
      </NavLink>
      <NavLink
        to="/metod"
        className={({ isActive }) =>
          `font-montserrat font-medium text-lg px-4 py-2 border-2 border-brand transition-all duration-200 hover:bg-brand hover:text-neutral-light ${
            isActive
              ? "bg-brand text-neutral-light"
              : "bg-neutral-light text-brand"
          }`
        }
      >
        METOD
      </NavLink>
    </nav>
  );
};

export default Nav;
