import React from "react";
import { useState } from "react";
import logo from "../../assets/images/logo.webp";
import userImage from "../../assets/images/userImage.webp";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { MdMenuOpen } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { MdLightMode } from "react-icons/md";
import { GoGlobe } from "react-icons/go";
import { MdShoppingCart } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";
import { FaSortDown } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { RiShieldKeyholeFill } from "react-icons/ri";
import { FaUnlockAlt } from "react-icons/fa";
import SearchBox from "../SearchBox/SearchBox";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { Avatar } from "@mui/material";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <header className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row d-flex align-items-center w-100">
            {/* Logo Wrapper  */}
            <div className="col-sm-2 d-flex align-items-center part1">
              <Link to={"/"} className="d-flex align-items-center logo">
                <img src={logo} alt="" />
                <span>HOTASH</span>
              </Link>
            </div>

            {/* Collaps and Search Bar */}
            <div className="col-sm-7 d-flex align-items-center part2">
              <Button className="rounded-circle me-3">
                <MdMenuOpen className="nav-icon" />
                {/* <IoMdMenu className="nav-icon" /> */}
              </Button>
              <SearchBox className="searchBox" />
            </div>
            {/* Collaps and Search Bar */}
            <div className="col-sm-3 d-flex align-items-center justify-content-end part3">
              <Button className="rounded-circle me-3">
                <MdLightMode className="nav-icon" />
              </Button>
              <Button className="rounded-circle me-3">
                <GoGlobe className="nav-icon" />
              </Button>
              <Button className="rounded-circle me-3">
                <MdShoppingCart className="nav-icon" />
              </Button>
              <Button className="rounded-circle me-3">
                <IoMdMail className="nav-icon" />
              </Button>
              <Button className="rounded-circle me-3">
                <IoNotifications className="nav-icon" />
              </Button>

              <div className="myAccWrapper d-flex align-items-center">
                <Button
                  className="myAcc d-flex align-items-center align-self-center text-start p-0"
                  onClick={handleClick}
                >
                  <div className="userImage">
                    <span className="rounded-circle">
                      <img src={userImage} alt="User Image" />
                    </span>
                  </div>
                  <div className="userDetails w-100 d-flex align-items-start">
                    <div className="userName d-flex flex-wrap">
                      <h4>Apple Mahmud</h4>
                      <span>@syed_easin</span>
                    </div>
                    <FaSortDown className="headerToggle" />
                  </div>
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <MenuItem onClick={handleClose}>
                    <FaUser className="menu-icon me-2" /> My Account
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <RiShieldKeyholeFill className="menu-icon me-2" /> Recent
                    Password
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <FaUnlockAlt className="menu-icon me-2" /> Logout
                  </MenuItem>
                </Menu>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
