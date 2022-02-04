import { Header } from 'components/Header';
import React, { ReactNode } from 'react';

import { Content } from './styles';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <Content>{children}</Content>
    </>
  );
}
