import React from 'react';
import Form from '@/components/Form';
import classes from './page.module.css';

const Login = () => (
  <div>
    <h1 className={classes.title}>Авторизация</h1>
    <Form />
  </div>
);

export default Login;
