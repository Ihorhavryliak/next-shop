"use client";
import { Image, Link } from "@chakra-ui/next-js";
import {
  Container,
  Box,
  Flex,
  Text,
  List,
  ListItem,
  Input,
  InputGroup,
  InputRightAddon,
  IconButton,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaSistrix } from "react-icons/fa";
import { BsTelephone, BsBag, BsHeart, BsPerson } from "react-icons/bs";

export default function Header() {
  const [input, setInput] = useState("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value);
  return (
    <Box as="header">
      <Box bg="blue.100">
        <Container py="4px">
          {/* top header info */}
          <Flex
            justifyContent="space-between"
            alignItems="center"
            color="textColor.100"
            fontWeight="600"
            lineHeight="32px"
            fontFamily="Poppins-600"
            fontSize="11px"
            letterSpacing=".275px"
          >
            <Flex alignItems="center">
              <Text>USD</Text>
            </Flex>
            <Flex alignItems="center">
              <Box pr="24px">WELCOME TO SHOP!</Box>
              <List as="ul" display="flex" alignItems="center">
                <ListItem px="26px">CONTACT US</ListItem>
                <ListItem px="26px">MY ACCOUNT</ListItem>
                <ListItem px="26px">MY WISHLISTCART</ListItem>
                <ListItem px="26px">LOG IN</ListItem>
              </List>
              <Flex className="header-left-divider">
                <Link
                  ms="10px"
                  p="5px"
                  borderRadius="50%"
                  href={"/"}
                  _hover={{ color: "#fff", background: "blue.800" }}
                >
                  <FaFacebookF fontSize={"14px"} />
                </Link>
                <Link
                  p="5px"
                  borderRadius="50%"
                  href={"/"}
                  _hover={{ color: "#fff", background: "blue.300" }}
                >
                  <FaTwitter fontSize={"14px"} />
                </Link>
                <Link
                  p="5px"
                  borderRadius="50%"
                  href={"/"}
                  _hover={{ color: "#fff", background: "grey.100" }}
                >
                  <FaInstagram fontSize={"14px"} />
                </Link>
              </Flex>
            </Flex>
          </Flex>
        </Container>
      </Box>
      {/* header */}
      <Container>
        <Flex justifyContent="space-between">
          <Box my="27px" mr="1rem">
            <Image
              src={"/assets/img/Header/Logo.png"}
              width={111}
              height={42}
              alt="Logo"
            />
          </Box>
          <Flex alignItems={"center"} w={"100%"} justifyContent="flex-end">
            {/* input */}
            <Box px="1.5rem" ms="3rem" w={"100%"} maxWidth={"437px"}>
              <InputGroup>
                <Input
                  w={"100%"}
                  maxWidth={"437px"}
                  ps={"20px"}
                  borderLeftRadius="20px"
                  borderRightRadius="20px"
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Search..."
                  color="grey.800"
                  bg={"grey.300"}
                  h="40px"
                  borderColor={"grey.300"}
                  _focus={{ borderColor: "grey.300" }}
                />
                <InputRightElement
                  h="40px"
                  w={"60px"}
                  borderLeft="1px"
                  borderColor={"grey.200"}
                >
                  <IconButton
                    borderRightRadius="20px"
                    borderLeftRadius="0"
                    aria-label="Search"
                    color="grey.500"
                    bg={"grey.300"}
                    height="40px"
                    w={"60px"}
                    icon={
                      <FaSistrix
                        height="40px"
                        fontSize="18px"
                        color="#606669"
                      />
                    }
                  />
                </InputRightElement>
              </InputGroup>
            </Box>
            {/*  call now */}
            <Flex px="20px" mr="0.875rem">
              <Box mr="8px">
                <BsTelephone fontSize="28px" color="#222529" />
              </Box>
              <Box>
                <Text
                  fontFamily="Poppins-600"
                  fontWeight="600"
                  fontSize="11px"
                  lineHeight="1.2em"
                  textTransform="uppercase"
                  color={"grey.600"}
                >
                  CALL US NOW
                </Text>
                <Text
                  color={"black.100"}
                  fontFamily={"Poppins-700"}
                  fontWeight="700"
                  fontSize="18px"
                  lineHeight="1.1em"
                >
                  +123 5678 890
                </Text>
              </Box>
            </Flex>
            {/*  icons */}
            <Flex alignItems={"center"}>
              <Box px="0.125rem" mr="0.875rem">
                <BsPerson fontSize={"30px"} color="#222529" />
              </Box>
              <Box px="0.125rem" mr="0.875rem" position="relative">
                <BsHeart fontSize={"28px"} color="#222529" />
                <Box
                  as="span"
                  position="absolute"
                  top="-5px"
                  fontSize="10px"
                  fontFamily={"Poppins-600"}
                  fontWeight="600"
                  textAlign="center"
                  width="16px"
                  height="16px"
                  lineHeight="16px"
                  borderRadius="50%"
                  overflow="hidden"
                  color="white"
                  backgroundColor="red.100"
                  right="-0.25rem"
                >
                  0
                </Box>
              </Box>
              <Box ps="0.125rem">
                <BsBag fontSize={"28px"} color="#222529" />
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
