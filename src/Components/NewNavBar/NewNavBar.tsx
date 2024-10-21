import "./NewNavBar.css";

import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { NavItem } from "./NavBarInfo";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
export const NewNavBar = (props: { theArr: NavItem[] }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleIsExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      handleIsExpanded();
    }
  };

  const closeMobileMenu = () => setIsExpanded(false);

  return (
    <div>
      <IconContext.Provider value={{ color: "rgba(145, 255, 157, 0.685)" }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              HOME
            </Link>

            {/* Mobile menu icon */}
            <div
              className="menu-icon"
              onClick={handleIsExpanded}
              onKeyDown={handleKeyDown}
              tabIndex={0}
              role="button"
              aria-label="Toggle navigation"
            >
              {isExpanded ? <FaTimes /> : <FaBars />}
            </div>

            {/* Navigation links */}
            <ul className={isExpanded ? "nav-menu active" : "nav-menu"}>
              {props.theArr.map((curr) => (
                <li key={`${curr.key}_${curr.hrefStr}`} className="nav-item">
                  <NavLink
                    to={curr.hrefStr}
                    className={({ isActive }) =>
                      "nav-links" + (isActive ? " activated" : "")
                    }
                    onClick={closeMobileMenu}
                  >
                    {curr.displayStr}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </div>
  );
};
