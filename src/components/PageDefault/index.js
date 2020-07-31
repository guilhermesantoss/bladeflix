import React from 'react';
import { Menu } from '../Menu';
import { Footer } from '../Footer';
import { Main } from './styles';

export const PageDefault = ({ children }) => {
  return (
    <>
      <Menu />
        <Main>
          {children}
        </Main>
      <Footer />
    </>
  );
}