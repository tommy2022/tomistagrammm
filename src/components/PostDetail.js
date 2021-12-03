import React, { useState } from "react";
import {
  Box,
  Center,
  Flex,
  ModalOverlay,
  ModalCloseButton,
  ModalContent,
  ModalBody,
  Image,
  VStack,
  HStack,
  Text,
  Heading,
  AspectRatio,
} from "@chakra-ui/react";
import { IconContext } from "react-icons";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

const jib =
  "Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis. Sunt ad dolore quis aute consequat. Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis. Sunt ad dolore quis aute consequat. Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis. Sunt ad dolore quis aute consequat. Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.";

export default function PostDetail({ content }) {
  const { title, description, img, date, updated } = content;
  const [liked, setLiked] = useState(false);

  const heart_color = "237,73,86";
  return (
    <>
      <ModalOverlay />
      <ModalContent m={15} height="80vh">
        <Box h="100%" bg="black">
          <Flex h="100%" w="100%">
            <Center flex="1" maxH="100%">
              <Image src={img} w="100%" />
            </Center>
            <Box h="100%" maxW="500px" width="45%" bg="white">
              <ModalCloseButton />
              <VStack h="100%">
                <Box h="49px" width="100%">
                  <Heading
                    as="h4"
                    size="md"
                    justifyContent="flex-start"
                    my={3}
                    mx={6}
                  >
                    {title}
                  </Heading>
                  <hr />
                </Box>
                <ModalBody>{jib}</ModalBody>
                <Box h="70px" w="100%">
                  <hr />
                  <VStack w="100%" px={2}>
                    <Box m={0} w="100%" justifyContent="flex-start">
                      <IconContext.Provider
                        value={{
                          color: liked ? `rgb(${heart_color})` : "black",
                          className: "global-class-name",
                          size: "22px",
                        }}
                      >
                        <div style={{ display: "inline-block", margin: "5px" }}>
                          {liked ? (
                            <FaHeart onClick={() => setLiked(!liked)} />
                          ) : (
                            <FaRegHeart onClick={() => setLiked(!liked)} />
                          )}
                        </div>
                      </IconContext.Provider>
                      <IconContext.Provider
                        value={{
                          className: "global-class-name",
                          size: "22px",
                        }}
                      >
                        <div style={{ display: "inline-block", margin: "5px" }}>
                          <FiSend />
                        </div>
                      </IconContext.Provider>
                    </Box>
                    <Box
                      m={0}
                      w="100%"
                      justifyContent="flex-start"
                      style={{ fontWeight: "bold" }}
                    >
                      &#8501; {liked ? " + 1" : ""} Likes
                    </Box>
                  </VStack>
                </Box>
              </VStack>
            </Box>
          </Flex>
        </Box>
      </ModalContent>
    </>
  );
}
