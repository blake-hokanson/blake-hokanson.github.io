import { Container, Heading, Image, VStack, Box, UnorderedList, ListItem } from "@chakra-ui/react";

import Cigna from "../../Media/Cigna.png";

export default function Test() {
  return (
    <Container maxW="4xl" bg="gray.300" minH="calc(100vh - 200px)">
      <VStack>
        <Heading>The Cigna Group</Heading>
        <Heading size="md">Minneapolis, MN</Heading>
        <Image src={Cigna} borderRadius="lg" width="md" height="270px" objectFit="cover" />
        <Box my="30px" />
      </VStack>

      <Heading>Experience</Heading>

      <Heading size="md" my="15px">
        Software Engineering Intern - Frontend Developer
      </Heading>
      <Heading size="xs">May 2023 - Aug 2023</Heading>
      <UnorderedList>
        <ListItem>
          Participated as a memeber of the Thrid Party Data Exchange agile developelent team. I developed a web
          application dashbpard for tracking all data leaving Cigna.
        </ListItem>
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
