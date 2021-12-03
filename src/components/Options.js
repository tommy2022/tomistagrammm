import React from "react";
import { Link } from "react-router-dom";
import { Container, Box, Center, HStack } from "@chakra-ui/react";

export default function Options() {
  return (
    <Container maxW="44em">
      <Center>
        <HStack spacing={12}>
          <Link to="/">
            <Box component="span">Project</Box>
          </Link>
          <Link to="/experience">
            <Box component="span">Experience</Box>
          </Link>
          <Link to="/other">
            <Box component="span">Other</Box>
          </Link>
        </HStack>
      </Center>
    </Container>
  );
}
