import React from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
import {
  BreadcrumbCurrentLink,
  BreadcrumbLink,
  BreadcrumbRoot,
} from "@/components/ui/breadcrumb";
import bgImg from "../assets/images/blog_bg.jpg";
import Navbar from "@/components/generic/Navbar";
import Availability from "@/components/generic/Availability";
import Footer from "@/components/generic/Footer";

const Blog = () => {
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
              <BreadcrumbCurrentLink>Blog</BreadcrumbCurrentLink>
            </BreadcrumbRoot>

            <Text
              color="white"
              fontSize="2.3rem"
              fontFamily="Prata"
              fontWeight="600"
            >
              Blog
            </Text>
          </VStack>

          <Availability topValue={"4rem"} />

          <VStack w="100%" bg="#fff" py="5rem">
            <Text fontSize="4vw" fontWeight="700" fontFamily="Prata">
              This Page Is Currently Under Construction!
            </Text>
          </VStack>

          <Footer />
        </VStack>
      </Box>
    </>
  );
};

export default Blog;
