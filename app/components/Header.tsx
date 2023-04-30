"use client";
import { Container, Box } from "@chakra-ui/react";
import React from "react";

export default function Header() {
  return (
    <Box as="header" bg="blue.100">
      <Container >
        <div>Header</div>
      </Container>
    </Box>
  );
}
