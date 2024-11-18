import {
  Box,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import {
  BreadcrumbCurrentLink,
  BreadcrumbLink,
  BreadcrumbRoot,
} from "@/components/ui/breadcrumb";
import {
  StepsCompletedContent,
  StepsContent,
  StepsItem,
  StepsList,
  StepsNextTrigger,
  StepsPrevTrigger,
  StepsRoot,
} from "@/components/ui/steps";
import bgImg from "../assets/images/about_bg.jpg";
import culinary from "../assets/images/culinary.jpg";
// import VerticalSteps from "../components/VerticalSteps";
import Navbar from "@/components/generic/Navbar";
import Availability from "@/components/generic/Availability";
import { exclusives, impeccables } from "@/utils/Constants";
import Footer from "@/components/generic/Footer";

const AboutUs = () => {
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
              <BreadcrumbCurrentLink>About</BreadcrumbCurrentLink>
            </BreadcrumbRoot>

            <Text
              color="white"
              fontSize="2.3rem"
              fontFamily="Prata"
              fontWeight="600"
            >
              About Us
            </Text>
          </VStack>

          <Availability topValue={"4rem"} />

          <VStack
            w="100%"
            bg="#fff"
            pb="5rem"
            pt="5rem"
            // alignItems="center"
            justifyContent="center"
            alignItems="flex-start"
            px="5rem"
          >
            <Text zIndex={2} fontFamily="Prata" fontSize="2.5rem">
              Impeccable Service
            </Text>
            <Stack
              gap="1rem"
              direction={{ md: "row", base: "column" }}
              w="100%"
            >
              {impeccables.map((item, index) => (
                <VStack
                  bg="#F5F1EA"
                  p="1rem"
                  borderRadius=".5rem"
                  key={index}
                  alignItems="flex-start"
                  boxShadow="20px 20px 60px #c7c7c7, -20px -20px 60px #f9f9f9"
                >
                  <Text fontSize="1.2rem">{item.title}</Text>
                  <Text>{item.description}</Text>
                </VStack>
              ))}
            </Stack>
          </VStack>

          <VStack
            w="100%"
            bg="#C5A880"
            py="5rem"
            // alignItems="center"
            justifyContent="center"
            alignItems="flex-start"
            px="5rem"
          >
            <Text fontFamily="Prata" fontSize="2.5rem">
              Exquisite Accommodations
            </Text>

            <SimpleGrid w="100%" columns={{ base: 1, md: 2 }} gap="10px">
              {exclusives.map((item, index) => (
                <VStack
                  alignItems="flex-start"
                  key={index}
                  p="1.5rem"
                  bg="gray.100"
                  borderRadius="md"
                  boxShadow="md"
                  w="100%"
                  h="200px"
                >
                  <Text
                    mb=".7rem"
                    fontFamily="Prata"
                    fontSize="2rem"
                    fontWeight="bold"
                  >
                    {item.name}
                  </Text>
                  <Text fontSize="1.2rem">{item.description}</Text>
                </VStack>
              ))}
            </SimpleGrid>
          </VStack>

          <HStack
            alignItems="flex-start"
            bg="#fff"
            w="100%"
            px="1rem"
            py="5rem"
          >
            <Image src={culinary} alt="dining" w="50%" />

            <VStack alignItems="flex-start">
              <Text
                fontSize="1.7rem"
                fontWeight="600"
                px="6"
                fontFamily="Prata"
              >
                Culinary Delights
              </Text>
              {/* <VerticalSteps /> */}

              <StepsRoot
                orientation="vertical"
                height="600px"
                defaultValue={1}
                count={3}
                pl="3rem"
                mt="3rem"
              >
                <StepsList>
                  <StepsItem
                    index={0}
                    title="Award-Winning Dining"
                    description="Savor the exceptional cuisine of our on-site restaurants, helmed by renowned chefs and celebrated for their culinary excellence."
                  />
                  <StepsItem
                    index={1}
                    title="Locally-Sourced Ingredients"
                    description="We pride ourselves on using the freshest local and seasonal produce to create our mouthwatering dishes."
                  />
                  <StepsItem
                    index={2}
                    title="Curated Wine Selection"
                    description="Complement your meal with a selection from our extensive wine cellar, featuring a diverse array of labels from around the world."
                  />
                  <StepsItem
                    index={3}
                    title="Global and Local Fusion"
                    description="Explore a menu that artfully blends global techniques with local flavors, offering a diverse culinary journey inspired by both international and Nigerian cuisine."
                  />
                  <StepsItem
                    index={4}
                    title="Elegant Ambiance"
                    description="Dine in style within our thoughtfully designed spaces, where elegant decor and ambient lighting set the perfect mood for any occasion."
                  />
                </StepsList>
              </StepsRoot>
            </VStack>
          </HStack>

          <Footer />
        </VStack>
      </Box>
    </>
  );
};

export default AboutUs;
