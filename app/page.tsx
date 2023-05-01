"use client";
import { Link } from "@chakra-ui/next-js";
import "./globals.css";
import { Box, Flex } from "@chakra-ui/react";
import HomeMenu from "./components/Home/HomeMenu";
import Slider from "./components/Home/Slider";

export default function Home() {
  return (
    <Box as="main" pt='20px'>
      <Flex>
        <Box w="25%">
          <HomeMenu />
        </Box>
        <Box w="75%">
          <Slider />
        </Box>
      </Flex>
    </Box>
  );
}
