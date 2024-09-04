import Link from 'next/link';
import React from 'react';
import classes from './classes.module.css';

const Header = () => (
  <header className={classes.wrapper}>
    <div>Logo</div>
    <nav>
      <ul className={classes.menu}>
        <Link href="/login">
          <li>Login</li>
        </Link>
        <Link href="/main">
          <li>Main</li>
        </Link>
        <Link href="/shop">
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  </header>
);

export default Header;
