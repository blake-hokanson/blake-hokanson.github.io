import { Container, Heading, Progress, Text, Image, VStack, Box } from "@chakra-ui/react";

import ClassTabs from "./ClassTabs";

import UMNPhoto from "../../Media/UMN2.jpg";

import classes from "../../Content/UMNclasses.json";

const progress = (17 / 122) * 100;
const complete = (89 / 122) * 100;

export default function UMN() {
  return (
    <Container maxW="4xl" bg="gray.300" minH="calc(100vh - 200px)">
      <VStack>
        <Heading marginTop="30px">University of Minnesota Twin Cities</Heading>
        <Heading size="md">Majoring in Computer Science with a Minor in Statistics</Heading>
        <Image src={UMNPhoto} borderRadius="md" />

        <Heading size="md">Progress:</Heading>
        <Text>
          Complete: {Math.round(complete)}% In-Progress: {Math.round(progress)}%
        </Text>
      </VStack>

      <div style={{ display: "grid" }}>
        <Progress
          value={progress + complete}
          size="lg"
          colorScheme="gray"
          borderRadius="md"
          style={{ gridColumn: 1, gridRow: 1 }}
        />
        <Progress
          value={complete}
          size="lg"
          borderRadius="md"
          colorScheme="blue"
          bg="rgba(0, 0, 0, 0)"
          style={{ gridColumn: 1, gridRow: 1 }}
        />
      </div>

      <VStack>
        <Heading>Courses:</Heading>
        {classes.map((data, index) => (
          <ClassTabs key={index} {...data} />
        ))}
      </VStack>

      <Box py="30px" />
    </Container>
  );
}
