"use client";
import { Link } from "@chakra-ui/next-js";
import "./globals.css";
import { Box, Flex } from "@chakra-ui/react";
import HomeMenu from "./components/Home/HomeMenu";
import Slider from "./components/Home/Slider";
import Share from "./components/Home/Share";
import FeaturedProducts from "./components/Home/FeaturedProducts";

export default function Home() {
  return (
    <Box as="main" pt='20px'>
      <Flex gap='20px'>
        <Box w="25%">
          <HomeMenu />
        </Box>
        <Box w="75%">
          <Slider />
          <Share />
          <FeaturedProducts />
        </Box>
      </Flex>
    </Box>
  );
}
