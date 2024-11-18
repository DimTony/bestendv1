import React, { useState, useEffect, useCallback } from "react";
import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { carouselData } from "@/utils/Constants";
import { useColorModeValue } from "../ui/color-mode";

const RestoCarousel = ({
  items = carouselData,
  autoPlayInterval = 3000,
  itemsToShow = 4, // Number of items visible at once
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const buttonBg = useColorModeValue("whiteAlpha.800", "blackAlpha.800");
  const buttonHoverBg = useColorModeValue("white", "blackAlpha.900");
  const titleBg = useColorModeValue("blackAlpha.700", "blackAlpha.800");

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex >= items.length - itemsToShow + 1 ? 0 : nextIndex;
    });
  }, [items.length, itemsToShow]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - 1;
      return nextIndex < 0 ? items.length - itemsToShow : nextIndex;
    });
  };

  useEffect(() => {
    let interval;
    if (!isHovered) {
      interval = setInterval(() => {
        nextSlide();
      }, autoPlayInterval);
    }
    return () => clearInterval(interval);
  }, [isHovered, autoPlayInterval, nextSlide]);

  return (
    <Box
      position="relative"
      width="full"
      py={0}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Carousel Container */}
      <Flex
        width="full"
        overflow="hidden"
        position="relative"
        px={12} // Space for navigation buttons
      >
        <Flex
          transition="transform 0.5s ease-in-out"
          transform={`translateX(-${currentIndex * (100 / itemsToShow)}%)`}
          gap={4}
        >
          {items.map((item, index) => (
            <Box
              key={item.id}
              flexShrink={0}
              width={`calc(${100 / itemsToShow}% - 16px)`} // Subtracting gap
              position="relative"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="lg"
              height="300px"
            >
              <Box position="relative" height="full" width="full">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />

                {/* Title container - alternates between top and bottom */}
                <Box
                  position="absolute"
                  left="0"
                  right="0"
                  {...(index % 2 === 0 ? { top: 0 } : { bottom: 0 })}
                  bg={titleBg}
                  p={2}
                  transition="opacity 0.3s"
                >
                  <Text
                    color="white"
                    fontSize="sm"
                    fontWeight="semibold"
                    textAlign="center"
                    noOfLines={2}
                  >
                    {item.title}
                  </Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Flex>
      </Flex>

      {/* Navigation Buttons */}
      <IconButton
        icon={<ChevronLeft size={24} />}
        aria-label="Previous"
        position="absolute"
        left="0"
        top="50%"
        transform="translateY(-50%)"
        bg={buttonBg}
        _hover={{ bg: buttonHoverBg }}
        onClick={prevSlide}
        zIndex={2}
        isRound
      />

      <IconButton
        icon={<ChevronRight size={24} />}
        aria-label="Next"
        position="absolute"
        right="0"
        top="50%"
        transform="translateY(-50%)"
        bg={buttonBg}
        _hover={{ bg: buttonHoverBg }}
        onClick={nextSlide}
        zIndex={2}
        isRound
      />

      {/* Slide Indicators */}
      <Flex
        position="absolute"
        bottom="-4"
        width="full"
        justifyContent="center"
        gap={2}
      >
        {Array.from({ length: Math.ceil(items.length / itemsToShow) }).map(
          (_, index) => (
            <Box
              key={index}
              width="2"
              height="2"
              borderRadius="full"
              bg={
                Math.floor(currentIndex / itemsToShow) === index
                  ? "gray.500"
                  : "gray.300"
              }
              cursor="pointer"
              onClick={() => setCurrentIndex(index * itemsToShow)}
              transition="background 0.3s ease"
            />
          )
        )}
      </Flex>
    </Box>
  );
};

// Example usage
// const Example = () => {
//   return (
//     <Box p={8} maxW="1400px" mx="auto">
//       <Carousel items={carouselData} autoPlayInterval={3000} itemsToShow={4} />
//     </Box>
//   );
// };

export default RestoCarousel;
