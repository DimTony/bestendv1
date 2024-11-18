import { Button, HStack, IconButton, Image } from "@chakra-ui/react";
import React from "react";
import logo from "../../assets/images/bestend-high-resolution-logo-white-transparent.png";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <HStack
        w="100%"
        px="1rem"
        justifyContent="space-between"
        alignItems="center"
      >
        <Image
          src={logo}
          alt="logo"
          w={{ md: "10rem", base: "5rem" }}
          h="auto"
        />

        <HStack
          display={{ md: "flex", base: "none" }}
          //   w="50vw"
          justifyContent="space-between"
          mr="4rem"
          h="3.5rem"
          px="1.5rem"
          borderRadius="8px"
          bg="rgba(197, 168, 128, 0.2)"
          boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
          backdropFilter="blur(5px)"
          border="1px solid rgba(255, 255, 255, 0.3)"
        >
          <Link to="/">
            <Button
              variant="unstyled"
              color="#fff"
              fontSize="1.2rem"
              fontWeight="600"
              _hover={{ transform: "scale(1.1)" }}
            >
              HOME
            </Button>
          </Link>
          <Link to="/about">
            <Button
              variant="unstyled"
              color="#fff"
              fontSize="1.2rem"
              fontWeight="600"
              _hover={{ transform: "scale(1.1)" }}
            >
              ABOUT
            </Button>
          </Link>
          <Link to="/rooms">
            <Button
              variant="unstyled"
              color="#fff"
              fontSize="1.2rem"
              fontWeight="600"
              _hover={{ transform: "scale(1.1)" }}
            >
              ROOMS
            </Button>
          </Link>
          <Link to="/resto-and-bar">
            <Button
              variant="unstyled"
              color="#fff"
              fontSize="1.2rem"
              fontWeight="600"
              _hover={{ transform: "scale(1.1)" }}
            >
              RESTO & BAR
            </Button>
          </Link>
          <Link to="/blog">
            <Button
              variant="unstyled"
              color="#fff"
              fontSize="1.2rem"
              fontWeight="600"
              _hover={{ transform: "scale(1.1)" }}
            >
              BLOG
            </Button>
          </Link>
          <Link to="/contact">
            <Button
              variant="unstyled"
              color="#fff"
              fontSize="1.2rem"
              fontWeight="600"
              _hover={{ transform: "scale(1.1)" }}
            >
              CONTACT
            </Button>
          </Link>
        </HStack>

        <IconButton
          bg="#fff"
          display={{ md: "none", base: "flex" }}
          aria-label="menu"
        >
          <Menu color="#000" />
        </IconButton>
      </HStack>
    </>
  );
};

export default Navbar;
