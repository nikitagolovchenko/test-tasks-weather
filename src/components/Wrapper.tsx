import { Box, Container, CssBaseline } from '@material-ui/core';
import React from 'react';
import Header from './Header';

const Wrapper: React.FC = ({ children }) => {
  return (
    <Box position='relative' width='100%' overflow='hidden'>
      <CssBaseline />
      <Header />
      <Box component='main' py={2}>
        <Container maxWidth='md'>
          <>{children}</>
        </Container>
      </Box>
    </Box>
  );
};

export default Wrapper;
