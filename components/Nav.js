import React from "react";
import navStyles from "../styles/Nav.module.css";
import Link from "next/link";
const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <p className={navStyles.title}>
            <span>Sample</span> E-commerce
          </p>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/electronics">Electronics</Link>
        </li>
        <li>
          <Link href="/jewelery">Jewelery</Link>
        </li>
        <li>
          <Link href="/mens">Mens</Link>
        </li>
        <li>
          <Link href="/womens">Womens</Link>
        </li>
        {/* <li>
          <Link href="/about">About</Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Nav;
