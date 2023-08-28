import { Container, Heading, Text, Image, VStack, Box, UnorderedList, ListItem } from "@chakra-ui/react";

import Schedule from "../../Media/Schedule.png";

export default function Test() {
  return (
    <Container maxW="4xl" bg="gray.300" minH="calc(100vh - 200px)">
      <VStack>
        <Heading marginTop="30px">Schedule Generator</Heading>
        <Heading size="md">Web App</Heading>
        <Image src={Schedule} borderRadius="lg" width="md" height="270px" objectFit="cover" />

        <Text>
          I developed an application for Valleyfair that streamlined the process of reformatting an Excel spreadsheet
          into a crucial scheduling document. The application featured a user-friendly interface specifically designed
          for Area Supervisors, allowing them to validate schedules efficiently. As a result, employees were able to
          save hours of work each day. Additionally, I maintained the application, ensuring it remained adaptable to any
          changes made in the source Excel spreadsheet.
        </Text>
      </VStack>
      <Heading size="md" my="10px">
        Skills Used:
      </Heading>
      <UnorderedList>
        <ListItem>Python</ListItem>
        <ListItem>Pandas</ListItem>
        <ListItem>Jupyter Notebook</ListItem>
      </UnorderedList>

      <Box py="30px" />
    </Container>
  );
}
