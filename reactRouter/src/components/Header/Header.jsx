import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const navLinkClass = ({ isActive }) =>
    `block py-2 px-3 transition-colors duration-300 ${
      isActive
        ? "text-[#A47148] dark:text-[#D6A477] font-semibold"
        : "text-[#4B3621] dark:text-[#E5D5C5]"
    } hover:text-[#A47148] dark:hover:text-[#D6A477]`;

  return (
    <header className="sticky top-0 z-50 shadow-md">
      <nav className="bg-[#FFF9F0] dark:bg-[#302820] border-b border-[#E8DCCB] dark:border-[#4A3B30] px-4 lg:px-6 py-4 transition-colors duration-300">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-[#4B3621] dark:text-[#FFF9F0] transition-colors duration-300">
              Brewed{" "}
              <span className="text-[#A47148] dark:text-[#D6A477]">&</span> Co.
            </span>
          </Link>

          {/* Navigation */}
          <div className="flex items-center">
            <ul className="flex flex-row gap-5 font-medium">
              <li>
                <NavLink to="/" end className={navLinkClass}>
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/about" className={navLinkClass}>
                  About
                </NavLink>
              </li>

              <li>
                <NavLink to="/menu" className={navLinkClass}>
                  Menu
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Theme Toggle */}

          {/* Order Button */}
          <Link
            to="/menu"
            className="text-[#FFF9F0] bg-[#6F4E37] dark:bg-[#A47148] hover:bg-[#4B3621] dark:hover:bg-[#BC895B] font-medium rounded-lg text-sm px-5 py-2.5 transition-colors duration-300"
          >
            Order Now
          </Link>
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            className="flex h-11 w-11 items-center justify-center rounded-full
    bg-[#F1E4D1] text-[#6F4E37]
    dark:bg-[#514033] dark:text-[#FFF9F0]
    transition-all duration-300 hover:scale-110
    focus:outline-none focus:ring-2 focus:ring-[#A47148]"
          >
            {theme === "light" ? (
              // Milk bottle label - Light mode
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-7 w-7"
              >
                <path d="M18 13h28v44H18z" />
                <path d="M18 13h28l-5-7H23l-5 7Z" />
                <path d="M23 27c5-7 13-7 18 0-5 7-13 7-18 0Z" />
                <path d="M25 41h14M25 48h14" />
              </svg>
            ) : (
              // Bold coffee bean - Dark mode
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                fill="currentColor"
                className="h-7 w-7"
              >
                <path d="M32 5C17 5 7 19 9 34c2 16 13 25 25 25s22-13 21-28C54 15 44 5 32 5Z" />
                <path
                  d="M42 10C40 20 34 26 28 32c-6 6-9 12-9 21"
                  fill="none"
                  stroke="#514033"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
