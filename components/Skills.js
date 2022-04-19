import React from "react";
import {
  Box,
  HStack,
  Link,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

export default function Skills({ item }) {
  return (
    <HStack textAlign={{ base: "left", md: "right" }} mb="8px" w="100%">
      <Text
        pr="20px"
        pl={{ base: "20px" }}
        w="100%"
        letterSpacing="2px"
        color={"black"}
        fontSize="lg"
      >
        {item.skill}
      </Text>
    </HStack>
  );
}
