/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-param-reassign */
/* eslint-disable react/button-has-type */
import { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Wrap,
  WrapItem,
  Center,
  Image,
  useColorModeValue,
  Link,
  SimpleGrid,
} from '@chakra-ui/react';
import SerieCard from '../components/SerieCard/SerieCard';
import { getAllSeries, getAllTechnologies } from '../lib/dato-cms';
import Layout from '../components/Layout';
import Footer from '../components/Footer';

const Cover = ({ technologies }) => {
  const [currentTechnologies, setTechnologies] = useState(technologies);
  const bgColor = useColorModeValue('#FFFFFF', '#1A202C');

  const handleShowAllTechnologies = () => {
    const tecs = currentTechnologies.map((t) => {
      t.defaultVisible = true;
      return t;
    });
    setTechnologies(tecs);
  };

  const hiddenTechnologies = currentTechnologies?.filter(
    (t) => !t.defaultVisible,
  ).length;
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
          <Wrap>
            {currentTechnologies
              ?.filter((f) => f.defaultVisible)
              ?.map((tech) => (
                <WrapItem>
                  <Center
                    w="100px"
                    h="100px"
                    borderWidth="1px"
                    borderRadius="lg"
                    overflow="hidden"
                    flexDirection="column"
                  >
                    <Image
                      src={tech.logo.url}
                      alt={tech.name}
                      width={40}
                      height={40}
                      title={tech.name}
                    />
                    <Text
                      fontSize="sm"
                      textAlign="center"
                      fontWeight="bold"
                      mt={2}
                    >
                      {tech.name}
                    </Text>
                  </Center>
                </WrapItem>
              ))}
            {hiddenTechnologies > 0 && (
              <WrapItem>
                <Center
                  w="100px"
                  h="100px"
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  flexDirection="column"
                >
                  <Link onClick={handleShowAllTechnologies}>
                    <Text
                      fontSize="sm"
                      textAlign="center"
                      fontWeight="bold"
                      mt={2}
                    >
                      {`+${hiddenTechnologies} outras`}
                    </Text>
                  </Link>
                </Center>
              </WrapItem>
            )}
          </Wrap>
        </Flex>
      </Flex>
    </Box>
  );
};
const Series = ({ series }) => (
  <Flex id="series" justify="center">
    <Flex w="full" maxW="1200px" px={[4, 8]} mt={10} direction="column">
      <Heading mb={4}>Séries</Heading>
      <SimpleGrid columns={[1, null, 3]} spacing="40px">
        {series.map((serie) => (
          <SerieCard serie={serie} key={serie.id} />
        ))}
      </SimpleGrid>
    </Flex>
  </Flex>
);

export default function Home({ technologies, series }) {
  return (
    <Layout bg="gray.100" w="100%" p={4}>
      <Cover technologies={technologies} />
      <Series series={series} />
      <Footer />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const technologies = await getAllTechnologies();
  const series = await getAllSeries();

  return {
    props: {
      technologies,
      series,
    },
    revalidate: 120,
  };
};
