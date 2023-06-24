import { Container, Heading, Text, Image, VStack, Box, UnorderedList, ListItem } from "@chakra-ui/react";

import Emoji from "../../Media/Emoji.png";

export default function Test() {
  return (
    <Container maxW="4xl" bg="gray.300" minH="calc(100vh - 200px)">
      <VStack>
        <Heading>Emoji Social</Heading>
        <Heading size="md">Website</Heading>
        <Image src={Emoji} borderRadius="lg" width="md" height="270px" objectFit="cover" />

        <Text>
          Emoji Social is a social media website where users can respond to daily prompts using only emojis. The goal of
          this project was to make a fun and creative twist on social media that prevented the toxicity of most other
          platforms.
        </Text>
      </VStack>
      <Heading size="md" my="10px">
        Skills Used:
      </Heading>
      <UnorderedList>
        <ListItem>Python</ListItem>
        <ListItem>Django</ListItem>
        <ListItem>Bootstrap</ListItem>
        <ListItem>SQL</ListItem>
      </UnorderedList>

      <Box my="30px" />
    </Container>
  );
}
