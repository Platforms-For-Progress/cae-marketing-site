"use client";

import {
  Box,
  Heading,
  Stack,
  Text,
  Avatar,
  Center,
  Wrap,
} from "@chakra-ui/react";
import { Image as ChakraNextImage } from "@chakra-ui/next-js";
import { TeamMember } from "../team";
import NextImage from "next/image";

function TeamImage({ image, name }: { image: string; name: string }) {
  return (
    // <Box position="relative" bottom={1}>
    //   <NextImage
    //     width={150}
    //     height={150}
    //     src={image}
    //     alt={alt}
    //     style={{ borderRadius: "50%" }}
    //   />
    // </Box>
    <Center>
      <Avatar size="2xl" name={name} src={image} />
    </Center>
  );
}

function CardWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Box
      maxW={"270px"}
      w={"full"}
      bgGradient="linear(to-b, #fafafa, white)"
      boxShadow={"2xl"}
      rounded={"md"}
      overflow={"hidden"}
      margin={"auto"}
      mb={5}
      p={4}
    >
      {children}
    </Box>
  );
}

export default function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <CardWrapper>
      <TeamImage image={member.image} name={member.name} />
      <Box p={6}>
        <Stack spacing={0} align={"center"} mb={3}>
          <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
            {member.name}
          </Heading>

          <Text color={"gray.500"}>{member.description}</Text>
        </Stack>
      </Box>
    </CardWrapper>
  );
}
