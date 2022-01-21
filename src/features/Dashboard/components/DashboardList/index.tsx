import { Box, Button, Flex, Input } from '@chakra-ui/react';
import TableDashboard from '../Table';

export const DashboardList = () => {
  return (
    <Flex m={10} flexDirection="column">
      <Box background="whiteAlpha.100">
        <Input placeholder="Search" />
        <Button>Filtrar</Button>
      </Box>
      <TableDashboard />
    </Flex>
  );
};
