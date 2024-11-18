import {
  Button,
  Fieldset,
  HStack,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Field } from "../ui/field";
import { NativeSelectField, NativeSelectRoot } from "../ui/native-select";

const Availability = ({ topValue }) => {
  const handleAvailabilityCheck = () => {};
  return (
    <>
      <HStack
        bg={{ md: "#000", base: "rgba(0, 0, 0, 0.79)" }}
        borderRadius="8px"
        position="relative"
        top={topValue}
        zIndex="2"
        boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
        backdropFilter="blur(13.1px)"
        border="1px solid rgba(0, 0, 0, 0.3)"
      >
        <form onSubmit={handleAvailabilityCheck} style={{ height: "100%" }}>
          <HStack spacing={4} align="flex-start" color="#fff">
            <Field label="CHECK-IN" py="1rem" px="1rem">
              <Input
                name="checkIn"
                placeholder="Select date"
                type="date"
                bg="transparent"
                color="#fff"
                _hover={{ bg: "gray.200", color: "#000", cursor: "pointer" }} // Optional hover styling
                _focus={{
                  borderColor: "blue.500",
                  boxShadow: "outline",
                  bg: "gray.200",
                  color: "#000",
                }}
              />
            </Field>

            <Field label="CHECK-OUT" py="1rem" px="1rem">
              <Input
                name="checkOut"
                placeholder="Select date"
                type="date"
                bg="transparent"
                color="#fff"
                _hover={{ bg: "gray.200", color: "#000", cursor: "pointer" }} // Optional hover styling
                _focus={{
                  borderColor: "blue.500",
                  boxShadow: "outline",
                  bg: "gray.200",
                  color: "#000",
                }}
              />
            </Field>

            <Field label="ROOMS" py="1rem" px=".5rem">
              <NativeSelectRoot>
                <NativeSelectField
                  name="ROOMS"
                  items={["Standard", "Executive", "Super Executive"]}
                  bg="transparent"
                  color="#fff"
                  _hover={{ bg: "gray.200", color: "#000", cursor: "pointer" }} // Optional hover styling
                  _focus={{
                    borderColor: "blue.500",
                    boxShadow: "outline",
                    bg: "gray.200",
                    color: "#000",
                  }}
                  width="fit-content"
                />
              </NativeSelectRoot>
            </Field>

            <Field label="GUESTS" py="1rem" px=".5rem">
              <NativeSelectRoot>
                <NativeSelectField
                  name="GUESTS"
                  items={["1", "2", "3-5", "6-10", "10+"]}
                  bg="transparent"
                  color="#fff"
                  _hover={{ bg: "gray.200", color: "#000", cursor: "pointer" }} // Optional hover styling
                  _focus={{
                    borderColor: "blue.500",
                    boxShadow: "outline",
                    bg: "gray.200",
                    color: "#000",
                  }}
                />
              </NativeSelectRoot>
            </Field>

            <Button
              h="6.5rem"
              textTransform="uppercase"
              borderTopRightRadius="8px"
              borderBottomRightRadius="8px"
              bg="#C5A880"
              color="#fff"
              _hover={{ bg: "#edf2f7", color: "#000" }}
              type="submit"
            >
              CHECK AVAILABILITY
            </Button>
          </HStack>
        </form>
      </HStack>
    </>
  );
};

export default Availability;
