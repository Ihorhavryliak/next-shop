import { Link } from "@chakra-ui/next-js";
import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const images = [
  { url: "/assets/img/share/d1.jpg", title: "beach" },
  { url: "/assets/img/share/d1.jpg", title: "boat" },
  { url: "/assets/img/share/d3.jpg", title: "boat" },
];

export default function Share() {
  return (
    <Flex w="100%" gap="20px" mt="25px">
      {images.map((image, i) => {
        return (
          <Box
            key={i}
            backgroundImage={`url(${image.url})`}
            backgroundSize="cover"
            backgroundRepeat="repeat"
            backgroundPosition="center center"
            backgroundColor="rgba(0, 0, 0, 0)"
            minHeight="170px"
            w={"280px"}
            _hover={{
              boxShadow: '0px 0px 30px 0px rgba(0,0,0,0.1)'
            }}
          >
            <Flex alignItems={"center"} h="100%" ps="7%">
              <Box>
                <Text
                  fontSize="1.5rem"
                  lineHeight="1"
                  mb="0.5rem"
                  fontFamily="Poppins-700"
                  color="black.100"
                  as="h3"
                >
                  News Watches
                </Text>
                <Flex mt="calc(var(0) * -1)">
                  <Text
                    as="h4"
                    fontSize="20.3px"
                    lineHeight="1.1em"
                    letter-Spacing="-1.45px"
                    mr="3px"
                    fontFamily="Poppins-700"
                    textDecoration="line-through "
                  >
                    20%
                  </Text>
                  <Text as="h4"
                  fontSize='1.8125rem'
                  lineHeight="1.1em"
                  fontFamily="Poppins-800"
                  color='blue.200'
                  >30%</Text>
                  <Text as="h4"
                    fontSize='20.3px'
                    color='blue.200'
                    lineHeight="1.1em"
                    letter-Spacing="-1.45px"
                    fontFamily="Poppins-700"
                  >OFF</Text>
                </Flex>
                <Link variant={'clearHome'} href="/">Shop now</Link>
              </Box>
            </Flex>
          </Box>
        );
      })}
    </Flex>
  );
}
