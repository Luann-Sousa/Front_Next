import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import TopBar from '../TopBar/index';

function Layout({ children }) {
  const bgColor = useColorModeValue('#F4F6F8', '#1A202C');
  return (
    <Box bgColor={bgColor} minH="100vh">
      <TopBar />
      <Flex flexDirection="column" pt="62">
        {children}
      </Flex>
    </Box>
  );
}
export default Layout;
