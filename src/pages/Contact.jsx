import React from "react";
import {
  Box,
  Fieldset,
  HStack,
  Input,
  Stack,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import {
  BreadcrumbCurrentLink,
  BreadcrumbLink,
  BreadcrumbRoot,
} from "@/components/ui/breadcrumb";
import { Field } from "@/components/ui/field";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagramSquare } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import bgImg from "../assets/images/contact_bg.jpg";
import Navbar from "@/components/generic/Navbar";
import Availability from "@/components/generic/Availability";
import Footer from "@/components/generic/Footer";
import { Link } from "react-router-dom";
import Map from "@/components/generic/Map";
import { Button } from "@/components/ui/button";

const Contact = () => {
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
              <BreadcrumbCurrentLink>Contact</BreadcrumbCurrentLink>
            </BreadcrumbRoot>

            <Text
              color="white"
              fontSize="2.3rem"
              fontFamily="Prata"
              fontWeight="600"
            >
              Contact
            </Text>
          </VStack>

          <Availability topValue={"4rem"} />

          <Stack
            bg="#f8f8f8"
            w="100%"
            alignItems="center"
            justifyContent="center"
          >
            <Stack
              direction={{ md: "row", base: "column" }}
              py="5rem"
              alignItems="flex-start"
              w="90%"
              id="split"
            >
              <VStack bg="#ffffff" p="2rem" alignItems="flex-start" w="80%">
                <Text fontWeight="700" fontFamily="Prata" fontSize="1.3rem">
                  Contact Us
                </Text>
                <Text mb="1rem">
                  We're open for any suggestions or just to have a chat
                </Text>
                <HStack
                  alignItems="flex-start"
                  mb="1rem"
                  justifyContent="space-between"
                  w="100%"
                >
                  <VStack w="30%" alignItems="flex-start">
                    <Text
                      fontSize=".8rem"
                      fontWeight="600"
                      textTransform="uppercase"
                    >
                      Address:
                    </Text>
                    <Text fontSize=".8rem">
                      Atunrase Estate, 4 Emeka Osuorji Close, off Nze Njoku
                      Street, Gbagada, Lagos 100001, Lagos
                    </Text>
                  </VStack>

                  <VStack w="30%" alignItems="flex-start">
                    <Text fontSize=".8rem" fontWeight="600">
                      EMAIL:
                    </Text>

                    <Box w="100%">
                      <Link w="100%" to="mailto:contactus@bestendhotel.com">
                        <Text w="100%" fontSize=".8rem">
                          contactus@bestendhotel.com
                        </Text>
                      </Link>
                    </Box>
                  </VStack>

                  <VStack w="30%" alignItems="flex-start">
                    <Text fontSize=".8rem" fontWeight="600">
                      PHONE:
                    </Text>
                    <Text w="100%" fontSize=".8rem">
                      +234 808 808 8080
                    </Text>
                  </VStack>
                </HStack>

                <form style={{ width: "100%", marginBottom: "2rem" }}>
                  <Fieldset.Root size="lg" maxW="md">
                    <Stack>
                      <Fieldset.Legend>Contact details</Fieldset.Legend>
                      <Fieldset.HelperText>
                        Please provide your contact details below.
                      </Fieldset.HelperText>
                    </Stack>

                    <Fieldset.Content>
                      <Field label="Name">
                        <Input name="name" />
                      </Field>

                      <Field label="Email address">
                        <Input name="email" type="email" />
                      </Field>

                      <Field label="Subject">
                        <Input name="subject" type="text" />
                      </Field>

                      <Field label="Your Message">
                        <Textarea placeholder="Create a message..." />
                      </Field>
                    </Fieldset.Content>

                    <Button
                      type="submit"
                      alignSelf="flex-start"
                      bg="#C5A880"
                      color="#fff"
                      _hover={{ bg: "#edf2f7", color: "#000" }}
                    >
                      Submit
                    </Button>
                  </Fieldset.Root>
                </form>

                <Text>Follow us here</Text>
                <HStack>
                  <Link to="https://www.x.com/bestend">
                    <Button
                      display="flex"
                      bg="transparent"
                      borderRadius="4px"
                      alignItems="center"
                      justifyContent="center"
                      p={0}
                    >
                      <FaXTwitter color="#c5a880" fontSize="1.3rem" />
                    </Button>
                  </Link>

                  <Link to="https://www.facebook.com/bestend">
                    <Button
                      display="flex"
                      bg="transparent"
                      borderRadius="4px"
                      alignItems="center"
                      justifyContent="center"
                      p={0}
                    >
                      <FaFacebookF color="#c5a880" fontSize="1.3rem" />
                    </Button>
                  </Link>

                  <Link to="https://www.instagram.com/bestend">
                    <Button
                      display="flex"
                      bg="transparent"
                      borderRadius="4px"
                      alignItems="center"
                      justifyContent="center"
                      p={0}
                    >
                      <FaInstagramSquare color="#c5a880" fontSize="1.3rem" />
                    </Button>
                  </Link>
                </HStack>
              </VStack>
              {/* <Map /> */}

              <Box
                w={{ md: "50%", base: "100%" }}
                h="70vh"
                borderRadius="8px"
                overflow="hidden"
                boxShadow="md"
              >
                <MapContainer
                  center={[6.5502655, 3.386916]} // Coordinates for Lagos, Nigeria
                  zoom={16}
                  style={{ height: "100%", width: "100%" }}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <Marker position={[6.5502655, 3.386916]}>
                    <Popup>
                      House 4, Emeka Osuorji Close, off Nze Njoku Street,
                      Gbagada, Lagos 100001, Lagos
                    </Popup>
                  </Marker>
                </MapContainer>
              </Box>
            </Stack>
          </Stack>

          <Footer />
        </VStack>
      </Box>
    </>
  );
};

export default Contact;
