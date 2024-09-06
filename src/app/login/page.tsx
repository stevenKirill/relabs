'use client';

import React from 'react';
import Form from '@/components/Form';
import classes from './page.module.css';
import { useLoginStore } from '@/store';

const Login = () => {
  const setLoggedOut = useLoginStore((store) => store.setLoggedOut);
  localStorage.setItem('isLoggedIn', 'false');
  setLoggedOut();
  return (
    <div>
      <h1 className={classes.title}>Авторизация</h1>
      <Form />
    </div>
  );
};

export default Login;
