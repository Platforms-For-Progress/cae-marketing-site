"use client";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Textarea,
  Tooltip,
  useClipboard,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";

import {
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsPerson,
  BsTwitter,
} from "react-icons/bs";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import ErrorAlert from "../_components/Alerts/ErrorAlert";
import SuccessAlert from "../_components/Alerts/SuccessAlert";

const FORM_ERROR_MESSAGE = "There was an error submitting your message";
const FORM_SUCCESS_MESSAGE = "Your message has been submitted!";

export default function ContactFormPage() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [formLoading, setFormLoading] = React.useState(false);
  const [formError, setFormError] = React.useState(false);
  const [formSuccess, setFormSuccess] = React.useState(false);
  const { hasCopied, onCopy } = useClipboard(
    "team@careeradvancementexchange.com"
  );

  async function handleSubmitMessage(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError(false);
    setFormLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({ name, email, message }),
      });
      setName("");
      setEmail("");
      setMessage("");
      setFormSuccess(true);
    } catch (error) {
      setFormSuccess(false);
      setFormError(true);
    }
    setFormLoading(false);
  }

  return (
    <Flex
      bg={useColorModeValue("gray.100", "gray.900")}
      align="center"
      justify="center"
      id="contact"
    >
      <Box
        borderRadius="lg"
        m={{ base: 5, md: 16, lg: 10 }}
        p={{ base: 5, lg: 16 }}
      >
        <Box>
          <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
            <Heading
              color={useColorModeValue("gray.900", "white")}
              fontSize={{
                base: "4xl",
                md: "5xl",
              }}
            >
              Get in Touch
            </Heading>

            <Stack
              spacing={{ base: 4, md: 8, lg: 20 }}
              direction={{ base: "column", md: "row" }}
            >
              <Stack
                align="center"
                justify="space-around"
                direction={{ base: "row", md: "column" }}
              >
                <Tooltip
                  label={hasCopied ? "Email Copied!" : "Copy Email"}
                  closeOnClick={false}
                  hasArrow
                >
                  <IconButton
                    aria-label="email"
                    variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    icon={<MdEmail />}
                    _hover={{
                      bg: "yellow.500",
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    onClick={onCopy}
                    isRound
                  />
                </Tooltip>

                <Link href="https://instagram.com/caexchange">
                  <IconButton
                    aria-label="instagram"
                    variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    icon={<BsInstagram />}
                    _hover={{
                      bg: "yellow.500",
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                  />
                </Link>

                <Link href="https://twitter.com/CareerAdva47060">
                  <IconButton
                    aria-label="twitter"
                    variant="ghost"
                    size="lg"
                    icon={<BsTwitter size="28px" />}
                    _hover={{
                      bg: "yellow.500",
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                  />
                </Link>

                <Link href="https://www.linkedin.com/company/career-advancement-exchange">
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="lg"
                    icon={<BsLinkedin size="28px" />}
                    _hover={{
                      bg: "yellow.500",
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                  />
                </Link>
              </Stack>

              <Box
                w={{ base: "100%", md: "50vw" }}
                bg={useColorModeValue("white", "gray.700")}
                borderRadius="lg"
                p={8}
                color={useColorModeValue("gray.700", "whiteAlpha.900")}
                shadow="base"
              >
                <form onSubmit={handleSubmitMessage}>
                  <VStack spacing={5}>
                    <FormControl isRequired>
                      <FormLabel>Name</FormLabel>
                      <InputGroup>
                        <InputLeftElement children={<BsPerson />} />
                        <Input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          onChange={(e) => setName(e.target.value)}
                          value={name}
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Email</FormLabel>
                      <InputGroup>
                        <InputLeftElement children={<MdOutlineEmail />} />
                        <Input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Message</FormLabel>

                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        rows={6}
                        resize="none"
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                      />
                    </FormControl>

                    <Button
                      colorScheme="yellow"
                      bg="yellow.400"
                      color="white"
                      _hover={{
                        bg: "yellow.500",
                      }}
                      width={"full"}
                      type="submit"
                      isLoading={formLoading}
                      loadingText="Submitting"
                    >
                      Send Message
                    </Button>
                  </VStack>
                </form>
              </Box>
            </Stack>
            {formError && <ErrorAlert message={FORM_ERROR_MESSAGE} />}
            {formSuccess && <SuccessAlert message={FORM_SUCCESS_MESSAGE} />}
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
}
