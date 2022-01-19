import Image from 'next/image';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react';

import Logo from 'assets/Logo.svg';
import Signinbackground from 'assets/signinbackground.svg';

const Auth = () => (
  <Box display="flex" flexDirection="row">
    <Flex h="100vh" w="3xl">
      <VStack
        w="full"
        h="full"
        p={10}
        justifyContent="center"
        alignItems="flex-start"
        bg="gray.100"
      >
        <VStack alignItems="flex-start" spacing={5} mb={10}>
          <Image src={Logo} alt="Logo" />
          <Heading size="lg">Bem vindo de volta</Heading>
        </VStack>

        <FormControl>
          <FormLabel>E-mail</FormLabel>
          <Input placeholder="E-mail" mb={5} />
          <FormLabel>Senha</FormLabel>
          <Input placeholder="senha" />
          <Button
            w="full"
            mt={8}
            size="lg"
            colorScheme="blue"
            type="submit"
            varian
          >
            ENTRAR
          </Button>
        </FormControl>
      </VStack>
    </Flex>
    <Flex h="100vh" w="100vw">
      <VStack w="full" h="full" p={10} justifyContent="center">
        <Image src={Signinbackground} alt="SignIn image" />
      </VStack>
    </Flex>
  </Box>
);

export default Auth;
