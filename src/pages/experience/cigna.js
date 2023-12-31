import { Container, Heading, Image, VStack, Box, UnorderedList, ListItem } from "@chakra-ui/react";

import Cigna from "../../Media/Cigna.png";

export default function Test() {
  return (
    <Container maxW="4xl" bg="gray.300" minH="calc(100vh - 200px)">
      <VStack>
        <Heading marginTop="30px">The Cigna Group</Heading>
        <Heading size="md">Minneapolis, MN</Heading>
        <Image src={Cigna} borderRadius="lg" width="md" height="270px" objectFit="cover" />
        <Box py="30px" />
      </VStack>

      <Heading>Experience</Heading>

      <Heading size="md" my="15px">
        Software Engineering Intern - Frontend Developer
      </Heading>
      <Heading size="xs">May 2023 - Aug 2023</Heading>
      <UnorderedList>
        <ListItem>
          Software developer with an agile development team, actively participating in scrum ceremonies
        </ListItem>
        <ListItem>
          Contributed to the development of frontend features using AngularJS, HTML, CSS, and Typescript
        </ListItem>
        <ListItem>Worked alongside senior employees to streamline code and improve readability</ListItem>
      </UnorderedList>

      <Heading size="md" my="10px">
        Skills Used:
      </Heading>
      <UnorderedList>
        <ListItem>AngularJS</ListItem>
        <ListItem>TypeScript</ListItem>
        <ListItem>JavaScript</ListItem>
      </UnorderedList>

      <Box py="30px" />
    </Container>
  );
}
