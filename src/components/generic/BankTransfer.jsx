import { HStack, Spinner, Text, VStack, Button } from "@chakra-ui/react";
import { toaster } from "@/components/ui/toaster";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { XCircle } from "lucide-react";

const BankTransfer = ({ onRetry, totalPrice }) => {
  const [loading, setLoading] = useState(true);
  const [bankDetails, setBankDetails] = useState([]);
  const [fetchStatus, setFetchStatus] = useState(null);

  const fetchBankDetails = async (abortController) => {
    const startTime = Date.now();
    const MIN_LOADING_TIME = 3000;
    let apiError = false;

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/bookings/bank-details`,
        { signal: abortController.signal }
      );

      if (response.status === 200) {
        setBankDetails(response.data.details);
        setFetchStatus("success");
      }
    } catch (error) {
      if (error.name === "CanceledError") return; // Don't set error state if request was cancelled
      apiError = true;
      setFetchStatus("error");
    } finally {
      if (!abortController.signal.aborted) {
        // Only proceed if not aborted
        const elapsedTime = Date.now() - startTime;

        if (elapsedTime < MIN_LOADING_TIME) {
          const remainingTime = MIN_LOADING_TIME - elapsedTime;
          await new Promise((resolve) => setTimeout(resolve, remainingTime));
        }

        if (apiError) {
          toaster.create({
            title: "Error!",
            description: "Error occured generating bank details",
            type: "error",
            duration: 3000,
          });
        }

        setLoading(false);
      }
    }
  };

  useEffect(() => {
    const abortController = new AbortController();

    fetchBankDetails(abortController);

    return () => {
      abortController.abort(); // Cleanup on unmount
    };
  }, []);

  if (loading) {
    return (
      <HStack
        overflowY="hidden"
        px="1rem"
        py="2rem"
        justifyContent="center"
        w="100%"
      >
        <Spinner borderWidth=".5rem" color="blue.500" boxSize="10rem" />
      </HStack>
    );
  }

  if (fetchStatus === "error") {
    return (
      <VStack
        spacing={4}
        py="2rem"
        px="1rem"
        w="100%"
        alignItems="center"
        justifyContent="center"
      >
        <XCircle size={64} className="text-red-500" />
        <Text fontSize="xl" fontWeight="medium" textAlign="center">
          Unable to fetch bank details
        </Text>
        <Text color="gray.500" textAlign="center">
          We encountered an error while retrieving the bank details. Please try
          again.
        </Text>
        <Button onClick={onRetry} colorScheme="blue" size="md">
          Retry
        </Button>
      </VStack>
    );
  }

  return (
    <VStack
      spacing={4}
      overflowY="hidden"
      px="1rem"
      py="2rem"
      w="100%"
      alignItems="flex-start"
    >
      <Text fontSize="xl" fontWeight="medium">
        Bank Transfer Details
      </Text>

      <HStack w="100%">
        {/* {bankDetails.map((detail, index) => ( */}
        <VStack
          // key={index}
          w="50%"
          p={4}
          border="1px"
          borderColor="gray.200"
          borderRadius="md"
          alignItems="flex-start"
          spacing={2}
        >
          <HStack w="100%" justifyContent="space-between">
            <Text color="gray.600">Product</Text>
            <Text fontWeight="medium">Room Reservation</Text>
          </HStack>
          <HStack w="100%" justifyContent="space-between">
            <Text color="gray.600">Reference</Text>
            <Text fontWeight="medium">872982928282</Text>
          </HStack>
          <HStack w="100%" justifyContent="space-between">
            <Text color="gray.600">Amount</Text>
            <Text fontWeight="semibold" fontSize="lg">
              ₦{totalPrice.toLocaleString()}
            </Text>
          </HStack>
        </VStack>
        {/* ))} */}
        <VStack
          // key={index}
          w="50%"
          p={4}
          border="1px"
          borderColor="gray.200"
          borderRadius="md"
          alignItems="flex-start"
          spacing={2}
          bg="green.100"
        >
          <HStack w="100%" justifyContent="space-between">
            <Text fontWeight="medium">Bank Name:</Text>
            <Text fontWeight="medium">{bankDetails.bankName}</Text>
          </HStack>
          <HStack w="100%" justifyContent="space-between">
            <Text fontWeight="medium">Account Number:</Text>
            <Text fontWeight="medium">{bankDetails.accountNumber}</Text>
          </HStack>
          <HStack w="100%" justifyContent="space-between">
            <Text fontWeight="medium">Account Name:</Text>
            <Text fontWeight="medium">{bankDetails.accountName}</Text>
          </HStack>
          <HStack w="100%" justifyContent="space-between">
            <Text fontWeight="medium">Sort Code:</Text>
            <Text fontWeight="medium">{bankDetails.sortCode}</Text>
          </HStack>
        </VStack>
      </HStack>
      <Text color="gray.500" fontSize="sm">
        Please include your booking reference in the transfer description
      </Text>
    </VStack>
  );
};

export default BankTransfer;
