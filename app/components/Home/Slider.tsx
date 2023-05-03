"use client";

import { Image } from "@chakra-ui/next-js";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { LegacyRef, useCallback, useEffect, useRef, useState } from "react";

const slides = [
  { url: "/assets/img/slider/s1.png", title: "beach" },
  { url: "/assets/img/slider/s2.jpg", title: "boat" },
  { url: "/assets/img/slider/s3.jpg", title: "boat" },
];

export default function Slider() {
  const timerRef = useRef<number | undefined>(undefined);
  const [currentIndex, setCurrentIndex] = useState(0);

  const ref = useRef<HTMLElement>(null);

  const [width, setWidth] = useState(0);
  const [countHight, setCountHight] = useState(500);

  const parentWidth = width;
  console.log(countHight, "countHight");
  console.log(width, "width");

  useEffect(() => {
    if (ref.current) {
      setWidth(ref.current.clientWidth + 15);
      setCountHight(500 - (880 - ref.current.clientWidth));
    }
    function handleWindowResize() {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);

        if (ref.current.offsetWidth <= 879) {
          setCountHight(500 - (880 - ref.current.offsetWidth));
        }
      }
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides]);

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  /* useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      goToNext();
    }, 9000) as unknown as number;

    return () => clearTimeout(timerRef.current);
  }, [goToNext]); */

  return (
    <Box
      ref={ref as LegacyRef<HTMLDivElement>}
      width="100%"
      height={`${countHight}px`}
      margin="0 auto"
      maxWidth={"880px"}
    >
      <Box position="relative" h="100%">
        {/* <Box>
          <Box
            onClick={goToPrevious}
            position="absolute"
            top="50%"
            transform="translate(0, -50%)"
            left="32px"
            fontSize="45px"
            color="#fff"
            zIndex="1"
            cursor="pointer"
          >
            ❰
          </Box>
          <Box
            onClick={goToNext}
            position="absolute"
            top="50%"
            transform="translate(0, -50%)"
            right="32px"
            fontSize="45px"
            color="#fff"
            zIndex="1"
            cursor="pointer"
          >
            ❱
          </Box>
        </Box> */}
        <Box overflow="hidden" height="100%">
          <Flex
            height="100%"
            //transition: "transform ease-out 0.3s",
            width={`${parentWidth * slides.length}px`}
            //transform={`translateX(${-(currentIndex * parentWidth)}px)`}
          >
            {slides.map((_, slideIndex) => (
              <Box key={slideIndex}>
                {slideIndex === 0 && (
                  <Flex
                    w="100%"
                    position="absolute"
                    alignItems="center"
                    height="100%"
                    ps="5.5%"
                    zIndex='2'
                  >
                    <Box>
                      <Text
                        as="h4"
                        fontFamily="Poppins-500"
                        color="whiteObj.200"
                        lineHeight="1"
                        letterSpacing="1.2px"
                        mb="0.5rem"
                      >
                        Find the Boundaries. Push Through!
                      </Text>
                      <Text
                        as="h2"
                        fontSize="3.07em"
                        color="white"
                        lineHeight={1}
                        fontWeight="700"
                        letterSpacing="0.1px"
                        fontFamily="Segoe"
                      >
                        Summer Sale
                      </Text>
                      <Text
                        as="h3"
                        fontSize="5.43em"
                        color="white"
                        lineHeight={1}
                        fontFamily="Poppins-700"
                        mb="1rem"
                      >
                        70% OFF
                      </Text>
                      <Flex>
                        <Text
                          as="h4"
                          color="white"
                          fontSize="11px"
                          lineHeight="1"
                          fontFamily="Poppins-600"
                          letter-spacing="-0.2px"
                          textTransform="uppercase"
                          pt='10px'
                          mr='1rem'
                        >
                          Starting At
                        </Text>
                        <Text
                          fontSize="1.71em"
                          fontFamily="Poppins-700"
                          lineHeight="1"
                          p="7px"
                          color="white"
                          bg="red.200"
                          transform="rotateZ(-2deg)"
                          h='38px'
                          mr='0.5rem'
                        >
                          <Box as="sup" fontSize="50%" top="-0.5em">
                            $
                          </Box>
                          199
                          <Box as="sup" fontSize="50%" top="-0.5em">99</Box>
                        </Text>
                        <Button
                        variant={'blackOne'}
                        >
                          Shop now
                        </Button>
                      </Flex>
                    </Box>
                  </Flex>
                )}
                <Box
                  //height="100%"
                  backgroundSize="cover"
                  //backgroundPosition="center"
                  transition="transform ease-out 0.3s"
                  //src={slides[slideIndex].url as string}
                  transform={`translateX(${-(currentIndex * parentWidth)}px)`}
                  backgroundImage={`url(${slides[slideIndex].url})`}
                  width={parentWidth}
                  key={slideIndex}
                  objectFit="cover"
                  //style={getSlideStylesWithBackground(slideIndex)}
                  //alt={"des"}
                  height={countHight}
                />
              </Box>
            ))}
          </Flex>
          {/* buttons */}
          <Box ps="5.5%" display="flex" position="absolute" bottom="5.5%" zIndex={3}>
            {slides.map((slide, slideIndex) => (
              <Box
                margin="0 3px"
                cursor="pointer"
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className={currentIndex === slideIndex ? 'dot active' : 'dot'}
              >
                <Box
                display='block'
                borderRadius='30px'
                w='14px' h='14px' position='relative' as='span' border='2px' borderColor="black.100"></Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
