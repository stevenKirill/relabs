'use client';

import React, { useEffect } from 'react';
import { redirect } from 'next/navigation';
import Card from '@/components/Card';
import classes from './page.module.css';
import { useStore } from '@/store';

const numbers = Array.from({ length: 10 }).map((_, i) => i);

// Теряется смысл ssr из зв локалсторадж
const Shop = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const socket = useStore((store) => store.socket);
  socket?.close();
  useEffect(() => {
    if (!isLoggedIn) {
      redirect('/login');
    }
  }, [isLoggedIn]);
  return (
    <>
      {isLoggedIn && (
      <div className={classes.wrapper}>
        {numbers.map((key) => (
          <Card key={key} />
        ))}
      </div>
      )}
    </>
  );
};

export default Shop;
