'use client';

import React, { useMemo, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { FormInput } from '../FormInput';
import classes from './classes.module.css';
import { requiredRulesEmail, requiredRulesPassword } from './rules';
import { useLoginStore } from '@/store';

interface EditCdeditInsuranceScemaType {
  email: string,
  password: string,
}

const Form = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<EditCdeditInsuranceScemaType>(
    {
      defaultValues: {
        email: '',
        password: '',
      },
    },
  );
  const setLoggedIn = useLoginStore((state) => state.setLoggedIn);
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const handleLogin: SubmitHandler<EditCdeditInsuranceScemaType> = async (data) => {
    const { email, password } = data;
    setLoading(true);
    setTimeout(() => {
      const dataToSend = {
        email: email.trim(),
        password: password.trim(),
      };
      console.info(dataToSend);
      setLoading(false);
      setLoggedIn();
      localStorage.setItem('isLoggedIn', 'true');
      router.push('/main');
    }, 2000);
  };

  const hasErrors = useMemo(() => Boolean(Object.keys(errors).length), [errors]);

  return (
    <form onSubmit={handleSubmit(handleLogin)} className={classes.form}>
      {hasErrors && <div className={classes.red}>Исправьте ошибки формы</div>}
      <div className={`${loading ? classes.loading : ''}`}>
        <Typography className={classes.title} variant="h4">
          email
        </Typography>
        <FormInput
          control={control}
          rules={requiredRulesEmail}
          type="text"
          size="small"
          name="email"
          placeholder="email"
          disabled={loading}
        />
      </div>
      <div className={classes.password}>
        <Typography className={classes.title} variant="h4">
          Пароль
        </Typography>
        <FormInput
          control={control}
          rules={requiredRulesPassword}
          type="password"
          size="small"
          name="password"
          placeholder="пароль"
          disabled={loading}
        />
      </div>
      <Button
        type="submit"
        variant="contained"
        className={classes.btn}
        onSubmit={handleSubmit(handleLogin)}
        disabled={loading}
      >
        Авторизоваться
      </Button>
    </form>
  );
};

export default Form;
