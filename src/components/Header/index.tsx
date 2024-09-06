'use client';

import Link from 'next/link';
import React from 'react';
import classes from './classes.module.css';
import { useStore } from '@/store';

const Header = () => {
  const isLoggedIn = useStore((store) => store.isLoggedIn);
  return (
    <header className={classes.wrapper}>
      <div>Logo</div>
      <nav>
        <ul className={classes.menu}>
          <Link href="/login">
            <li>Login</li>
          </Link>
          {isLoggedIn && (
            <>
              <Link href="/main">
                <li>Main</li>
              </Link>
              <Link href="/shop">
                <li>Shop</li>
              </Link>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
