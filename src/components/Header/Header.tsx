import { Link } from "react-router-dom";
import Hamburger from "../../icons/Hamburger";

import "./header.css";
import Ellipsis from "../../icons/Ellipsis";
import SearchIcon from "../../icons/Search";
import ChevronRight from "../../icons/ChevronRight";
import Avatar from "../../icons/Avatar";
import Notification from "../../icons/Notification";
import Cancel from "../../icons/Cancel";

const Header = () => {
  return (
    <div className="navbar">
      <div className="topLeft">
        <div className="logo">
          <Link to="/">
            <div className="navIcon">
              <Hamburger />
            </div>
            <span className="logoName">Constructor</span>
          </Link>
        </div>
      </div>
      <div className="topCenter">
        <div className="navLinks">
          <Link to="/">Dashboard</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">News</Link>
          <Link to="/contact">User Policy</Link>
          <Link to="/contact">Contacts</Link>
          <Ellipsis />
        </div>
        <div className="searchInputWrapper">
          <div className="searchInput">
            <SearchIcon />
            <input type="text" placeholder="Search" />
          </div>
          <ChevronRight />
        </div>
      </div>
      <div className="topRight">
        <div className="avatarAndUsername">
          <Avatar />
          <span className="username">Clayton Santos</span>
        </div>
        <div className="navIcon">
          <span className="online"></span>
          <Notification />
        </div>
        <div className="navIcon">
          <Cancel />
        </div>
      </div>
    </div>
  );
};

export default Header;
