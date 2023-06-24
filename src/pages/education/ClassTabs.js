import { Container, Heading, Text, Tab, Tabs, TabList, TabPanel, TabPanels, Center } from "@chakra-ui/react";

export default function ClassTabs({ name, data }) {
  return (
    <>
      <Heading size="md">{name}</Heading>
      <Container bg="gray.200" borderRadius="xl" maxW="3xl">
        <Tabs variant="soft-rounded" colorScheme="blue" isFitted>
          <TabList>
            {data.map((data, index) => (
              <Tab key={index}>{data.num}</Tab>
            ))}
          </TabList>

          <TabPanels>
            {data.map((data, index) => (
              <TabPanel key={index}>
                <Center>
                  <Heading size="sm">{data.name}</Heading>
                </Center>
                <Text>{data.subtitle}</Text>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Container>
    </>
  );
}
