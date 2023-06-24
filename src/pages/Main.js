import { Container, Heading, SimpleGrid, Text, VStack, Box } from "@chakra-ui/react";

import CardObject from "../components/Card.js";

import projects from "../Content/projects.json";
import experience from "../Content/experience.json";
import education from "../Content/education.json";

const data = [
  { title: "Projects", data: projects },
  { title: "Experience", data: experience },
  { title: "Education", data: education },
];

export default function Main() {
  return (
    <Container maxW="4xl" bg="gray.300">
      <AboutMe />
      {
        //turns data list into objects
        data.map((data, index) => (
          <DefaultFormat key={index} {...data}></DefaultFormat>
        ))
      }
      <Box py="30px"></Box>
    </Container>
  );
}

function AboutMe() {
  return (
    <Container maxW="4xl">
      <Heading py="30px">About Me:</Heading>
      <Text>
        Passionate and highly driven computer science major at the University of Minnesota Twin Cities. Eager to learn
        more about computer science and its applications in software engineering. Looking for summer internships.
      </Text>
      <Text my="15px">
        I have been programming in multiple languages for over five years and taking computer science classes for the
        past two years. In that time I have completed multiple projects, including a framework to test stock day-trading
        strategies and created a schedule generator for my workplace.
      </Text>
    </Container>
  );
}

function DefaultFormat({ title, data }) {
  return (
    <Container maxW="4xl" id={title}>
      <Heading my="30px">{title}:</Heading>
      <VStack>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing="10px">
          {data.map((data, index) => (
            <CardObject key={index} {...data}></CardObject>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
}
