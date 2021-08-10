import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import MessageIcon from "@material-ui/icons/Message";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { Avatar } from "@material-ui/core";
import "./css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
          className="navbar__logo"
          style={{ cursor: "pointer" }}
        />

        <div className="navbar__search-container">
          <SearchIcon className="search-icon"/>
          <input type="text" placeholder="Search" className="search__input" />
        </div>

        <div className="navbar__right">
          <HomeIcon className="nav-icon" />
          <MessageIcon className="nav-icon" />
          <ExploreOutlinedIcon className="nav-icon" />
          <FavoriteBorderIcon className="nav-icon" />
          <Avatar className="nav-avtar" src='https://i.pinimg.com/originals/ff/39/52/ff39528890d0b19aa9807a20606d2fca.jpg' />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
