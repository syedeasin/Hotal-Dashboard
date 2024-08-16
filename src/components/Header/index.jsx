import React from "react";
import logo from "../../assets/images/logo.webp";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { MdMenuOpen } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import SearchBox from "../SearchBox/SearchBox";

const Header = () => {
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
            <div className="col-sm-3 d-flex align-items-center part3">
              <Button variant="contained">
                <MdMenuOpen />
                <IoMdMenu />
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
