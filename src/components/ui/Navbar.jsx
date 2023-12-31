import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { navigationMenu } from "../../services/data";
import { sharedImages } from "../../assets";

const Navbar = () => {
  const [navMenu, setNavMenu] = useState(false);
  return (
    <StyledNavbar type={navMenu.toString()}>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={sharedImages.logo} alt="logo" />
          </Link>
          <div className="nav-toggle" onClick={() => setNavMenu(true)}>
            {!navMenu && (
              <img src={sharedImages.hamburgerIcon} alt="nav open" />
            )}
          </div>
        </div>
        <div className="line"></div>
        <div className="menu">
          <div className="close-nav" onClick={() => setNavMenu(false)}>
            <img src={sharedImages.closeIcon} alt="nav close" />
          </div>
          <ul className="menu-items">
            {navigationMenu.map(({ id, title, url }) => {
              return (
                <NavLink
                  to={url}
                  key={id}
                  className="item"
                  onClick={() => setNavMenu(false)}
                >
                  <span>0{id} </span>
                  <h4>{title}</h4>
                </NavLink>
              );
            })}
          </ul>
        </div>
      </nav>
      <div className="overlay" onClick={() => setNavMenu(false)}></div>
    </StyledNavbar>
  );
};
export default Navbar;

/******************* styled component *****************/
/******************* styled component *****************/

const StyledNavbar = styled.section`
  text-transform: uppercase;
  font-family: "Barlow-condensed", sans-serif;
  background: none;
  position: absolute;
  width: 100%;
  z-index: 1;
  top: 0;

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
  }

  .line {
    display: none;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    justify-content: space-between;
  }

  .nav-toggle {
    cursor: pointer;
  }

  .menu {
    width: 70%;
    min-height: 100vh;
    position: absolute;
    z-index: 10;
    right: 0;
    top: 0;
    background-color: var(--Dark-Blue);
    text-align: left;
    padding: 2rem;
    transition: var(--transition);
    transform: ${(props) =>
      props.type === "true" ? "translateX(0)" : "translateX(100%)"};
    overflow: hidden;

    span {
      margin-right: 0.75rem;
      font-weight: 700;
      color: var(--White);
    }
  }

  .overlay {
    display: ${(props) => (props.type === "true" ? "block" : "none")};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 5;
  }

  .close-nav {
    text-align: right;
    margin-bottom: 5rem;
    cursor: pointer;
  }

  .menu-items {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1rem;
    list-style-type: none;
    gap: 2rem;
    letter-spacing: 0.15rem;
  }

  .item {
    display: flex;
    color: rgb(255, 255, 255, 0.8);
    font-size: 1rem;
    font-weight: 300;
    width: fit-content;
    padding: 0.5rem 0;
  }

  .active {
    color: var(--White);
    font-weight: 700;
    border-bottom: 3px solid var(--White);
  }

  @media (min-width: 55rem) {
    .navbar {
      padding: 0;
      padding-left: 2rem;
      margin: 0 auto;
      align-items: center;
    }

    .menu {
      position: static;
      width: auto;
      transform: translateX(0);
      background-color: transparent;
      padding: 0;
      min-height: auto;
      width: auto;
    }

    .menu-items {
      padding: 0 2rem;
      flex-direction: row;
      background-color: var(--bg-primary);

      span {
        display: none;
      }
    }

    .item {
      display: flex;
      padding: 2.5rem 0;

      h4 {
        color: var(--White);
        font-size: 1rem;
        font-weight: 300;
      }
    }

    .logo {
      width: auto;
    }

    .nav-toggle {
      display: none;
    }

    .overlay {
      display: none;
    }

    .close-nav {
      display: none;
    }
  }
  @media (min-width: 75rem) {
    .navbar {
      padding-left: 8rem;
    }
    .menu {
      width: 80%;
    }

    .line {
      display: block;
      width: 35%;
      height: 1px;
      margin: 0 2rem;
      background-color: var(--Grayish-Blue);
    }

    .item {
      span {
        color: var(--White);
        display: block;
      }
    }
  }

  @media (min-width: 95rem) {
    .navbar {
      padding-left: 15rem;
    }

    .line {
      width: 60%;
    }
  }
`;
