import {
  Badge,
  Box,
  Card,
  CardBody,
  HStack,
  Icon,
  Image,
  Separator,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { StepsNextTrigger, StepsPrevTrigger } from "../ui/steps";
import { Button } from "../ui/button";
import { BookMarked } from "lucide-react";

const Confirmation = ({ totalPrice }) => {
  return (
    <>
      <VStack spacing={4} overflowY="hidden" maxHeight="58vh" w="100%">
        <VStack
          gap="1.5rem"
          w="100%"
          h="100%"
          overflowY="auto"
          alignItems="center"
          py=".5rem"
        >
          <Icon fontSize="2rem" color="blue.700">
            <BookMarked color="#000" />
          </Icon>

          <Text fontSize="1.2rem" color="green">
            Booking Confirmed!
          </Text>

          <VStack
            py={3}
            px={5}
            bg="white"
            boxShadow="md"
            borderRadius="lg"
            w="100%"
          >
            <Text fontSize=".8rem" mb="1.5rem">
              Your reservation has been received and is being processed. Thank
              You!
            </Text>

            <VStack w="100%" gap={0} alignItems="flex-start">
              <Text mb=".5rem" fontSize="1.4rem" fontWeight="700">
                Booking Details
              </Text>

              <SimpleGrid columns={{ base: 2, md: 5 }} spacing={4} mb={4}>
                <Box>
                  <Text color="gray.500" fontSize="sm">
                    Booking:
                  </Text>
                  <Text fontWeight="medium">1011</Text>
                </Box>

                <Box>
                  <Text color="gray.500" fontSize="sm">
                    Check-in:
                  </Text>
                  <Text fontWeight="medium">September 26, 2019</Text>
                </Box>

                <Box>
                  <Text color="gray.500" fontSize="sm">
                    Check-out:
                  </Text>
                  <Text fontWeight="medium">September 27, 2019</Text>
                </Box>

                <Box>
                  <Text color="gray.500" fontSize="sm">
                    Total:
                  </Text>
                  <Text fontWeight="medium">
                    ₦{totalPrice.toLocaleString()}
                  </Text>
                </Box>

                <Box>
                  <Text color="gray.500" fontSize="sm">
                    Status:
                  </Text>

                  <Badge colorPalette="gray">Processing</Badge>
                </Box>
              </SimpleGrid>
            </VStack>
          </VStack>

          {/* <Text fontSize="1.2rem">Reservation Details:</Text> */}
          {/* <VStack>
            <HStack w="100%" justifyContent="space-between">
              <Text fontWeight="700">Full Name:</Text>
              <Text>Mrs XYZ</Text>
            </HStack>
            <HStack w="100%" justifyContent="space-between">
              <Text fontWeight="700">Email Address:</Text>
              <Text>Mrs XYZ</Text>
            </HStack>
            <HStack w="100%" justifyContent="space-between">
              <Text fontWeight="700">Phone Number:</Text>
              <Text>Mrs XYZ</Text>
            </HStack>
            <HStack w="100%" justifyContent="space-between">
              <Text fontWeight="700">Account Name:</Text>
              <Text>Mrs XYZ</Text>
            </HStack>
            <HStack w="100%" justifyContent="space-between">
              <Text fontWeight="700">Account Name:</Text>
              <Text>Mrs XYZ</Text>
            </HStack>

            <HStack w="100%" justifyContent="space-between">
              <Text fontWeight="700">Account Name:</Text>
              <Text>Mrs XYZ</Text>
            </HStack>
            <HStack w="100%" justifyContent="space-between">
              <Text fontWeight="700">Account Name:</Text>
              <Text>Mrs XYZ</Text>
            </HStack>
            <HStack w="100%" justifyContent="space-between">
              <Text fontWeight="700">Account Name:</Text>
              <Text>Mrs XYZ</Text>
            </HStack>
            <HStack w="100%" justifyContent="space-between">
              <Text fontWeight="700">Account Name:</Text>
              <Text>Mrs XYZ</Text>
            </HStack>
            <HStack w="100%" justifyContent="space-between">
              <Text fontWeight="700">Account Name:</Text>
              <Text>Mrs XYZ</Text>
            </HStack>
          </VStack> */}
        </VStack>
      </VStack>
    </>
  );
};

export default Confirmation;
