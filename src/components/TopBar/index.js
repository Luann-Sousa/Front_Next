import { Box, Flex } from '@chakra-ui/react';

function TopBar() {
  const bgColor = '#FFFF';
  const textColor = '#1A202C';
  const borderColor = '#DDDD';
  return (
    <Flex
      w="full"
      position="fixed"
      zIndex={99999}
      bgColor={bgColor}
      color={textColor}
      borderBottom={`1px solid ${borderColor}`}
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        width="full"
        maxWidth="1200px"
        margin="0 auto"
        h="60px"
        pt={4}
        px={[4, 8]}
      >
        <Box>ProgramadorWL</Box>
        <Box>Login</Box>
      </Flex>
    </Flex>
  );
}

export default TopBar;
