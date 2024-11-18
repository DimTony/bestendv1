import React, { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogHeader,
  DialogBody,
  DialogFooter,
  DialogRoot,
  DialogTitle,
  DialogCloseTrigger,
} from "@/components/ui/dialog";
import {
  StepsRoot,
  StepsList,
  StepsItem,
  StepsContent,
  StepsCompletedContent,
  StepsPrevTrigger,
  StepsNextTrigger,
} from "@/components/ui/steps";
import {
  HStack,
  Group,
  Stack,
  VStack,
  Box,
  Text,
  Separator,
} from "@chakra-ui/react";
import RoomSelection from "./RoomSelection";
import {
  calculateTotalGuests,
  calculateTotalPrice,
} from "@/utils/Calculations";
import { useNextButtonState } from "@/utils/Functions";
import GuestDetails from "./GuestDetails";
import Payment from "./Payment";
import Confirmation from "./Confirmation";

const BookNow = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });
  const [rooms, setRooms] = useState([{}]);
  // const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(true);
  const [isNextButtonDisabled, setIsNextButtonDisabled] =
    useNextButtonState(rooms);

  // Calculate totals using useMemo to prevent unnecessary recalculations
  const totalPrice = useMemo(() => calculateTotalPrice(rooms), [rooms]);
  const totalGuests = useMemo(() => calculateTotalGuests(rooms), [rooms]);

  return (
    <DialogRoot placement="center" open={isOpen} onOpenChange={onClose}>
      <DialogContent maxW="60vw" pb="1rem">
        <DialogHeader>
          <DialogTitle>New Booking</DialogTitle>
        </DialogHeader>

        <DialogBody maxH="70vh">
          <VStack spacing={4}>
            {/* Price Summary Bar */}
            <Box
              w="100%"
              px={4}
              py={1}
              bg="gray.50"
              borderRadius="md"
              shadow="sm"
            >
              <HStack justifyContent="space-between">
                <Stack>
                  <Text fontSize="sm" color="gray.600">
                    Booking Summary
                  </Text>
                  <HStack spacing={4}>
                    <Text>
                      {rooms.length} {rooms.length === 1 ? "Room" : "Rooms"}
                    </Text>
                    <Text>•</Text>
                    <Text>
                      {totalGuests} {totalGuests === 1 ? "Guest" : "Guests"}
                    </Text>
                  </HStack>
                </Stack>
                <Stack align="flex-end">
                  <Text fontSize="sm" color="gray.600">
                    Total Price
                  </Text>
                  <Text fontSize="xl" fontWeight="bold">
                    ₦{totalPrice.toLocaleString()}
                  </Text>
                </Stack>
              </HStack>
            </Box>

            <StepsRoot
              orientation="vertical"
              height="300px"
              defaultValue={1}
              count={3}
              linear={true}
              colorPalette="green"
            >
              <StepsList>
                <StepsItem index={0} title="Room Selection" />
                <StepsItem index={1} title="Guest Details" />
                <StepsItem index={2} title="Payment" />
                {/* <StepsItem index={3} title="Confirmation" /> */}
              </StepsList>

              <Separator orientation="vertical" />

              <Stack justifyContent="space-between" w="100%">
                <StepsContent index={0}>
                  <RoomSelection
                    rooms={rooms}
                    onRoomsChange={setRooms}
                    isNextButtonDisabled={isNextButtonDisabled}
                    setIsNextButtonDisabled={setIsNextButtonDisabled}
                    totalPrice={totalPrice}
                    totalGuests={totalGuests}
                  />
                </StepsContent>
                <StepsContent index={1}>
                  <GuestDetails
                    formData={formData}
                    setFormData={setFormData}
                    isNextButtonDisabled={isNextButtonDisabled}
                    setIsNextButtonDisabled={setIsNextButtonDisabled}
                  />
                </StepsContent>
                <StepsContent index={2}>
                  <Payment totalPrice={totalPrice} />
                </StepsContent>
                {/* <StepsContent index={3}>
                  <Confirmation />
                </StepsContent> */}
                <StepsCompletedContent>
                  <Confirmation totalPrice={totalPrice} />
                </StepsCompletedContent>
              </Stack>
            </StepsRoot>
          </VStack>
        </DialogBody>

        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
};

export default BookNow;
