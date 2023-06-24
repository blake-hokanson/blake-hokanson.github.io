import { Container, Heading, Progress, Text, Image, VStack, Box } from "@chakra-ui/react";

import ClassTabs from "./ClassTabs";

import SHSPhoto from "../../Media/SHS.jpeg";

import classes from "../../Content/SHSclasses.json";

const complete = 100;

export default function SHS() {
  return (
    <Container maxW="4xl" bg="gray.300" minH="calc(100vh - 200px)">
      <VStack>
        <Heading>Shakopee High School</Heading>
        <Heading size="md">Engineering and Manufacturing Academy</Heading>
        <Image src={SHSPhoto} borderRadius="md" />

        <Heading size="md">Progress:</Heading>
        <Text>Complete: {Math.round(complete)}%</Text>
      </VStack>

      <Progress
        value={complete}
        size="lg"
        borderRadius="md"
        colorScheme="blue"
        bg="rgba(0, 0, 0, 0)"
        style={{ gridColumn: 1, gridRow: 1 }}
      />

      <VStack>
        <Heading>Courses (College Level):</Heading>
        {classes.map((data, index) => (
          <ClassTabs key={index} {...data} />
        ))}
      </VStack>

      <Box py="30px" />
    </Container>
  );
}
