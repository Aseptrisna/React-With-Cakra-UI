import React, { Component } from 'react';
import { Flex } from '@chakra-ui/react';
import { Navbar, Sidebar } from '../component';
import { LoginView } from '../view';
export default function LoginSetup() {
  return (
    <>
      {/* <Navbar /> */}
      <LoginView />
    </>
  );
}
