import { Container, Heading, SimpleGrid, Text, VStack, Box } from "@chakra-ui/react";

import CardObject from "../components/Card.js";

import projects from "../Content/projects.json";
import experience from "../Content/experience.json";
import education from "../Content/education.json";

const data = [
  { title: "Experience", data: experience },
  { title: "Projects", data: projects },
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
        Passionate and highly driven computer science major at the University of Minnesota Twin Cities. Eager to learn more about computer science and its applications in software engineering.
      </Text>
      <Text my="15px">
        Seeking a challenging computer science summer internship to expand my knowledge of computer science concepts further, obtain practical experience in the field, and contribute effectively to software development projects
        and teams.
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
