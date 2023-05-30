"use client";

import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import Image from "next/image";
import heroImage from "../../public/images/hero.jpeg";

export default function Home() {
  return (
    <Flex dir="column" justifyContent="space-between" alignItems="center">
      <Stack minH="100vh" direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              <Text as={"span"} position={"relative"}>
                Empowering
              </Text>
              <Text
                as="span"
                bgGradient="linear(to-l, #e1cf28, #f6a818)"
                bgClip="text"
                fontWeight="extrabold"
              >
                {" "}
                diversity
              </Text>
              <br />
              <Text>in the workplace</Text>
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
              Career Advancement Exchange is revolutionizing the workforce and
              reducing the inequities that exist within the hiring process.
            </Text>
            <Stack
              direction={{ base: "column", md: "row" }}
              spacing={4}
              alignItems="center"
            >
              <Link
                href="/solutions"
                px={6}
                py={3}
                rounded={"full"}
                fontSize={{ base: "lg", lg: "xl" }}
                bg={"yellow.400"}
                color={"white"}
                _hover={{
                  bg: "yellow.500",
                  transform: "scale(1.02)",
                }}
                transition="all 0.3s"
                boxShadow="lg"
              >
                View our solutions
              </Link>
              <Link href="/about" rounded={"full"}>
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={"Login Image"}
            style={{ objectFit: "cover" }}
            src={heroImage}
            priority
          />
        </Flex>
      </Stack>
    </Flex>
  );
}
