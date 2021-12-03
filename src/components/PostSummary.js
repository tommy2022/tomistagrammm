import React from "react";
import Moment from "react-moment";
import { Image, VStack, Text } from "@chakra-ui/react";

export default function PostSummary({ hovering, title, date, img }) {
  if (!hovering) {
    return <Image m={0} src={img} alt={`Image for post ${title}`} />;
  }
  return (
    <VStack>
      <Text fontSize="xl" maxW="100%">
        {title}
      </Text>
      <Text fontSize="xl" maxW="100%">
        <Moment parse="MM-YYYY" format="MMM YYYY">
          {date}
        </Moment>
      </Text>
    </VStack>
  );
}
