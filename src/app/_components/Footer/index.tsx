"use client";

import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
  FormControl,
  FormLabel,
  useToast,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import Image from "next/image";
import React from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: React.ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  const toast = useToast();
  const [email, setEmail] = React.useState("");
  const [submitting, setSubmitting] = React.useState(false);

  async function handleNewsletterSubscribe(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        body: JSON.stringify({ email }),
      });
      setEmail("");
      toast({
        title: "Success!",
        description: "Be on the lookout for our latest updates!",
        status: "success",
        duration: 5000,
      });
    } catch (error) {
      toast({
        title: "Error occurred",
        description: "There was an error processing your email.",
        status: "error",
        duration: 5000,
      });
    }
    setSubmitting(false);
  }

  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box cursor="pointer">
              <Link href="/">
                <Image
                  src={useColorModeValue("/logo-black.svg", "/logo-white.svg")}
                  alt="logo"
                  width="200"
                  height="100"
                  style={{ objectFit: "contain" }}
                />
              </Link>
            </Box>
            <Text fontSize={"sm"}>
              © 2023 Career Advancement Exchange. All rights reserved
            </Text>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Link href={"/about"}>About us</Link>

            <Link href={"/contact"}>Contact us</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <form onSubmit={handleNewsletterSubscribe}>
              <ListHeader>Stay up to date</ListHeader>
              <Stack direction={"row"}>
                <FormControl id="email" isRequired>
                  <FormLabel display={"none"}>Email</FormLabel>
                  <Input
                    placeholder={"Your email address"}
                    bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
                    border={0}
                    _focus={{
                      bg: "whiteAlpha.300",
                    }}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    isDisabled={submitting}
                  />
                </FormControl>
                <IconButton
                  bg={useColorModeValue("green.400", "green.800")}
                  color={useColorModeValue("white", "gray.800")}
                  _hover={{
                    bg: "green.600",
                  }}
                  aria-label="Subscribe"
                  icon={<BiMailSend />}
                  isLoading={submitting}
                  type="submit"
                />
              </Stack>
            </form>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
