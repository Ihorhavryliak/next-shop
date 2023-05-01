import { Image, Link } from "@chakra-ui/next-js";
import {
  Box,
  Flex,
  ListItem,
  PopoverArrow,
  PopoverBody,
  List,
  PopoverTrigger,
  Popover,
  PopoverContent,
} from "@chakra-ui/react";
import { FaChevronRight, FaCoffee } from "react-icons/fa";

export default function MainMenu() {
  return (
    <List
      color="grey.1000"
      fontFamily={"Poppins-600"}
      letterSpacing={"-.02em"}
      border="1px"
      borderColor={"grey.200"}
    >
      {/*  category */}

      <ListItem _hover={{ bg: "whiteObj.100" }}>
        <Popover
          trigger="hover"
          placement="right-end"
          closeOnBlur={false}
          openDelay={200}
        >
          <PopoverTrigger>
            <Link variant="brandClear" href={"/"} cursor="pointer">
              <Flex
                p="14.5px 17px 14.5px 17px"
                gap="5px"
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Flex alignItems={"center"} gap="8px">
                  <FaCoffee fontSize={"18px"} />
                  Fashion
                </Flex>
                <Box as="span">
                  <FaChevronRight fontSize={"10px"} />
                </Box>
              </Flex>
            </Link>
          </PopoverTrigger>
          {/* show menu */}
          <PopoverContent border="0" borderRadius="0" top="2px">
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
                  <List fontSize={"12px"} lineHeight="18px" color="grey.900">
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
                  <List fontSize={"12px"} lineHeight="18px" color="grey.900">
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
                      pr="5px"
                    />
                  </ListItem>
                </List>
              </Flex>
            </PopoverBody>
          </PopoverContent>
        </Popover>
        </ListItem>
        <ListItem _hover={{ bg: "whiteObj.100" }}>
        {/* Popover 2 */}
        <Popover
          trigger="hover"
          placement="right-end"
          closeOnBlur={false}
          openDelay={200}
        >
          <PopoverTrigger>
            <Link variant="brandClear" href={"/"} cursor="pointer">
              <Flex
                mt='1px'
                borderTop="1px"
                borderColor={"grey.200"}
                p="14.5px 17px 14.5px 17px"
                gap="5px"
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Flex alignItems={"center"} gap="8px">
                  <FaCoffee fontSize={"18px"} />
                  Fashion
                </Flex>
                <Box as="span">
                  <FaChevronRight fontSize={"10px"} />
                </Box>
              </Flex>
            </Link>
          </PopoverTrigger>
          {/* show menu */}
          <PopoverContent border="0" borderRadius="0" top="2px">
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
                  <List fontSize={"12px"} lineHeight="18px" color="grey.900">
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
                  <List fontSize={"12px"} lineHeight="18px" color="grey.900">
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
                      pr="5px"
                    />
                  </ListItem>
                </List>
              </Flex>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </ListItem>
    </List>
  );
}
