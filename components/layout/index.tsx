import React from 'react';

import { Container, Inner } from './style';

export const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Inner>
        {children}
      </Inner>
    </Container>
  )
}