import React from "react";
import { Image, Container } from "@chakra-ui/react";

export default function Bio() {
  return (
    <Container m={2}>
      <Image
        borderRadius="full"
        boxSize={[100, 125, 150, 200]}
        src="pfp.jpg"
        alt="Profile Picture"
      />
    </Container>
  );
}
