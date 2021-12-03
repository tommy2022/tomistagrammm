import React, { useState } from "react";
import Gallery from "./Gallery";

const projects = [
  {
    title: "Sudoku Website",
    description: "its a sudoku website",
    img: "/pfp.jpg",
    date: "01-2021",
    updated: true,
  },
  {
    title: "Sudoku Website",
    description: "its a sudoku website",
    img: "/pfp.jpg",
    date: "01-2021",
    updated: true,
  },
  {
    title: "Sudoku Website",
    description: "its a sudoku website",
    img: "/pfp.jpg",
    date: "01-2021",
    updated: true,
  },
  {
    title: "Sudoku Website",
    description: "its a sudoku website",
    img: "/notfound.jpeg",
    date: "01-2021",
    updated: true,
  },
];

export default function Projeect() {
  return <Gallery contents={projects} />;
}
