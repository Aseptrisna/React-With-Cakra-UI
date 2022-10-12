import React, { Component } from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Navbar,Sidebar } from '../component';

export default function LoginView() {
  
  return (
    <Flex
      minH={'100vh'}
      align={'top'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
    {/* <Navbar/> */}
     {/* <Sidebar/> */}
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          {/* <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text> */}
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
               href="/home"
              >
                Sign in
              </Button>
            </Stack>
            <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}
              >
                {/* <Checkbox>Remember me</Checkbox> */}
                <Text align={'center'}>
                Don't have an account?{' '}
                <Link color={'blue.400'} href="/signup">
                Register
                </Link>
              </Text>
              </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
