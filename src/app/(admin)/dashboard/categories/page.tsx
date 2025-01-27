import React from 'react';
import Header from '@/app/components/header';

export interface PageProps {}

export default function Categories({}: PageProps) {
  return (
    <>
      <Header>Dashboard / Categories</Header>
      <div>Some additional info from categories</div>
    </>
  );
}
