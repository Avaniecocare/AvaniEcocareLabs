import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CgMenu, CgCloseR } from "react-icons/cg";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/service", label: "Services" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <Nav>
      <div className={openMenu ? "menuIcon active" : "menuIcon"}>
        <ul className="navbar-list">
          {navItems.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "navbar-link active-link" : "navbar-link"
                }
                onClick={() => setOpenMenu(false)}
                to={to}
                end={to === "/"}
              >
                <span className="link-text">{label}</span>
                <span className="link-underline" />
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon menu-icon"
            onClick={() => setOpenMenu(true)}
          />
          <CgCloseR
            name="close-outline"
            className="close-outline mobile-nav-icon"
            onClick={() => setOpenMenu(false)}
          />
        </div>
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  .navbar-list {
    display: flex;
    gap: 0.5rem;
    align-items: center;

    li {
      list-style: none;

      .navbar-link {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        font-size: 1.4rem;
        font-family: 'Inter', sans-serif;
        font-weight: 500;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.75);
        padding: 0.6rem 1.4rem;
        border-radius: 6px;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
        overflow: hidden;

        .link-underline {
          position: absolute;
          bottom: 4px;
          left: 50%;
          transform: translateX(-50%);
          width: 0%;
          height: 2.5px;
          background: linear-gradient(90deg, #c9a84c, #e8c87a);
          border-radius: 2px;
          box-shadow: 0 0 8px rgba(232, 200, 122, 0.7);
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        &:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.05);
        }

        &:hover .link-underline {
          width: 60%;
        }

        &.active-link {
          color: #e8c87a;
          text-shadow: 0 0 8px rgba(232, 200, 122, 0.35);

          .link-underline {
            width: 60%;
          }
        }
      }
    }
  }

  .mobile-navbar-btn {
    display: none;

    .close-outline {
      display: none;
    }
  }

  @media (max-width: 768px) {
    .mobile-navbar-btn {
      display: inline-flex;
      z-index: 999;

      .mobile-nav-icon {
        font-size: 3.2rem;
        color: rgba(255, 255, 255, 0.9);
        cursor: pointer;
        transition: color 0.2s;

        &:hover {
          color: #e8c87a;
        }
      }
    }

    .navbar-list {
      width: 100vw;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      background: linear-gradient(160deg, #071820 0%, #0d2a30 60%, #1a3a42 100%);
      display: flex;
      justify-content: center;
      align-content: center;
      flex-direction: column;
      text-align: center;
      gap: 1rem;

      transform: translateX(100%);
      visibility: hidden;
      opacity: 0;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

      li {
        .navbar-link {
          font-size: 2.8rem;
          color: rgba(255, 255, 255, 0.8);
          padding: 1.2rem 3rem;
          font-weight: 600;
          letter-spacing: 0.15em;

          &:hover, &.active-link {
            color: #e8c87a;
          }
        }
      }
    }

    .active .mobile-nav-icon.menu-icon {
      display: none;
    }

    .active .close-outline {
      display: inline-block;
      position: fixed;
      top: 2.5rem;
      right: 2rem;
      color: #e8c87a !important;
      z-index: 9999;
    }

    .active .navbar-list {
      visibility: visible;
      opacity: 1;
      transform: translateX(0);
      z-index: 999;
    }
  }
`;

export default Navbar;
