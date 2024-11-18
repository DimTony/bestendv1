import React, { useState, useEffect } from "react";
import { Box, VStack, Input, Button, HStack, Text } from "@chakra-ui/react";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "@/components/ui/accordion";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Field } from "../ui/field";
import { NativeSelectField, NativeSelectRoot } from "../ui/native-select";
import { Plus, Trash2 } from "lucide-react";
import { calculateRoomPrice } from "@/utils/Calculations";
import { StepsNextTrigger, StepsPrevTrigger } from "../ui/steps";

const RoomSelection = ({
  rooms = [{}],
  onRoomsChange,
  totalPrice,
  totalGuests,
}) => {
  const [expandedRoom, setExpandedRoom] = useState(""); // Changed to string
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(true);

  const roomTypes = [
    { value: "", label: "Select a room type" },
    { value: "Standard", label: "Standard" },
    { value: "Executive", label: "Executive" },
    { value: "Super Executive", label: "Super Executive" },
  ];

  const isRoomComplete = (room) => {
    return (
      room?.roomType &&
      room?.roomType !== "" &&
      room?.checkInDate &&
      room?.checkOutDate &&
      room?.guests &&
      room?.guests >= 1
    );
  };

  const validateRooms = (currentRooms) => {
    const hasOneCompleteRoom = currentRooms.some((room) =>
      isRoomComplete(room)
    );
    return hasOneCompleteRoom;
  };

  useEffect(() => {
    setIsNextButtonDisabled(!validateRooms(rooms));
  }, [rooms]);

  const handleRoomDataChange = (index, key, value) => {
    const updatedRooms = [...rooms];
    updatedRooms[index][key] = value;
    onRoomsChange(updatedRooms);
  };

  // const handleAddRoom = () => {
  //   const hasCompleteRoom = validateRooms(rooms);
  //   if (hasCompleteRoom) {
  //     onRoomsChange([...rooms, {}]);
  //     setExpandedRoom(rooms.length.toString()); // Convert to string
  //   }
  // };

  const handleAddRoom = () => {
    const hasCompleteRoom = validateRooms(rooms);
    if (hasCompleteRoom) {
      onRoomsChange([...rooms, {}]);
      // setExpandedRoom(rooms.length.toString()); // This will expand the new room
    }
  };

  const handleToggleRoom = (index) => {
    setExpandedRoom(index.toString()); // Convert to string
  };

  const formatDate = (date) => {
    if (!date) return "";
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  const getRoomDisplayText = (room, index) => {
    if (!room?.roomType) {
      return "Select room preference";
    }

    const guestsText = room.guests
      ? `${room.guests} ${room.guests === 1 ? "Guest" : "Guests"}`
      : "";

    const datesText =
      room.checkInDate && room.checkOutDate
        ? `${formatDate(room.checkInDate)} - ${formatDate(room.checkOutDate)}`
        : "";

    return [room.roomType, guestsText, datesText].filter(Boolean).join(" • ");
  };

  if (!Array.isArray(rooms)) {
    return null;
  }

  const handleRemoveRoom = (indexToRemove) => {
    const updatedRooms = rooms.filter((_, index) => index !== indexToRemove);
    onRoomsChange(updatedRooms);

    if (parseInt(expandedRoom) === indexToRemove) {
      setExpandedRoom(Math.max(0, indexToRemove - 1).toString()); // Convert to string
    } else if (parseInt(expandedRoom) > indexToRemove) {
      setExpandedRoom((parseInt(expandedRoom) - 1).toString()); // Convert to string
    }
  };

  return (
    <VStack spacing={4} overflowY="hidden" maxHeight="55vh" w="100%">
      <HStack w="100%" justifyContent="space-between">
        <Button
          bg="blue.500"
          onClick={handleAddRoom}
          disabled={!validateRooms(rooms)}
        >
          Add Room <Plus />
        </Button>

        <HStack>
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
              disabled={isNextButtonDisabled}
            >
              Next
            </Button>
          </StepsNextTrigger>
        </HStack>
      </HStack>

      <VStack w="100%" h="100%" overflowY="auto">
        <AccordionRoot
          type="single"
          collapsible
          value={expandedRoom}
          onValueChange={setExpandedRoom}
        >
          {rooms.map((room, index) => (
            <AccordionItem key={index} value={index.toString()}>
              <AccordionItemTrigger>
                <HStack w="100%" justifyContent="space-between">
                  <Text>{getRoomDisplayText(room, index)}</Text>
                  <Text
                    fontWeight="semibold"
                    color={calculateRoomPrice(room) > 0 ? "black" : "gray.400"}
                  >
                    ₦{calculateRoomPrice(room).toLocaleString()}
                  </Text>
                </HStack>
              </AccordionItemTrigger>

              <AccordionItemContent>
                <VStack spacing={4} alignItems="flex-start">
                  <Field label="Room Type">
                    <NativeSelectRoot>
                      <NativeSelectField
                        items={roomTypes.map((type) => ({
                          value: type.value,
                          label: type.label,
                        }))}
                        value={room?.roomType || ""}
                        onChange={(e) =>
                          handleRoomDataChange(
                            index,
                            "roomType",
                            e.target.value
                          )
                        }
                      />
                    </NativeSelectRoot>
                  </Field>

                  <Field label="Number of Guests">
                    <Input
                      type="number"
                      min="1"
                      value={room?.guests || ""}
                      onChange={(e) =>
                        handleRoomDataChange(
                          index,
                          "guests",
                          parseInt(e.target.value) || ""
                        )
                      }
                    />
                  </Field>

                  <Field label="Check-In & Check-Out Dates">
                    <Box w="100%" mb="8.5rem">
                      <DateRange
                        editableDateInputs={true}
                        onChange={(item) => {
                          handleRoomDataChange(
                            index,
                            "checkInDate",
                            item.selection.startDate
                          );
                          handleRoomDataChange(
                            index,
                            "checkOutDate",
                            item.selection.endDate
                          );
                        }}
                        moveRangeOnFirstSelection={false}
                        ranges={[
                          {
                            startDate: room?.checkInDate,
                            endDate: room?.checkOutDate,
                            key: "selection",
                          },
                        ]}
                        style={{
                          height: "100px",
                        }}
                        minDate={new Date()}
                      />
                    </Box>
                  </Field>
                  {index > 0 && (
                    <Button
                      size="xs"
                      variant="ghost"
                      color="red"
                      colorScheme="gray"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveRoom(index);
                      }}
                      aria-label={`Remove room ${index + 1}`}
                    >
                      Remove <Trash2 color="red" size={16} />
                    </Button>
                  )}
                </VStack>
              </AccordionItemContent>
            </AccordionItem>
          ))}
        </AccordionRoot>
      </VStack>
    </VStack>
  );
};

export default RoomSelection;
