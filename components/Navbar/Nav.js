import Link from "next/link";
import React from "react";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={[styles.nav]}>
      <div className={[styles.container]}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/shop">Shop</Link>
          </li>
          <li>
            <Link href="/">Logo</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/admin/admin-index">Admin</Link>
          </li>
          <li>
            <Link href="/auth/auth">Login/Register</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
