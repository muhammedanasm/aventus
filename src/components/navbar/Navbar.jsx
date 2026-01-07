import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ navItems }) => {
  const location = useLocation();

  return (
    <nav className="navbar-main ">
      <div className="navbar-container">
        {/* logo section */}
        <Link to="/" className="logo-container group">
          <h1 className="logo-text">
            AVENTUS<span className="text-gray-400">APP</span>
          </h1>
        </Link>

        {/* link section */}
        <div className="flex gap-10">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${
                location.pathname === item.path ? "active" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <button className="bg-[var(--primary-color)] text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg shadow-blue-100 hover:opacity-90 transition-all">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
