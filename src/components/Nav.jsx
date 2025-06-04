import { NavLink } from "react-router";

const Nav = () => {
  return (
    <nav className="flex gap-2 mb-4 w-full justify-end p-3">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `font-montserrat font-medium text-lg px-4 py-2 border-2 border-brand transition-all duration-200 ${
            isActive
              ? "bg-brand text-white"
              : "bg-white text-brand hover:bg-gray-100"
          }`
        }
      >
        HEM
      </NavLink>
      <NavLink
        to="/metod"
        className={({ isActive }) =>
          `font-montserrat font-medium text-lg px-4 py-2 border-2 border-brand transition-all duration-200 ${
            isActive
              ? "bg-brand text-white"
              : "bg-white text-brand hover:bg-gray-100"
          }`
        }
      >
        METOD
      </NavLink>
      {/* <NavLink
        to="/"
        className={({ isActive }) =>
          `font-display font-medium text-2xl text-gray-900 hover: hover:border-2 ${
            isActive && "border-2"
          } p-2`
        }
      >
        HEM
      </NavLink>
      <NavLink
        to="/metod"
        className={({ isActive }) =>
          `font-display font-medium text-2xl text-gray-900 hover: hover:border-2 ${
            isActive && "border-2"
          } p-2`
        }
      >
        METOD
      </NavLink> */}
    </nav>
  );
};

export default Nav;
