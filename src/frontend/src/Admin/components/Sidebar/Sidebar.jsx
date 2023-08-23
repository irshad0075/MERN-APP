import React from "react";
import { NavLink } from "react-router-dom";
import navLinks from "../../assets/dummy-data/navLinks";
import { IconContext } from "react-icons";
import {
  RiTaxiLine,
  RiApps2Line,
  RiShoppingBagLine,
  RiSettings2Line,
  RiLogoutCircleRLine,
} from "react-icons/ri";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h2>
          <span>
            <RiTaxiLine />
          </span>{" "}
          Arshi Rovers
        </h2>
      </div>

      <div className="sidebar__content">
        <div className="menu">
          <ul className="nav__list">
            {navLinks.map((item, index) => (
              <li key={index} className="nav__item">
                <NavLink
                  to={item.path}
                  activeClassName="nav__active"
                  className="nav__link"
                >
                  <IconContext.Provider
                    value={{
                      className: "nav__icon",
                    }}
                  >
                    {item.icon === "ri-apps-2-line" && <RiApps2Line />}
                    {item.icon === "ri-shopping-bag-line" && <RiShoppingBagLine />}
                    {item.icon === "ri-settings-2-line" && <RiSettings2Line />}
                  </IconContext.Provider>
                  {item.display}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="sidebar__bottom">
          <span>
            <RiLogoutCircleRLine /> Logout
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
