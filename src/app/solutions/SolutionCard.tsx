"use client";

import * as React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  Flex,
  HStack,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { IconType } from "react-icons";
import { CtaButtonProps, CtaButton } from "./CtaButton";

const SolutionBox = ({}) => {};

const SolutionIcon = ({ icon }: { icon: IconType }) => {
  return (
    <Flex
      w={16}
      h={16}
      align={"center"}
      justify={"center"}
      color={"white"}
      rounded={"full"}
      bg={useColorModeValue("gray.100", "gray.700")}
      px={5}
    >
      <Icon as={icon} w={10} h={10} />
    </Flex>
  );
};

const ComingSoonLabel = ({}) => {
  return (
    <Text color={useColorModeValue("gray.500", "gray.400")} fontSize={"md"}>
      Coming Soon
    </Text>
  );
};

const LearnMoreLink = ({ href }: { href: string }) => {
  return (
    <Button
      as={Link}
      href={href}
      variant={"link"}
      colorScheme={"blue"}
      size={"sm"}
    >
      Learn more
    </Button>
  );
};

export interface SolutionCardProps {
  heading: string;
  description: string;
  icon: IconType;
  learnMoreHref?: string;
  comingSoon?: boolean;
  ctaButtonProps?: CtaButtonProps;
}

export const SolutionCard: React.FC<SolutionCardProps> = ({
  heading,
  description,
  icon,
  learnMoreHref,
  comingSoon = false,
  ctaButtonProps,
}: SolutionCardProps) => {
  return (
    <Flex
      direction={"column"}
      justifyContent="space-between"
      w={{ base: "full", md: "275px" }}
      borderWidth="1px"
      borderRadius="lg"
      p={5}
    >
      <Stack align={"start"} spacing={2}>
        <HStack>
          <SolutionIcon icon={icon} />
          <Heading size="md" color={"yellow.400"} ml={5}>
            {heading}
          </Heading>
        </HStack>
        <Divider />

        <Text
          mt={1}
          fontSize={"sm"}
          color={useColorModeValue("black", "white")}
        >
          {description}
        </Text>
      </Stack>
      <Flex direction="column" alignItems={"flex-start"} mt={5}>
        {comingSoon && <ComingSoonLabel />}
        {learnMoreHref && <LearnMoreLink href={learnMoreHref} />}
        {ctaButtonProps && <CtaButton {...ctaButtonProps} />}
      </Flex>
    </Flex>
  );
};
