import { useEffect, useState } from "react";

export const isRoomComplete = (room) => {
  // Add all required room fields here
  const requiredFields = [
    "adults",
    "children",
    "roomType",
    // Add other required fields as needed
  ];

  return requiredFields.every((field) => {
    const value = room[field];
    // Check for undefined, null, empty string, and ensure numbers are valid
    if (typeof value === "number") {
      return value >= 0;
    }
    return value !== undefined && value !== null && value !== "";
  });
};

// Function to check if at least one room is completely filled out
export const hasOneCompleteRoom = (rooms) => {
  if (!Array.isArray(rooms) || rooms.length === 0) {
    return false;
  }

  return rooms.some((room) => isRoomComplete(room));
};

// Hook to manage next button disabled state
export const useNextButtonState = (rooms) => {
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(true);

  useEffect(() => {
    setIsNextButtonDisabled(!hasOneCompleteRoom(rooms));
  }, [rooms]);

  return [isNextButtonDisabled, setIsNextButtonDisabled];
};

export function formatPrice(amount) {
  return `₦${amount.toLocaleString("en-NG")}`;
}
