import {
  Box,
  Button,
  Checkbox,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { RiPencilLine, RiCloseCircleLine } from 'react-icons/ri';

const TableDashboard = () => {
  return (
    <Table colorScheme="blackAlpha">
      <Thead>
        <Tr>
          <Th>Usuário</Th>
          <Th>Título</Th>
          <Th>Data de cadastro</Th>
          <Th>Valor</Th>
          <Th>Pago</Th>
          <Th w="8"></Th>
          <Th w="8"></Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>
            <Box>
              <Text fontWeight="bold">Diou Medeiros</Text>
              <Text fontSize="sm" color="gray.300">
                diou@gmail.com
              </Text>
            </Box>
          </Td>
          <Td>Analista de sistemas</Td>
          <Td>04 de Janeiro, 2022</Td>
          <Td>R$ 4000,00</Td>
          <Td px="6">
            <Checkbox colorScheme="green" />
          </Td>
          <Td>
            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="teal"
              cursor="pointer"
              leftIcon={<Icon as={RiPencilLine} fontSize={16} />}
            >
              Editar
            </Button>
          </Td>
          <Td>
            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="teal"
              cursor="pointer"
              leftIcon={<Icon as={RiCloseCircleLine} fontSize={16} />}
            >
              Excluir
            </Button>
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
};

export default TableDashboard;
