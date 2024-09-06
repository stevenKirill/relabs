'use client';

import { redirect } from 'next/navigation';
import React from 'react';
import { useStore } from '@/store';

const HomeContent = () => {
  const isLoggedIn = useStore((store) => store.isLoggedIn);
  if (!isLoggedIn) {
    redirect('/login');
  }
  return (
    <div>index</div>
  );
};

export default HomeContent;
