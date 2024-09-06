'use client';

import { redirect } from 'next/navigation';
import React from 'react';
import { useLoginStore } from '@/store';

const HomeContent = () => {
  const isLoggedIn = useLoginStore((store) => store.isLoggedIn);
  if (!isLoggedIn) {
    redirect('/login');
  }
  return (
    <div>index</div>
  );
};

export default HomeContent;
