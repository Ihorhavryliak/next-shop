import { Image, Link } from "@chakra-ui/next-js";
import { Box, Flex, Text } from "@chakra-ui/react";
import {
  DragEventHandler,
  LegacyRef,
  useEffect,
  useRef,
  useState,
} from "react";

const product = [
  {
    id: 232,
    name: "Product 1",
    title: null,
    description: null,
    price: 1,
    count: 1,
    image: [
      { url: "/assets/img/featured/c1.jpg", title: "beach" },
      { url: "/assets/img/featured/c2.jpg", title: "beach" },
      { url: "/assets/img/featured/c3.jpg", title: "beach" },
      { url: "/assets/img/featured/c3.jpg", title: "beach" },
      { url: "/assets/img/featured/c1.jpg", title: "beach" },
      { url: "/assets/img/featured/c2.jpg", title: "beach" },
    ],
    cart_id: null,
    orders_id: null,
    createdAt: "2023-04-24T11:19:43.198Z",
    updatedAt: "2023-04-24T11:19:43.198Z",
    categories: [],
  },
];

export default function FeaturedProducts() {
  const [width, setWidth] = useState(0);
  const [start, setStart] = useState(0);
  const [change, setChange] = useState(9);

  const [current, setCurrent] = useState(0);

  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sliderRef.current) return;
    setWidth(sliderRef.current.scrollWidth);
    setCurrent(sliderRef.current.offsetWidth /*  + 13 */);
  }, [sliderRef.current?.offsetWidth as number]);

  const plusSlides = () => {
    if (!sliderRef.current) return;

    if (width >= current + sliderRef.current.offsetWidth) {
      sliderRef.current.scrollLeft = current + sliderRef.current.offsetWidth;
      setCurrent(current + sliderRef.current.offsetWidth);
    }
  };

  const minusSlides = () => {
    if (!sliderRef.current) return;

    if (sliderRef.current.offsetWidth <= current) {
      sliderRef.current.scrollLeft =
        current - sliderRef.current.offsetWidth - sliderRef.current.offsetWidth;
      setCurrent(current - sliderRef.current.offsetWidth);
    }
  };
  //drag
  const dragStart = (e: React.DragEvent<HTMLDivElement>) => {
    if (sliderRef.current) {
      setStart(sliderRef.current.offsetWidth);
    }
  };

  const dragOver = (e: React.DragEvent<HTMLDivElement>) => {
    setChange(start - e.clientX);
  };

  const dragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    if (change > 0) {
      if (sliderRef.current) {
        sliderRef.current.scrollLeft += sliderRef?.current?.childElementCount;
      }
    } else {
      if (sliderRef.current) {
        sliderRef.current.scrollLeft -= sliderRef?.current?.childElementCount;
      }
    }
  };

  return (
    <Box as="section" backgroundColor="white" padding="1px">
      <Box
        width="100%"
        border="1px solid #eee"
        padding="5px"
        overflow="hidden"
        position="relative"
      >
        <Flex>
          <Box
            width="auto"
            fontWeight="bold"
            fontSize="20px"
            borderRadius="0 3px 3px 0"
            cursor={"pointer"}
            onClick={() => minusSlides()}
          >
            &#10094;
          </Box>
          <Box
            width="auto"
            fontWeight="bold"
            fontSize="20px"
            borderRadius="3px 0 0 3px"
            cursor={"pointer"}
            onClick={() => plusSlides()}
          >
            &#10095;
          </Box>
        </Flex>
        <Flex
          width="100%"
          overflowX="scroll"
          userSelect="none"
          draggable={true}
          className="slider"
          onDragStart={dragStart}
          onDragOver={dragOver}
          onDragEnd={dragEnd}
          ref={sliderRef}
        >
          {product[0].image.map((image, index) => {
            return (
              <Box
                key={index}
                width="200px"
                minWidth="200px"
                cursor="pointer"
                overflow="hidden"
                mr="20px"
              >
                <Image
                  src={image.url}
                  height={200}
                  width={200}
                  alt={image.title}
                  objectFit="cover"
                  style={{ objectFit: "cover" }}
                  display="inline-block"
                />
                <Box
                  fontSize=".625rem"
                  textTransform="uppercase"
                  lineHeight="1.7"
                  color="grey.600"
                >
                  <Link href="/">COM, HEADPHONE</Link>
                </Box>
                <Text
                as='h4'
                    fontSize= '.9375rem'
                    lineHeight= '1.35'
                    letterSpacing= '-.01em'
                    mb='7px'
                >
                  <Link href="/">Name</Link>
                </Text>
                <Box>start</Box>
                <Box>price</Box>
              </Box>
            );
          })}
        </Flex>
      </Box>
    </Box>
  );
}
