import { Container, Heading, Image, VStack, Box, UnorderedList, ListItem } from "@chakra-ui/react";

import Valleyfair from "../../Media/Valleyfair.png";

export default function Test() {
  return (
    <Container maxW="4xl" bg="gray.300" minH="calc(100vh - 200px)">
      <VStack>
        <Heading marginTop="30px">Valleyfair Amusement Park</Heading>
        <Heading size="md">Shakopee, MN</Heading>
        <Image src={Valleyfair} borderRadius="lg" width="md" height="270px" objectFit="cover" />
        <Box py="30px" />
      </VStack>

      <Heading>Experience</Heading>

      <Heading size="md" my="15px">
        Food and Beverage Area Supervisor
      </Heading>
      <Heading size="xs">Jul 2021 - Aug 2022</Heading>
      <UnorderedList>
        <ListItem>
          Co-supervised the foods department, including 50 employees, 11 food stands, and $90,000 daily revenue.
        </ListItem>
        <ListItem>Oversaw the Team Leads in successfully managing each individual food stand. </ListItem>
        <ListItem>Managed time cards and assisted in adjusting schedules.</ListItem>
      </UnorderedList>

      <Heading size="md" my="15px">
        Food and Beverage Team Lead
      </Heading>
      <Heading size="xs">Jun 2021 - Jul 2021</Heading>
      <UnorderedList>
        <ListItem>
          Led a team of 15 employees in daily operations of Beach Bites food stand with over one million dollars in
          annual sales.
        </ListItem>
        <ListItem>Responsible for training, inventory, health standard compliance, and customer service.</ListItem>
        <ListItem> Awarded Associate of the Month for July 2021.</ListItem>
      </UnorderedList>

      <Heading size="md" my="15px">
        Food and Beverage Associate
      </Heading>
      <Heading size="xs">Jun 2021</Heading>
      <UnorderedList>
        <ListItem>Providing customer service, cleaning the building, cooking food, and serving food.</ListItem>
      </UnorderedList>

      <Box py="30px" />
    </Container>
  );
}
