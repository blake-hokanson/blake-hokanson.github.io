import { Card, CardHeader, CardBody, LinkBox, LinkOverlay, Image, Heading, Text } from "@chakra-ui/react";

import { Link } from "react-router-dom";

import React from "react";

export default function CardObject({ src, title, description, date, href }) {
  return (
    <Card variant="outline" overflow="hidden" bg="gray.200">
      <LinkBox>
        <CardHeader>
          <LinkOverlay as={Link} to={href}>
            <Image src={require(`../Media/${src}`)} rounded="md" width="100%" height="200px" objectFit="cover" />
          </LinkOverlay>
        </CardHeader>

        <CardBody>
          <Heading size="lg">{title}</Heading>
          <Heading size="xs">{date}</Heading>
          <Text>{description}</Text>
        </CardBody>
      </LinkBox>
    </Card>
  );
}

/*

    */
