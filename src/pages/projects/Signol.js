import { Container, Heading, Text, Image, VStack, Box, UnorderedList, ListItem } from "@chakra-ui/react";

import Stock from "../../Media/Stock.png";

export default function Test() {
  return (
    <Container maxW="4xl" bg="gray.300" minH="calc(100vh - 200px)">
      <VStack>
        <Heading marginTop="30px">Project Signol</Heading>
        <Heading size="md">Framework and Discord Bot</Heading>
        <Image src={Stock} borderRadius="lg" width="md" height="270px" objectFit="cover" />

        <Text>
          I programmed a robust framework to test stock day-trading strategies across a portfolio of 500+ stocks and
          ETFs. Collaborating with experienced traders, we conducted extensive backtesting of various strategies using
          10 years of historical data. Presently, we are actively live testing these strategies and providing trade
          notifications to a user base of 1200 individuals, offering them valuable insights into potential trades.
        </Text>
      </VStack>
      <Heading size="md" my="10px">
        Skills Used:
      </Heading>
      <UnorderedList>
        <ListItem>Python</ListItem>
        <ListItem>Pandas</ListItem>
        <ListItem>SQLite</ListItem>
      </UnorderedList>

      <Box py="30px" />
    </Container>
  );
}
