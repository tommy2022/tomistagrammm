import React, { useState } from "react";
import { SimpleGrid, Modal, useDisclosure } from "@chakra-ui/react";
import Post from "./Post";
import PostDetail from "./PostDetail";

const postNotFound = {
  title: "Post not found",
  description: "Something wrong happened :(",
  img: "/notfound.jpeg",
  date: "12-2001",
  updated: false,
};

export default function Gallery({ contents }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentPost, setCurrentPost] = useState(postNotFound);

  const clickPost = (content) => {
    setCurrentPost(content);
    onOpen();
  };
  return (
    <>
      <Modal onClose={onClose} size={"5xl"} isOpen={isOpen} scrollBehavior="inside" isCentered>
        <PostDetail content={currentPost} />
      </Modal>
      <SimpleGrid columns={[2, null, 3]} spacing="5%">
        {contents.map((content, i) => (
          <Post content={content} action={clickPost} key={i} />
        ))}
      </SimpleGrid>
    </>
  );
}
