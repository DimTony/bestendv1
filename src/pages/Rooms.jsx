import React from "react";
import { Box, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import {
  BreadcrumbCurrentLink,
  BreadcrumbLink,
  BreadcrumbRoot,
} from "@/components/ui/breadcrumb";
import bgImg from "../assets/images/rooms_bg.jpg";
import standardPic from "../assets/images/standard.jpeg";
import executivePic from "../assets/images/executive.jpeg";
import superExecutivePic from "../assets/images/superExecutive.jpeg";
import Availability from "@/components/generic/Availability";
import Navbar from "@/components/generic/Navbar";
import { roomInfo } from "@/utils/Constants";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/utils/Functions";
import Footer from "@/components/generic/Footer";

const Rooms = () => {
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
              <BreadcrumbCurrentLink>Rooms</BreadcrumbCurrentLink>
            </BreadcrumbRoot>

            <Text
              color="white"
              fontSize="2.3rem"
              fontFamily="Prata"
              fontWeight="600"
            >
              Rooms
            </Text>
          </VStack>

          <Availability topValue={"4rem"} />

          <Stack
            direction={{ md: "row", base: "column" }}
            w="100%"
            bg="#fff"
            pt="8rem"
            pb="5rem"
            alignItems="center"
            justifyContent="center"
            gap="1rem"
          >
            {roomInfo.map((room, index) => (
              <VStack
                key={index}
                w="342px"
                bg="#F5F1EA"
                h="100%"
                justifyContent="space-between"
                _hover={{
                  bg: "#000",
                  color: "#fff",
                }}
                borderRadius="1rem"
              >
                {/* Render Image first if index is odd, otherwise render VStack first */}
                {index % 2 !== 0 && (
                  <Image
                    borderTopRadius="1rem"
                    src={room.image}
                    alt={room.name}
                    w="100%"
                    h="262px"
                  />
                )}

                <VStack
                  justifyContent="space-between"
                  py="3rem"
                  minH="17.4rem"
                  w="100%"
                  spacing="1rem"
                >
                  <Text fontWeight="600" fontFamily="Prata" fontSize="1.3rem">
                    {room.name}
                  </Text>
                  <Text h="8rem" px="2rem" textAlign="center" flexGrow={1}>
                    {room.description}
                  </Text>
                  <HStack alignItems="center">
                    <Text fontWeight="500">{formatPrice(room.price)}</Text>

                    <Button
                      bg="#000"
                      border="2px solid #000"
                      color="#fff"
                      variant="surface"
                      _hover={{
                        bg: "#fff", // Button background changes to black
                        color: "#000", // Text color changes to white
                      }}
                      //   mt="1rem"
                    >
                      BOOK NOW
                    </Button>
                  </HStack>
                </VStack>

                {/* Render VStack first if index is even, otherwise render Image first */}
                {index % 2 === 0 && (
                  <Image
                    borderBottomRadius="1rem"
                    src={room.image}
                    alt={room.name}
                    w="100%"
                    h="262px"
                  />
                )}
              </VStack>
            ))}
          </Stack>

          <Footer />
        </VStack>
      </Box>
    </>
  );
};

export default Rooms;
