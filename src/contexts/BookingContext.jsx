import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useDisclosure } from "@chakra-ui/react";
import { io } from "socket.io-client";

// Create the context
const BookingContext = createContext();

// Custom hook to use BookingContext
export const useBooking = () => useContext(BookingContext);

// BookingProvider component with socket connection
export const BookingProvider = ({ children }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    specialRequests: "",
  });

  return (
    <BookingContext.Provider
      value={{
        isDialogOpen,
        setIsDialogOpen,
        formData,
        setFormData,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};
