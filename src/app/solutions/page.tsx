"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { ReactElement } from "react";
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
  FcReading,
  FcGraduationCap,
  FcBriefcase,
  FcConferenceCall,
} from "react-icons/fc";

const Card = ({ heading, description, icon, href }: any) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md" color={"yellow.400"}>
            {heading}
          </Heading>
          <Text
            mt={1}
            fontSize={"sm"}
            color={useColorModeValue("black", "white")}
          >
            {description}
          </Text>
        </Box>
        {href != "#" ? (
          <Button
            as={Link}
            href={href}
            variant={"link"}
            colorScheme={"blue"}
            size={"sm"}
          >
            Learn more
          </Button>
        ) : (
          <Text color={useColorModeValue("gray", "gray.400")} size={"sm"}>
            Coming Soon
          </Text>
        )}
      </Stack>
    </Box>
  );
};

export default function Solutions() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading
          color={"yellow.300"}
          fontSize={{ base: "2xl", sm: "4xl" }}
          fontWeight={"bold"}
        >
          Our Solutions
        </Heading>
        <Text
          color={useColorModeValue("gray.600", "white")}
          fontSize={{ base: "sm", sm: "lg" }}
        >
          CAE addresses inequities in the hiring process through innovative
          solutions that leverage modern technologies and community-building
          strategies.
        </Text>
        <Text
          color={useColorModeValue("gray.600", "white")}
          fontSize={{ base: "sm", sm: "lg" }}
        >
          Through these solutions, we provide career advancement resources to
          underrepresented students and professionals as well as foster
          relationships with parties interested in acquiring diverse talent.
        </Text>
      </Stack>

      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={"ePortfolio Request Service"}
            icon={<Icon as={FcBriefcase} w={10} h={10} />}
            description={
              "Request service for personalized websites targeted at underrepresented students and professionals"
            }
            href={"https://caeportfolio.com"}
          />
          <Card
            heading={"Career Advancement Portfolio Education"}
            icon={<Icon as={FcReading} w={10} h={10} />}
            description={
              "Summer learning experience targeted at leaders passionate about community-building and equity."
            }
            href={"https://caeportfolio.com/resources/cape"}
          />
          <Card
            heading={"Career Advancement Community"}
            icon={<Icon as={FcConferenceCall} w={10} h={10} />}
            description={
              "Discord community serving resources for succeeding in the workplace from an underrepresented background."
            }
            href={"https://discord.gg/B9djunUm"}
          />
          <Card
            heading={"Professional Social Network"}
            icon={<Icon as={FcGraduationCap} w={10} h={10} />}
            description={
              "Professional social networking web and mobile app for underrepresented persons. "
            }
            href={"#"}
          />
        </Flex>
      </Container>
    </Box>
  );
}
