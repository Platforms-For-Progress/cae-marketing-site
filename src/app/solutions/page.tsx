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
          <Text mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
        { (href != "#") ? (
          
        <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
          Learn more
        </Button>
        ): (
          <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
          Coming Soon
        </Button>
        )}
      </Stack>
    </Box>
  );
};

export default function gridListWith() {
  return (
    <Box p={4} h={"100vh"}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading
          color={"yellow.300"}
          fontSize={{ base: "2xl", sm: "4xl" }}
          fontWeight={"bold"}
        >
          Our Solutions
        </Heading>
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
          CAE addresses inequities in the hiring process through innovative
          solutions that leverage modern technologies and community-building
          strategies.
        </Text>
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
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
            href={"caeportfolio.com"}
          />
          <Card
            heading={"Career Advancement Portfolio Education"}
            icon={<Icon as={FcReading} w={10} h={10} />}
            description={
              "Summer learning experience targeted at leaders passionate about community-building and equity."
            }
            href={"caeportfolio.com/resources/cape"}
          />
          <Card
            heading={"Career Advancement Community"}
            icon={<Icon as={FcConferenceCall} w={10} h={10} />}
            description={
              "Slack community built up from underrepresented populations at UIUC and adjacent communities."
            }
            href={"https://join.slack.com/t/slack-gkx8909/shared_invite/zt-1wb4et1xt-Ti4CW4_LjTHoJ6Fi6DGP5Q"}
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
