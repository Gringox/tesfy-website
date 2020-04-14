import React from 'react';
import { Box } from '@chakra-ui/core';
import Logo from '../Logo';

const Header = () => {
  return (
    <Box
      pos="fixed"
      as="header"
      top="0"
      left="0"
      borderBottomWidth="1px"
      width="full"
      height="62px"
    >
      <Box height="100%" paddingX="2" display="flex" alignItems="center">
        <Logo />
      </Box>
    </Box>
  );
};

export default Header;