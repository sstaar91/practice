import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  return (
    <nav className="nav">
      <Link className="logo" to="/">
        Wecode
      </Link>
      <div className="search">
        <input className="searchInput" placeholder="검색" />
      </div>
      <Link className="loginBtn" to="/login">
        로그인
      </Link>
    </nav>
  );
};

export default Nav;
