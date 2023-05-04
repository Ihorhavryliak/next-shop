import { Image } from "@chakra-ui/next-js";
import { Box } from "@chakra-ui/react";
import {
  DragEventHandler,
  LegacyRef,
  useEffect,
  useRef,
  useState,
} from "react";

const images = [
  { url: "/assets/img/slider/s1.png", title: "beach" },
  { url: "/assets/img/slider/s2.jpg", title: "boat" },
  { url: "/assets/img/slider/s3.jpg", title: "boat" },
  { url: "/assets/img/slider/s1.png", title: "beach" },
  { url: "/assets/img/slider/s2.jpg", title: "boat" },
  { url: "/assets/img/slider/s3.jpg", title: "boat" },
  { url: "/assets/img/slider/s1.png", title: "beach" },
  { url: "/assets/img/slider/s2.jpg", title: "boat" },
  { url: "/assets/img/slider/s3.jpg", title: "boat" },
];

export default function ProductGallery() {
  const [sliderIndex, setSliderIndex] = useState(1);

  const [width, setWidth] = useState(0);
  const [start, setStart] = useState(0);
  const [change, setChange] = useState(9);

  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sliderRef.current) return;
    setWidth(
      sliderRef.current.scrollWidth / sliderRef?.current?.childElementCount
    );
  }, []);

  const plusSlides = (num: number) => {
    setSliderIndex((prev) => prev + num);
    sliderShow(sliderIndex + num);
  };
  const sliderShow = (num: number) => {
    if (num > images.length) {
      setSliderIndex(1);
    }
    if (num < 1) {
      setSliderIndex(images.length);
    }
  };
  //drag
  const dragStart = (e: React.DragEvent<HTMLDivElement>) => {
    setStart(e.clientX);
  };
  const dragOver = (e: React.DragEvent<HTMLDivElement>) => {
    setChange(start - e.clientX);
  };
  const dragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    if (change > 0) {
      if (sliderRef.current) {
        sliderRef.current.scrollLeft += width;
      }
    } else {
      if (sliderRef.current) {
        sliderRef.current.scrollLeft -= width;
      }
    }
  };

  useEffect(() => {
    if (!sliderRef.current || !width) return;

    sliderRef.current.scrollLeft =
      sliderIndex > Math.round(sliderRef.current.offsetWidth / width)
        ? (sliderIndex - 1) * width
        : 0;
  }, [width, sliderIndex]);

  return (
    <section className="product-derails">
      <div className="product-page-image">
        {images.map((image, index) => {
          return (
            <div
              key={index}
              className="mySlides"
              style={{ display: index + 1 === sliderIndex ? "block" : "none" }}
            >
              <div className="numberText">
                {index + 1} / {images.length}
                <Image 
                 style={{ objectFit: 'cover' }}
                src={image.url} alt={image.title} height={100} width={400} />
              </div>
            </div>
          );
        })}

        <a href="#!" className="prev" onClick={() => plusSlides(-1)}>
          &#10094;
        </a>
        <a href="#!" className="next" onClick={() => plusSlides(1)}>
          &#10095;
        </a>

        <div
          className="slider-img"
          draggable={true}
          onDragStart={dragStart}
          onDragOver={dragOver}
          onDragEnd={dragEnd}
          ref={sliderRef}
        >
          {images.map((image, index) => {
            return (
              <div
                key={index}
                className={`slider-box ${
                  index + 1 === sliderIndex && "active"
                }`}
                onClick={() => setSliderIndex(index + 1)}
              >
                <img src={image.url} alt={image.title} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
