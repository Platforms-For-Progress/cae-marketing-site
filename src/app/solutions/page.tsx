"use client";

import { ReactElement } from "react";
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

import { SolutionCard } from "./SolutionCard";
import { solutionsData } from "./solutionsData";

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
          {solutionsData.map((solution) => (
            <SolutionCard key={solution.heading} {...solution} />
          ))}
        </Flex>
      </Container>
    </Box>
  );
}
