import React, { useState } from "react";
import { Field } from "@/components/ui/field";
import {
  Box,
  Fieldset,
  HStack,
  Input,
  Stack,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { Button } from "../ui/button";
import { StepsNextTrigger, StepsPrevTrigger } from "../ui/steps";
import { useBooking } from "@/contexts/BookingContext";

const GuestDetails = () => {
  const { formData, setFormData } = useBooking();

  // Check if all fields are filled
  const isFormValid = formData.fullName && formData.email && formData.phone;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <VStack spacing={4} overflowY="hidden" maxHeight="55vh" w="100%">
        <HStack w="100%" justifyContent="flex-end">
          <StepsPrevTrigger asChild>
            <Button
              color="gray"
              borderColor="gray"
              variant="outline"
              size="sm"
              _hover={{ bg: "gray", color: "#fff" }}
            >
              Prev
            </Button>
          </StepsPrevTrigger>

          <StepsNextTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              bg="blue.500"
              color="#fff"
              disabled={!isFormValid} // Disable button if form is not valid
            >
              Next
            </Button>
          </StepsNextTrigger>
        </HStack>
        <VStack w="100%" h="100%" overflowY="auto">
          <form
            style={{
              overflowY: "auto", // Enables vertical scrolling for the form
              maxHeight: "100%", // Ensures the form respects the parent Box height
              width: "100%",
              paddingBottom: "5vh",
            }}
          >
            <Fieldset.Root size="lg" maxW="md">
              <Fieldset.Content>
                <Field label="Full Name">
                  <Input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                  />
                </Field>

                <Field label="Email ">
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </Field>

                <Field label="Phone">
                  <Input
                    name="phone"
                    type="text"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </Field>

                <Field label="Special Request(s)">
                  <Textarea
                    name="specialRequest"
                    value={formData.specialRequest}
                    onChange={handleInputChange}
                    placeholder="Enter request(s) here..."
                  />
                </Field>
              </Fieldset.Content>
            </Fieldset.Root>
          </form>
        </VStack>
      </VStack>
    </>
  );
};

export default GuestDetails;
