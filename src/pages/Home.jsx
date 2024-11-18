import {
  Box,
  Button,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import bgImg from "../assets/images/bgImg.jpg";
import Navbar from "@/components/generic/Navbar";
import { texts } from "@/utils/Constants";
import { BedSingle } from "lucide-react";
import Availability from "@/components/generic/Availability";
import pillow from "../assets/icons/pillow.png";
import offer from "../assets/icons/offer.png";
import wifi from "../assets/icons/wifi.svg";
import booking from "../assets/icons/booking.svg";
import restaurant from "../assets/icons/restaurant.svg";
import beauty from "../assets/icons/beauty.svg";
import support from "../assets/icons/support.svg";
import lounge from "../assets/icons/lounge.svg";
import stock1 from "../assets/images/stock1.jpg";
import stock2 from "../assets/images/stock2.jpg";
import suite from "../assets/images/suite.jpg";
import deluxe from "../assets/images/deluxe.jpg";
import family from "../assets/images/family.jpg";
import resto from "../assets/images/resto.jpg";
import Footer from "@/components/generic/Footer";
import BookNow from "@/components/generic/BookNow";
import { DialogTrigger } from "@/components/ui/dialog";
import { useBooking } from "@/contexts/BookingContext";

const Home = () => {
  const [currentText, setCurrentText] = useState(texts[0]);
  const [index, setIndex] = useState(0);
  // const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { isDialogOpen, setIsDialogOpen } = useBooking();

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [texts.length]);

  useEffect(() => {
    setCurrentText(texts[index]);
  }, [index, texts]);
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
            <Text
              textTransform="uppercase"
              color="#fff"
              fontWeight="600"
              letterSpacing="2px"
              fontFamily="Prata"
              fontSize={{ md: "1rem", base: ".6rem" }}
              textAlign="center"
            >
              ENJOY YOUR WONDERFUL STAY WITH A GREAT LUXURY EXPERIENCE
            </Text>

            <Text
              fontSize={{ md: "4.5rem", base: "2rem" }}
              fontWeight="700"
              color="#fff"
              textTransform="uppercase"
              letterSpacing="1px"
              transition="opacity 0.5s ease"
              textAlign="center"
              my={{ md: "1rem", base: "4rem" }}
              mx={{ base: ".5rem" }}
            >
              {currentText}
            </Text>
          </VStack>

          <Button
            bg="#edf2f7"
            color="#000"
            fontWeight="700"
            textTransform="uppercase"
            _hover={{ bg: "gray.200", border: "2px solid #000" }}
            onClick={openDialog}
          >
            Book a room <BedSingle />
          </Button>

          <Availability topValue={"4rem"} />

          <VStack
            display={{ md: "flex", base: "none" }}
            pt="5rem"
            pb="5rem"
            bg="#fff"
            w="100%"
            alignItems="center"
          >
            <HStack w="80vw" gap="3rem" mb="7rem">
              <HStack w="50%">
                <VStack spacing="1rem">
                  <VStack
                    spacing={0}
                    alignItems="center"
                    justifyContent="center"
                    p="1.5rem"
                    bg="#F5F1EA"
                    borderRadius="1rem"
                  >
                    <Image pl="1.5rem" src={pillow} alt="pillow" />
                    <Text
                      mb="0.5rem"
                      fontFamily="Playfair Display"
                      fontSize="1.5rem"
                    >
                      Cozy Room
                    </Text>
                    <Text textAlign="center">
                      Experience comfort and warmth in our cozy room, designed
                      for relaxation with soft bedding, modern amenities, and a
                      peaceful ambiance—perfect for unwinding after a long day.
                    </Text>
                  </VStack>
                  <VStack>
                    <Image
                      borderRadius="1rem"
                      src={stock1}
                      alt="pillow"
                      w="15rem"
                    />
                  </VStack>
                </VStack>
                <VStack>
                  <VStack>
                    <Image
                      src={stock2}
                      borderRadius="1rem"
                      alt="pillow"
                      w="15rem"
                    />
                  </VStack>
                  <VStack>
                    <VStack
                      spacing={0}
                      alignItems="center"
                      justifyContent="center"
                      p="1.5rem"
                      bg="#F5F1EA"
                      borderRadius="1rem"
                    >
                      <Image pl="1.5rem" src={offer} alt="pillow" />
                      <Text
                        mb="0.5rem"
                        fontFamily="Playfair Display"
                        fontSize="1.5rem"
                      >
                        Special Offers
                      </Text>
                      <Text textAlign="center">
                        Discover exclusive deals and limited-time offers! Enjoy
                        discounted rates, complimentary perks, and more—book now
                        and make your stay even more memorable.
                      </Text>
                    </VStack>
                  </VStack>
                </VStack>
              </HStack>
              <VStack w="50%" py="3rem" h="100%" alignItems="flex-start">
                <Text
                  textTransform="uppercase"
                  fontWeight="700"
                  color="#C5A880"
                >
                  ABOUT US
                </Text>
                <Text mb="2rem" fontFamily="Prata" fontSize="2.5rem">
                  An elegant stay in Lagos's central district
                </Text>
                <Text fontWeight="300" mb="3rem">
                  Set on picturesque landscaped environment, our hotel sits at
                  the heart of Nigeria's busiest city - Gbagada, Lagos. We're
                  within 20 minutes of the International Airport and Lagos
                  Island. Enjoy our on-site massage therapists, resto and bar,
                  serene environment, and dedicated staff.
                </Text>

                <Button
                  p="1.5rem"
                  bg="#C5A880"
                  color="#fff"
                  textTransform="uppercase"
                >
                  BOOK YOUR ROOM NOW
                </Button>
              </VStack>
            </HStack>

            <VStack>
              <Text mb="2rem" fontFamily="Prata" fontSize="2.5rem">
                Explore Our Hotel Services
              </Text>

              <HStack gap="2rem">
                <VStack bg="#f7f7f7" borderRadius="40%" p="1.5rem">
                  <Image src={wifi} alt="wifi" w="5rem" />
                  <Text>Free Wifi</Text>
                </VStack>

                <VStack bg="#f7f7f7" borderRadius="40%" p="1.5rem">
                  <Image src={booking} alt="wifi" w="5rem" />
                  <Text>Easy Booking</Text>
                </VStack>

                <VStack bg="#f7f7f7" borderRadius="40%" p="1.5rem">
                  <Image src={restaurant} alt="wifi" w="5rem" />
                  <Text>Restaurant</Text>
                </VStack>

                <VStack bg="#f7f7f7" borderRadius="40%" p="1.5rem">
                  <Image src={lounge} alt="wifi" w="5rem" />
                  <Text>Lounge & Bar</Text>
                </VStack>

                <VStack bg="#f7f7f7" borderRadius="40%" p="1.5rem">
                  <Image src={beauty} alt="wifi" w="5rem" />
                  <Text>Beauty & Health</Text>
                </VStack>

                <VStack bg="#f7f7f7" borderRadius="40%" p="1.5rem">
                  <Image src={support} alt="wifi" w="5rem" />
                  <Text>Help & Support</Text>
                </VStack>
              </HStack>
            </VStack>
          </VStack>

          <HStack
            w="100%"
            bg="rgba(0, 0, 0, 0.85)"
            backdropBlur="2px"
            justifyContent="center"
            color="#fff"
            py="3rem"
          >
            <HStack w="80vw">
              <VStack alignItems="flex-start" w="80%">
                <Text
                  textTransform="uppercase"
                  fontWeight="700"
                  color="#c5a880"
                >
                  THE BEST HOTEL FOR <span>"HOTELLING"</span>
                </Text>
                <Text fontFamily="Prata" fontSize="2.5rem">
                  Find the Best Room for Your Next Stay
                </Text>
              </VStack>
              <Button
                p="2rem"
                textTransform="uppercase"
                bg="#c5a880"
                color="#fff"
                _hover={{ bg: "#f7f7f7", color: "#000" }}
              >
                Find Now
              </Button>
            </HStack>
          </HStack>

          <VStack pt="5rem" pb="5rem" bg="#fff" w="100%" alignItems="center">
            <Text fontFamily="Prata" fontSize="2.5rem" mb="2rem">
              Featured Rooms
            </Text>
            <Stack
              direction={{ md: "row", base: "column" }}
              w="80vw"
              gap="1.5rem"
            >
              <VStack
                bg="#f5f5f5"
                color="#000"
                transition="background 0.5s ease, color 0.5s ease, transform 0.5s ease"
                _hover={{
                  bg: "#000",
                  color: "#fff",
                }}
                w="33.3333%"
                alignItems="flex-start"
                justifyContent="space-between"
              >
                <VStack p="3rem 3rem 1rem 3rem">
                  <Text fontFamily="Prata" fontSize="1.3rem">
                    Suite Room
                  </Text>
                  <Text>
                    Indulge in luxury and space with our Suite Room, featuring
                    elegant decor, a separate living area, and premium
                    amenities—your perfect retreat for an unforgettable stay.
                  </Text>
                  <Button
                    bg="#000"
                    border="2px solid #000"
                    color="#fff"
                    variant="surface"
                    _hover={{
                      bg: "#fff", // Button background changes to black
                      color: "#000", // Text color changes to white
                    }}
                    mt="1rem"
                  >
                    BOOK NOW
                  </Button>
                </VStack>
                <Image src={suite} alt="suite" />
              </VStack>
              <Stack
                bg="#f5f5f5"
                color="#000"
                transition="background 0.5s ease, color 0.5s ease, transform 0.5s ease"
                _hover={{
                  bg: "#000",
                  color: "#fff",
                }}
                direction={{ md: "column", base: "column-reverse" }}
                w="33.3333%"
              >
                <Image src={family} alt="suite" />
                <VStack p="1rem 3rem 1rem 3rem">
                  <Text fontFamily="Prata" fontSize="1.3rem">
                    Family Room
                  </Text>
                  <Text>
                    Spacious and family-friendly, our Family Room offers comfort
                    for everyone, with multiple beds, cozy seating, and modern
                    amenities—ideal for a relaxing and enjoyable family getaway.
                  </Text>
                  <Button
                    bg="#000"
                    border="2px solid #000"
                    color="#fff"
                    variant="surface"
                    _hover={{
                      bg: "#fff", // Button background changes to black
                      color: "#000", // Text color changes to white
                    }}
                    mt="1rem"
                  >
                    BOOK NOW
                  </Button>
                </VStack>
              </Stack>
              <VStack
                bg="#f5f5f5"
                color="#000"
                transition="background 0.5s ease, color 0.5s ease, transform 0.5s ease"
                _hover={{
                  bg: "#000",
                  color: "#fff",
                }}
                w="33.3333%"
                justifyContent="space-between"
              >
                <VStack p="3rem 3rem 1rem 3rem">
                  <Text fontFamily="Prata" fontSize="1.3rem">
                    Deluxe Room
                  </Text>
                  <Text>
                    Elevate your stay in our Deluxe Room, offering refined
                    comfort, stylish decor, premium amenities, and extra
                    space—perfect for guests seeking a touch of luxury.
                  </Text>
                  <Button
                    bg="#000"
                    border="2px solid #000"
                    color="#fff"
                    variant="surface"
                    _hover={{
                      bg: "#fff", // Button background changes to black
                      color: "#000", // Text color changes to white
                    }}
                    mt="1rem"
                  >
                    BOOK NOW
                  </Button>
                </VStack>
                <Image src={deluxe} alt="suite" />
              </VStack>
            </Stack>
          </VStack>

          <Footer />
        </VStack>
      </Box>

      <BookNow isOpen={isDialogOpen} onClose={closeDialog} />
    </>
  );
};

export default Home;
