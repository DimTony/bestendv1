import React from "react";
import { Box, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import {
  BreadcrumbCurrentLink,
  BreadcrumbLink,
  BreadcrumbRoot,
} from "@/components/ui/breadcrumb";
import bgImg from "../assets/images/resto_bg.jpg";
import dining from "../assets/images/dining.jpg";
import restobar from "../assets/images/restobar.jpeg";
import Navbar from "@/components/generic/Navbar";
import Availability from "@/components/generic/Availability";
import { crafts, experiences, seasonals } from "@/utils/Constants";
import RestoCarousel from "@/components/generic/RestoCarousel";
import Footer from "@/components/generic/Footer";

const RestoAndBar = () => {
  return (
    <>
      <Box
        backgroundImage={`url(${bgImg})`} // Use template literals to add the image path
        backgroundSize="cover" // Ensure the image covers the entire area
        backgroundRepeat="no-repeat" // Avoid repeating the image
        w="100vw"
        h="100vh"
        overflowY="auto"
        overflowX="hidden"
        mb="3rem"
        pt="1rem"
      >
        <VStack gap={0}>
          <Navbar />

          <VStack mt="6rem" gap={0}>
            <BreadcrumbRoot size="lg">
              <BreadcrumbLink href="/">Bestend</BreadcrumbLink>
              <BreadcrumbCurrentLink>Resto & Bar</BreadcrumbCurrentLink>
            </BreadcrumbRoot>

            <Text
              color="white"
              fontSize="2.3rem"
              fontFamily="Prata"
              fontWeight="600"
            >
              Resto & Bar
            </Text>
          </VStack>

          <Availability topValue={"4rem"} />

          <HStack bg="#fff" w="100%" py="5rem" px="3rem">
            <VStack alignItems="flex-start">
              <Text
                mb="2rem"
                fontWeight="600"
                fontFamily="Prata"
                fontSize="2rem"
              >
                Exceptional Dining Experiences
              </Text>
              <HStack alignItems="flex-start">
                {experiences.map((item, index) => (
                  <VStack
                    alignItems="flex-start"
                    p="1rem"
                    borderRadius="1rem"
                    bg="#c5a880"
                    key={index}
                  >
                    <Text fontWeight="600" fontSize="1.5rem" fontFamily="Prata">
                      {item.title}
                    </Text>
                    <Text>{item.description}</Text>
                  </VStack>
                ))}
              </HStack>
            </VStack>
            <Image
              src={dining}
              alt="dining"
              w="30vw"
              h="60vh"
              objectFit="cover"
              borderRadius="1rem"
            />
          </HStack>

          <Box py="5rem" bg="#c5a880" w="100%">
            <Text
              px="3rem"
              mb="1rem"
              zIndex={2}
              fontFamily="Prata"
              fontSize="2.5rem"
            >
              Today's Menu
            </Text>
            <RestoCarousel
              // items={carouselData}
              autoPlayInterval={3000}
              itemsToShow={4}
            />
          </Box>

          <VStack
            w="100%"
            bgColor="rgba(255, 255, 255, 0.8)"
            backgroundImage={restobar}
            backgroundBlendMode="overlay"
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            justify="center"
            align="flex-start"
            spacing={4}
            py="5rem"
            px="3rem"
          >
            <Text fontFamily="Prata" fontSize="2.5rem" fontWeight="600">
              Seasonal and Local Ingredients
            </Text>
            <HStack alignItems="flex-start">
              {seasonals.map((item, index) => (
                <HStack alignItems="flex-start" key={index}>
                  <Stack bg="#c5a880" py=".5rem" px="1rem">
                    <Text fontSize="1.5rem">{index + 1}</Text>
                  </Stack>
                  <VStack alignItems="flex-start">
                    <Text fontSize="2rem" fontFamily="Prata">
                      {item.title}
                    </Text>
                    <Text fontSize="1.5rem">{item.description}</Text>
                  </VStack>
                </HStack>
              ))}
            </HStack>
          </VStack>

          <Stack bg="#c5a880" py="5rem" px="3rem">
            <VStack alignItems="flex-start">
              <Text fontFamily="Prata" fontSize="2.5rem" fontWeight="600">
                Craft Cocktails & Fine Wines
              </Text>

              <HStack bg="#f9f6f0" p="1rem" borderRadius="1rem">
                {crafts.map((item, index) => (
                  <VStack alignItems="flex-start">
                    {item.icon}
                    <Text
                      color="#746558"
                      fontFamily="Prata"
                      fontSize="2rem"
                      fontWeight="600"
                    >
                      {item.title}
                    </Text>
                    <Text color="#7c6d61" fontSize="1.5rem">
                      {item.description}
                    </Text>
                  </VStack>
                ))}
              </HStack>
            </VStack>
          </Stack>

          <Footer />
        </VStack>
      </Box>
    </>
  );
};

export default RestoAndBar;
