import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Routers from '../src/route/router';
import { Navbar ,Sidebar} from './page/component';

function App() {
  return (
    // <ChakraProvider theme={theme} >
    <ChakraProvider theme={theme} resetCss={false} position="relative">
    <Navbar/>
    {/* <Sidebar/> */}
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
          <Routers/>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
