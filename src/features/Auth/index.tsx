import Image from 'next/image';
import { useRouter } from 'next/router';
import {
  Box,
  Button,
  Flex,
  FormLabel,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import Logo from '~/assets/Logo.svg';
import Signinbackground from '~/assets/signinbackground.svg';

const Auth = () => {
  const route = useRouter();
  const { register, handleSubmit } = useForm();

  const handleLogin = (data: any) => {
    console.log('data ', data);
    route.push('dashboard');
  };

  return (
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

          <form onSubmit={handleSubmit(handleLogin)}>
            <FormLabel>E-mail</FormLabel>
            <Input
              placeholder="E-mail"
              mb={5}
              {...register('email', { required: true })}
            />

            <FormLabel>Senha</FormLabel>
            <Input
              type="password"
              placeholder="senha"
              {...register('password')}
            />

            <Button w="full" mt={8} size="lg" colorScheme="blue" type="submit">
              ENTRAR
            </Button>
          </form>
        </VStack>
      </Flex>
      <Flex h="100vh" w="100vw">
        <VStack w="full" h="full" p={10} justifyContent="center">
          <Image src={Signinbackground} alt="SignIn image" />
        </VStack>
      </Flex>
    </Box>
  );
};

export default Auth;
