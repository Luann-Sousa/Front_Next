/* eslint-disable react/button-has-type */
import { Box, Flex, Heading, Text, Button } from '@chakra-ui/react';
import { getAllTechnologies } from '../lib/dato-cms';
import Layout from '../components/Layout';

const Cover = ({ technologies }) => {
  console.log(technologies);
  const bgColor = '#FFF';
  return (
    <Box bg={bgColor}>
      <Flex justifyContent="center" alignItems="center" py={20}>
        <Flex
          px={[4, 8]}
          py={[0, 20]}
          w="full"
          maxW="1200px"
          direction="column"
        >
          <Heading
            as="h1"
            fontSize={{ base: '42px', md: '52px', lg: '72px' }}
            mb={4}
            fontWeight="xBold"
          >
            Aprenda programação
            <Box>direto ao ponto </Box>
            <Box bgGradient="linear(to-l, #7928CA,#FF0080)" bgClip="text">
              100% free.
            </Box>
          </Heading>
          <Text fontSize={{ base: '16px', md: '20px', lg: '22px' }}>
            <Box>
              Mantenha seus conhecimentos atualizados com as mais novas{' '}
            </Box>
            <Box>tecnologias que estão disponíveis no mercado!</Box>
          </Text>
          <Box>
            <Button
              as="a"
              my={10}
              colorScheme="purple"
              variant="outline"
              size="lg"
              href="#series"
            >
              Bora começar!
            </Button>
          </Box>
          {/* { technologies.map( data => (

          ))} */}
        </Flex>
      </Flex>
    </Box>
  );
};
export default function Home({ technologies }) {
  return (
    <Layout bg="gray.100" w="100%" p={4}>
      <Cover technologies={technologies} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const technologies = await getAllTechnologies();

  return {
    props: {
      technologies,
    },
    revalidate: 120,
  };
};