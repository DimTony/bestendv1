import { HStack, Tabs, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { StepsNextTrigger, StepsPrevTrigger } from "../ui/steps";
import { Button } from "../ui/button";
import { RiPaypalLine } from "react-icons/ri";
import { LuCheckSquare, LuFolder, LuUser } from "react-icons/lu";
import { CreditCard, Landmark } from "lucide-react";
import BankTransfer from "./BankTransfer";
import DefaultPayment from "./DefaultPayment";

const Payment = ({ totalPrice }) => {
  const [key, setKey] = useState(0); // Add this to control remounting

  const handleRetry = () => {
    setKey((prev) => prev + 1); // Increment key to force remount
  };
  return (
    <>
      <VStack spacing={4} overflowY="hidden" maxHeight="58vh" w="100%">
        <Tabs.Root lazyMount unmountOnExit w="100%" defaultValue="default">
          <HStack w="100%" justifyContent="space-between">
            <Tabs.List>
              <Tabs.Trigger value="members">
                <Landmark />
                Bank Transfer
              </Tabs.Trigger>
              <Tabs.Trigger value="projects">
                <CreditCard />
                Debit / Credit Card
              </Tabs.Trigger>
              <Tabs.Trigger value="tasks">
                <RiPaypalLine size="1.5rem" />
                PayPal
              </Tabs.Trigger>
            </Tabs.List>

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

              {/* <StepsNextTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  bg="blue.500"
                  color="#fff"
                  //   disabled={!isFormValid}
                >
                  Next
                </Button>
              </StepsNextTrigger> */}
            </HStack>
          </HStack>
          <VStack w="100%" h="100%" overflowY="auto">
            <Tabs.Content value="default">
              <DefaultPayment />
            </Tabs.Content>
            <Tabs.Content value="members">
              <BankTransfer
                totalPrice={totalPrice}
                key={key}
                onRetry={handleRetry}
              />
            </Tabs.Content>
            <Tabs.Content value="projects">Manage your projects</Tabs.Content>

            <Tabs.Content value="tasks">
              Manage your tasks for freelancers
            </Tabs.Content>
          </VStack>
        </Tabs.Root>
      </VStack>
    </>
  );
};

export default Payment;
