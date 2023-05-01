import { Image, Link } from "@chakra-ui/next-js";
import {
  Box,
  Flex,
  Container,
  List,
  ListItem,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  PopoverHeader,
  Popover,
  PopoverArrow,
} from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";

export default function Menu() {
  return (
    <Box bg="grey.400">
      <Container>
        <List
          color="grey.700"
          fontFamily={"Poppins-600"}
          fontSize={"12px"}
          letterSpacing={"-0.5px"}
          lineHeight={"12px"}
          pt="18px"
          pb="16px"
          display={"flex"}
        >
          <ListItem mr="25px" textTransform={"uppercase"}>
            <Link variant="brandPrimary" href={"/"}>Home</Link>
          </ListItem>
          {/*  category */}

          <ListItem mr="25px">
            <Popover trigger="hover"  placement='bottom' closeOnBlur={false} openDelay={200} >
              <PopoverTrigger>
                <Box px="8px" borderRadius="2px" cursor="pointer">
                  <Link variant="brandPrimary" href={"/"}><Flex gap='5px'>CATEGORIES <FaChevronDown fontSize={'10px'} /></Flex></Link>
                </Box>
              </PopoverTrigger>
              <PopoverContent border="0" borderRadius="0" top="2px">
                {/*                 <PopoverHeader p="0"  boxShadow={'0 10px 25px rgba(0,0,0,0.15)'}>
                  <Flex alignItems="center">
                    <Box
                      ms="4px"
                      as="span"
                      textTransform="uppercase"
                      fontSize="12px"
                      fontWeight="600"
                    >
                      Low resolution image preview.
                    </Box>
                  </Flex>
                </PopoverHeader> */}
                <PopoverArrow bg="white" />
                <PopoverBody
                  p="10px"
                  bg="white"
                  color="coolGrey.600"
                  boxShadow={"0 10px 25px rgba(0,0,0,0.15)"}
                  w="600px"
                >
                  <Flex p="15px 10px 0" w="600px">
                    <List
                      w="33.333%"
                      color="black.300"
                      fontSize={"12px"}
                      lineHeight="18px"
                    >
                      <ListItem pb="5px" fontFamily={"Poppins-700"}>
                        VARIATIONS 1
                      </ListItem>
                      <List
                        fontSize={"12px"}
                        lineHeight="18px"
                        color="grey.900"
                      >
                        <ListItem
                          fontWeight={500}
                          py="7px"
                          fontFamily={"Poppins-500"}
                        >
                          <Link href={"/"}> Full Width Banner</Link>
                        </ListItem>
                        <ListItem py="7px" fontFamily={"Poppins-500"}>
                          <Link href={"/"}> No Sidebar Banner</Link>
                        </ListItem>
                        <ListItem py="7px" fontFamily={"Poppins-500"}>
                          <Link href={"/"}>Infinite Ajax Scroll</Link>
                        </ListItem>
                        <ListItem py="7px" fontFamily={"Poppins-500"}>
                          <Link href={"/"}> Horizontal Filter 1NEW</Link>
                        </ListItem>
                        <ListItem py="7px" fontFamily={"Poppins-500"}>
                          <Link href={"/"}> Horizontal Filter 2NEW</Link>
                        </ListItem>
                        <ListItem py="7px" fontFamily={"Poppins-500"}>
                          <Link href={"/"}> Off Canvas FilterNEW</Link>
                        </ListItem>
                        <ListItem py="7px" fontFamily={"Poppins-500"}>
                          <Link href={"/"}> Image, Color SwatchNEW</Link>
                        </ListItem>
                        <ListItem py="7px" fontFamily={"Poppins-500"}>
                          <Link href={"/"}> With Right Sidebar</Link>
                        </ListItem>
                        <ListItem py="7px" fontFamily={"Poppins-500"}>
                          <Link href={"/"}> With Right Sidebar</Link>
                        </ListItem>
                      </List>
                    </List>
                    {/* 2 */}
                    <List
                      w="33.333%"
                      color="black.300"
                      fontSize={"12px"}
                      lineHeight="18px"
                    >
                      <ListItem pb="5px" fontFamily={"Poppins-700"}>
                        VARIATIONS 1
                      </ListItem>
                      <List
                        fontSize={"12px"}
                        lineHeight="18px"
                        color="grey.900"
                      >
                        <ListItem
                          fontWeight={500}
                          py="7px"
                          fontFamily={"Poppins-500"}
                        >
                          <Link href={"/"}> Full Width Banner</Link>
                        </ListItem>
                        <ListItem py="7px" fontFamily={"Poppins-500"}>
                          <Link href={"/"}> No Sidebar Banner</Link>
                        </ListItem>
                        <ListItem py="7px" fontFamily={"Poppins-500"}>
                          <Link href={"/"}>Infinite Ajax Scroll</Link>
                        </ListItem>
                        <ListItem py="7px" fontFamily={"Poppins-500"}>
                          <Link href={"/"}> Horizontal Filter 1NEW</Link>
                        </ListItem>
                        <ListItem py="7px" fontFamily={"Poppins-500"}>
                          <Link href={"/"}> Horizontal Filter 2NEW</Link>
                        </ListItem>
                        <ListItem py="7px" fontFamily={"Poppins-500"}>
                          <Link href={"/"}> Off Canvas FilterNEW</Link>
                        </ListItem>
                        <ListItem py="7px" fontFamily={"Poppins-500"}>
                          <Link href={"/"}> Image, Color SwatchNEW</Link>
                        </ListItem>
                        <ListItem py="7px" fontFamily={"Poppins-500"}>
                          <Link href={"/"}> With Right Sidebar</Link>
                        </ListItem>
                        <ListItem py="7px" fontFamily={"Poppins-500"}>
                          <Link href={"/"}> With Right Sidebar</Link>
                        </ListItem>
                      </List>
                    </List>
                    {/* image */}
                    <List w="33.333%">
                      <ListItem mt="-15px">
                        <Image
                          src="/assets/img/shop.jpg"
                          width={187}
                          height={331}
                          alt="image1"
                          pr='5px'
                        />
                      </ListItem>
                    </List>
                  </Flex>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </ListItem>
        </List>
      </Container>
    </Box>
  );
}
