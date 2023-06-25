import { Container, HStack, Button, VStack } from "@chakra-ui/react";

import { FiGithub } from "react-icons/fi";
import { FaLinkedin, FaFileAlt } from "react-icons/fa";

import React from "react";

export default function Footer() {
  return (
    <Container maxW="4xl" h="100px" bg="gray.500" display="flex" justifyContent="center" alignItems="center">
      <VStack>
        <HStack>
          {ButtonObject({
            fig: <FaLinkedin />,
            link: "https://www.linkedin.com/in/blake-hokanson/",
            text: "LinkedIn",
          })}
          {ButtonObject({
            fig: <FiGithub />,
            link: "https://github.com/blake-hokanson",
            text: "GitHub",
          })}
          {ButtonObject({
            fig: <FaFileAlt />,
            link: "/Resume.pdf",
            text: "Resume",
          })}
        </HStack>
      </VStack>
    </Container>
  );
}

function ButtonObject({ fig, link, text }) {
  return (
    <Button as="a" leftIcon={fig} href={link} target="_blank">
      {text}
    </Button>
  );
}
