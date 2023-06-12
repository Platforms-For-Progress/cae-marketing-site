"use client";

import {
  VStack,
  Button,
  Flex,
  Divider,
  Grid,
  GridItem,
  Container,
  Icon,
  Text,
  Stack,
  Heading,
  SimpleGridProps,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/next-js";
import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";

const data = [
  {
    title: "Elisa Carrillo",
    description: "Founder and CEO",
    image: "/images/ElisaCarrillo.png",
  },
  {
    title: "Jacob Shalabi",
    description: "CTO",
    image: "/images/jacobshalabi.jpeg",
  },
  {
    title: "Laiba Khan",
    description: "CHRO",
    image: "/images/laiba.jpeg",
  },
  {
    title: "Maryam Khatoon",
    description: "Head of Marketing",
    image: "/images/Maryam.jpeg",
  },
  {
    title: "Anay Sharma",
    description: "Head of Business",
    image: "/images/anay.jpeg",
  },

  {
    title: "Ritul Soni",
    description: "Head of R & D",
    image: "/images/ritul.jpg",
  },
  {
    title: "Alexis Serrano",
    description: "Head of CAPE",
    image: "/images/alexis.jpeg",
  },
  {
    title: "Kaz Shah",
    description: "Head of URW",
    image: "/images/kaz.jpg",
  },
  {
    title: "Sid Wanjara",
    description: "Software/R&D/Business",
    image: "/images/sid.jpeg",
  },
  {
    title: "Yasmine Munoz",
    description: "Software Developer",
    image: "/images/yasmine.jpeg",
  },
  {
    title: "Aayush Bhat",
    description: "Software Developer",
    image: "/images/Aayush.jpg",
  },

  {
    title: "Ardyn Chin",
    description: "UIUX Intern",
    image: "/images/Ardyn.jpg",
  },
  {
    title: "Noah Taliercio",
    description: "Software Development Intern",
    image: "/images/Noah.jpeg",
  },
  {
    title: "Edith Luna",
    description: "Marketing Intern",
    image: "/images/Edith.jpeg",
  },
  {
    title: "Nora Duffy",
    description: "Marketing Intern",
    image: "/images/Nora.jpeg",
  },

  // 'https://images.unsplash.com/photo-1612852098516-55d01c75769a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
  // 'https://images.unsplash.com/photo-1627875764093-315831ac12f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
  // 'https://images.unsplash.com/photo-1571432248690-7fd6980a1ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
];
interface FeatureProps {
  heading: string;
  text: string;
}
const StatsCard = (props: any) => {
  const { title, stat } = props;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}
    >
      <StatLabel fontWeight={"medium"} isTruncated>
        {title}
      </StatLabel>
      <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
        {stat}
      </StatNumber>
    </Stat>
  );
};
const Feature = ({ heading, text }: FeatureProps) => {
  return (
    <GridItem>
      <chakra.h3 fontSize="xl" fontWeight="600">
        {heading}
      </chakra.h3>
      <chakra.p>{text}</chakra.p>
    </GridItem>
  );
};

export default function gridListWithCTA() {
  return (
    <Box as={Container} maxW="7xl" mt={14} p={100}>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        gap={4}
        color={useColorModeValue("gray.700", "gray.200")}
      >
        <GridItem colSpan={1}>
          <VStack alignItems="flex-start" spacing="20px">
            <chakra.h2 fontSize="3xl" fontWeight="700">
              About Us
            </chakra.h2>
          </VStack>
        </GridItem>
        <GridItem>
          <Flex>
            <chakra.p>
              Elisa Carrillo founded CAE after noticing her sister was having
              trouble gaining employment, even though she was qualified. Elisa
              realized that her sister was not alone in this struggle and that
              many people were being denied opportunities because of their
              background. Elisa decided to create a company that would help
              people like her sister gain employment and achieve their career
              goals.
            </chakra.p>
          </Flex>
        </GridItem>
      </Grid>
      <Divider mt={12} mb={12} />
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        gap={4}
        color={useColorModeValue("gray.700", "gray.200")}
      >
        <GridItem colSpan={1}>
          <VStack alignItems="flex-start" spacing="20px">
            <chakra.h2 fontSize="3xl" fontWeight="700">
              Mission
            </chakra.h2>
          </VStack>
        </GridItem>
        <GridItem>
          <Flex>
            <chakra.p>
              Our mission at Career Advancement Exchange is to empower
              underrepresented individuals in the career space by celebrating
              diversity and providing innovative solutions for professional
              growth.{" "}
            </chakra.p>
          </Flex>
        </GridItem>
      </Grid>
      <Divider mt={12} mb={12} />
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        gap={4}
        color={useColorModeValue("gray.700", "gray.200")}
      >
        <GridItem colSpan={1}>
          <VStack alignItems="flex-start" spacing="20px">
            <chakra.h2 fontSize="3xl" fontWeight="700">
              Vision
            </chakra.h2>
          </VStack>
        </GridItem>
        <GridItem>
          <Flex>
            <chakra.p>
              To create an inclusive community where individuals thrive and
              access opportunities that recognize and value their unique talents
              and backgrounds. We are committed to fostering empowerment,
              self-expression, and meaningful connections, while actively
              advancing career growth for all.{" "}
            </chakra.p>
          </Flex>
        </GridItem>
      </Grid>
      <Divider mt={12} mb={12} />
      <chakra.h1
        textAlign={"center"}
        fontSize={"4xl"}
        py={10}
        fontWeight={"bold"}
        color={useColorModeValue("gray.700", "gray.200")}
      >
        Our Progress
      </chakra.h1>
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        spacing={{ base: 5, lg: 8 }}
        color={useColorModeValue("gray.700", "gray.200")}
      >
        <StatsCard title={"We Have"} stat={"7 website deployments"} />
        <StatsCard title={"In"} stat={"2 different states"} />
        <StatsCard title={"With Over"} stat={"8000 website views"} />
      </SimpleGrid>

      <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        <chakra.h1
          textAlign={"center"}
          fontSize={"4xl"}
          py={10}
          fontWeight={"bold"}
          color={useColorModeValue("gray.700", "gray.200")}
        >
          Our Team
        </chakra.h1>
        <Flex
          w="100%"
          h="100%"
          align="center"
          justify="center"
          flexWrap={"wrap"}
        >
          {data.map((item) => (
            <Box
              key={item.title}
              maxW={"270px"}
              w={"full"}
              bg={
                "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)"
              }
              boxShadow={"2xl"}
              rounded={"md"}
              overflow={"hidden"}
              margin={"auto"}
              mb={5}
            >
              <Image
                width="120"
                height="120"
                borderRadius={"50%"}
                margin={"auto"}
                mt={"20px"}
                src={item.image}
                alt={item.title}
                style={{ objectFit: "cover" }}
              />

              <Box p={6}>
                <Stack spacing={0} align={"center"} mb={5}>
                  <Heading
                    fontSize={"2xl"}
                    fontWeight={500}
                    fontFamily={"body"}
                  >
                    {item.title}
                  </Heading>
                  <Text color={"gray.500"}>{item.description}</Text>
                </Stack>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}
