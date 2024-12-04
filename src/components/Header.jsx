import React from "react";
import Wrapper from "./wrapper";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";
const Header = () => {
  return (
    <header>
      <Wrapper>
        <div className="appHeader">
          <div className="headerLeft">
            <Link to="/">
              <img src={logo} alt="" width={85} />
            </Link>
            <Link to='/favorates'>Favorates</Link>
          </div>
          <SearchBox />
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
