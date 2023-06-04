import { Link } from "@chakra-ui/next-js";
import { Button, useColorModeValue } from "@chakra-ui/react";
import React from "react";

export interface CtaButtonProps {
  label: string;
  href: string;
  colorScheme?: string;
  leftIcon?: React.ReactElement;
}

export const CtaButton: React.FC<CtaButtonProps> = ({
  label,
  href,
  colorScheme = "gray",
  leftIcon,
}: CtaButtonProps) => {
  return (
    <Button
      as={Link}
      href={href}
      target="_blank"
      color={useColorModeValue("black", "white")}
      colorScheme={colorScheme}
      leftIcon={leftIcon}
      alignSelf={"center"}
      w="full"
    >
      {label}
    </Button>
  );
};
