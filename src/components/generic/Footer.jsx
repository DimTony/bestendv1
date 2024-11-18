import {
  Box,
  Button,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { BsFillSendFill } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import {
  FaFacebookF,
  FaMapMarkedAlt,
  FaInstagramSquare,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import logo from "../../assets/images/bestend-high-resolution-logo-white-transparent.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <HStack
        pt="3rem"
        pb="7rem"
        px="1rem"
        bg="rgba(0, 0, 0, 0.9)"
        w="100%"
        color="#fff"
        justifyContent="space-around"
        alignItems="flex-start"
        display={{ md: "flex", base: "none" }}
      >
        <VStack gap="6rem">
          <Image src={logo} alt="logo" w="10rem" h="auto" />
          <HStack>
            <Link to="https://www.x.com/bestend">
              <Button
                display="flex"
                bg="#C5A880"
                borderRadius="4px"
                alignItems="center"
                justifyContent="center"
                p={0}
              >
                <FaXTwitter fontSize="1.3rem" />
              </Button>
            </Link>

            <Link to="https://www.facebook.com/bestend">
              <Button
                display="flex"
                bg="#C5A880"
                borderRadius="4px"
                alignItems="center"
                justifyContent="center"
                p={0}
              >
                <FaFacebookF fontSize="1.3rem" />
              </Button>
            </Link>

            <Link to="https://www.instagram.com/bestend">
              <Button
                display="flex"
                bg="#C5A880"
                borderRadius="4px"
                alignItems="center"
                justifyContent="center"
                p={0}
              >
                <FaInstagramSquare fontSize="1.3rem" />
              </Button>
            </Link>
          </HStack>
        </VStack>
        <VStack alignItems="flex-start">
          <Text mb="1rem" fontSize="1.4rem" fontWeight="600">
            Services
          </Text>
          <HStack gap="4rem">
            <VStack alignItems="flex-start">
              <Button
                variant="unstyled"
                fontWeight="300"
                leftIcon={<IoIosArrowForward />}
              >
                Free Wifi
              </Button>
              <Button
                variant="unstyled"
                fontWeight="300"
                leftIcon={<IoIosArrowForward />}
              >
                Easy Booking
              </Button>
              <Button
                variant="unstyled"
                fontWeight="300"
                leftIcon={<IoIosArrowForward />}
              >
                Restaurant
              </Button>
              <Button
                variant="unstyled"
                fontWeight="300"
                leftIcon={<IoIosArrowForward />}
              >
                Beauty & Health
              </Button>
            </VStack>
            <VStack alignItems="flex-start">
              <Button
                variant="unstyled"
                fontWeight="300"
                leftIcon={<IoIosArrowForward />}
              >
                Well Air-conditioned
              </Button>
              <Button
                variant="unstyled"
                fontWeight="300"
                leftIcon={<IoIosArrowForward />}
              >
                Serene Environment
              </Button>
              <Button
                variant="unstyled"
                fontWeight="300"
                leftIcon={<IoIosArrowForward />}
              >
                Location Proximity
              </Button>
              <Button
                variant="unstyled"
                fontWeight="300"
                leftIcon={<IoIosArrowForward />}
              >
                Help & Support
              </Button>
            </VStack>
          </HStack>
        </VStack>
        <VStack alignItems="flex-start">
          <Text mb="1rem" fontSize="1.4rem" fontWeight="600">
            Ouick Links
          </Text>

          <VStack alignItems="flex-start">
            <Link to="/">
              <Button
                variant="unstyled"
                fontWeight="300"
                leftIcon={<IoIosArrowForward />}
              >
                Home
              </Button>
            </Link>
            <Link to="/about">
              <Button
                variant="unstyled"
                fontWeight="300"
                leftIcon={<IoIosArrowForward />}
              >
                About
              </Button>
            </Link>
            <Link to="/rooms">
              <Button
                variant="unstyled"
                fontWeight="300"
                leftIcon={<IoIosArrowForward />}
              >
                Rooms
              </Button>
            </Link>
            <Link to="/resto-and-bar">
              <Button
                variant="unstyled"
                fontWeight="300"
                leftIcon={<IoIosArrowForward />}
              >
                Resto & Bar
              </Button>
            </Link>
          </VStack>
        </VStack>
        <VStack alignItems="flex-start">
          <Text mb="1rem" fontSize="1.4rem" fontWeight="600">
            Have Questions?
          </Text>

          <VStack alignItems="flex-start" w="17rem" gap="2.4rem">
            <HStack alignItems="flex-start" w="100%" gap="1.5rem">
              <FaMapMarkedAlt fontSize="1.5rem" color="#c5a880" />
              <Text w="100%">
                House 4, Atunrase Estate, Gbagada Phase 1, Lagos, Nigeria
              </Text>
            </HStack>
            <HStack alignItems="flex-start" w="100%" gap="1.5rem">
              <FaPhoneAlt fontSize="1.5rem" color="#c5a880" />
              <Text w="100%">+234 CALL-BESTEND</Text>
            </HStack>
            <HStack alignItems="flex-start" w="100%" gap="1.5rem">
              <BsFillSendFill fontSize="1.5rem" color="#c5a880" />
              <Link to="mailto:bestendhotels@email.com">
                bestendhotels@email.com
              </Link>
            </HStack>
          </VStack>
        </VStack>
      </HStack>

      <VStack
        pt="2rem"
        pb="7rem"
        px="1rem"
        bg="rgba(0, 0, 0, 0.9)"
        w="100%"
        color="#fff"
        // justifyContent="space-around"
        alignItems="flex-start"
        display={{ md: "none", base: "flex" }}
      >
        <HStack
          mb="2rem"
          w="100%"
          justifyContent="space-between"
          alignItems="center"
        >
          <Image src={logo} alt="logo" w="6rem" h="auto" />

          <HStack>
            <Link to="https://www.x.com/bestend">
              <Button
                display="flex"
                bg="#C5A880"
                borderRadius="4px"
                alignItems="center"
                justifyContent="center"
                p={0}
              >
                <FaXTwitter fontSize="1.3rem" />
              </Button>
            </Link>

            <Link to="https://www.facebook.com/bestend">
              <Button
                display="flex"
                bg="#C5A880"
                borderRadius="4px"
                alignItems="center"
                justifyContent="center"
                p={0}
              >
                <FaFacebookF fontSize="1.3rem" />
              </Button>
            </Link>

            <Link to="https://www.instagram.com/bestend">
              <Button
                display="flex"
                bg="#C5A880"
                borderRadius="4px"
                alignItems="center"
                justifyContent="center"
                p={0}
              >
                <FaInstagramSquare fontSize="1.3rem" />
              </Button>
            </Link>
          </HStack>
        </HStack>

        <HStack w="100%" alignItems="flex-start">
          <VStack alignItems="flex-start" h="100%">
            <Text mb="1rem" fontSize="1.4rem" fontWeight="600">
              Services
            </Text>

            <VStack alignItems="flex-start" gap="1.2rem">
              <Button
                variant="unstyled"
                fontWeight="300"
                leftIcon={<IoIosArrowForward />}
              >
                Free Wifi
              </Button>
              <Button
                variant="unstyled"
                fontWeight="300"
                leftIcon={<IoIosArrowForward />}
              >
                Easy Booking
              </Button>
              <Button
                variant="unstyled"
                fontWeight="300"
                leftIcon={<IoIosArrowForward />}
              >
                Restaurant
              </Button>
              <Button
                variant="unstyled"
                fontWeight="300"
                leftIcon={<IoIosArrowForward />}
              >
                Beauty & Health
              </Button>
              <Button
                variant="unstyled"
                fontWeight="300"
                leftIcon={<IoIosArrowForward />}
              >
                Well Air-conditioned
              </Button>
              <Button
                variant="unstyled"
                fontWeight="300"
                leftIcon={<IoIosArrowForward />}
              >
                Serene Environment
              </Button>
              <Button
                variant="unstyled"
                fontWeight="300"
                leftIcon={<IoIosArrowForward />}
              >
                Location Proximity
              </Button>
              <Button
                variant="unstyled"
                fontWeight="300"
                leftIcon={<IoIosArrowForward />}
              >
                Help & Support
              </Button>
            </VStack>
          </VStack>
          <VStack alignItems="flex-start" gap="2rem">
            <VStack alignItems="flex-start">
              <Text mb="1rem" fontSize="1.4rem" fontWeight="600">
                Have Questions?
              </Text>

              <VStack alignItems="flex-start" gap="2rem">
                <HStack alignItems="flex-start" w="100%" gap="1rem">
                  <FaMapMarkedAlt fontSize="1.5rem" color="#c5a880" />
                  <Text w="100%">
                    House 4, Atunrase Estate, Gbagada Phase 1, Lagos, Nigeria
                  </Text>
                </HStack>
                <HStack alignItems="flex-start" w="100%" gap="1rem">
                  <FaPhoneAlt fontSize="1.5rem" color="#c5a880" />
                  <Text w="100%">+234 CALL-BESTEND</Text>
                </HStack>
                <HStack alignItems="flex-start" w="100%" gap="1rem">
                  <BsFillSendFill fontSize="1.5rem" color="#c5a880" />
                  <Link to="mailto:bestendhotels@email.com">
                    bestendhotels@email.com
                  </Link>
                </HStack>
              </VStack>
            </VStack>

            <VStack alignItems="flex-start">
              <Text mb="1rem" fontSize="1.4rem" fontWeight="600">
                Ouick Links
              </Text>

              <VStack alignItems="flex-start">
                <Link to="/">
                  <Button
                    variant="unstyled"
                    fontWeight="300"
                    leftIcon={<IoIosArrowForward />}
                  >
                    Home
                  </Button>
                </Link>
                <Link to="/about">
                  <Button
                    variant="unstyled"
                    fontWeight="300"
                    leftIcon={<IoIosArrowForward />}
                  >
                    About
                  </Button>
                </Link>
                <Link to="/rooms">
                  <Button
                    variant="unstyled"
                    fontWeight="300"
                    leftIcon={<IoIosArrowForward />}
                  >
                    Rooms
                  </Button>
                </Link>
                <Link to="/resto-and-bar">
                  <Button
                    variant="unstyled"
                    fontWeight="300"
                    leftIcon={<IoIosArrowForward />}
                  >
                    Resto & Bar
                  </Button>
                </Link>
              </VStack>
            </VStack>
          </VStack>
        </HStack>
      </VStack>
    </>
  );
};

export default Footer;
