import React, { useState } from "react";
import { AspectRatio, Button } from "@chakra-ui/react";

import PostSummary from "./PostSummary";

export default function Post({ content, action }) {
  const [hovering, setHovering] = useState(false);
  const onHover = () => {
    setHovering(true);
  };
  const onLeave = () => {
    setHovering(false);
  };
  return (
    <AspectRatio ratio={1}>
      <Button
        p={0}
        height="80px"
        onClick={() => action(content)}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        style={{
          whiteSpace: "normal",
          wordWrap: "break-word",
        }}
      >
        <PostSummary
          hovering={hovering}
          title={content.title}
          date={content.date}
          img={content.img}
        />
      </Button>
    </AspectRatio>
  );
}
