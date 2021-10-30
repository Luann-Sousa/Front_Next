/* eslint-disable react/button-has-type */
import { Box, Heading } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box bg="gray.100" w="100%" p={4}>
      <Heading as="h2" size="3xl" isTruncated>
        Aprenda programação direto ao ponto
      </Heading>
    </Box>
  );
}
