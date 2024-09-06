'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import classes from './classes.module.css';
import { useLoginStore } from '@/store';

const Header = () => {
  const [i, setI] = useState();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  useEffect(() => {
    setI(isLoggedIn);
  }, [isLoggedIn]);
  return (
    <header className={classes.wrapper}>
      <div>Logo</div>
      <nav>
        <ul className={classes.menu}>
          <Link href="/login">
            <li>Login</li>
          </Link>
          {i && (
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
