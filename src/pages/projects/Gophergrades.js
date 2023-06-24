import { Container, Heading, Text, Image, VStack, Box, UnorderedList, ListItem } from "@chakra-ui/react";

import GGPhoto from "../../Media/Gophergrades.jpg";

export default function Test() {
  return (
    <Container maxW="4xl" bg="gray.300" minH="calc(100vh - 200px)">
      <VStack>
        <Heading>Gopher Grades</Heading>
        <Heading size="md">A Chrome Extension</Heading>
        <Image src={GGPhoto} borderRadius="lg" width="100%" height="270px" objectFit="cover" />

        <Text>
          Gopher Grades is a program allowing transparency within the University of Minnesota by displaying grade
          distributions for all classes. The website, with over 1.7 million views, provides students with an easy way to
          search for classes, and the Chrome extension displays all the grade distributions on the university’s
          scheduling website.I worked on adding a way to export students’ schedules to Google Calendar or any other
          calendar application through Google OAuth or ics files. So far the Chrome extension has over one thousand
          downloads.
        </Text>
      </VStack>
      <Heading size="md" my="10px">
        Skills Used:
      </Heading>
      <UnorderedList>
        <ListItem>Javascript</ListItem>
        <ListItem>Html</ListItem>
        <ListItem>CSS</ListItem>
      </UnorderedList>

      <Box my="30px" />
    </Container>
  );
}
