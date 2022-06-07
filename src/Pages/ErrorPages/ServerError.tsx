import React from "react";
import { Center, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const ServerError = (): React.ReactElement => {
  return (
    <Center height="100vh" display="flex" flexDirection="column">
      <Heading>Oops! Something went wrong</Heading>
      <Heading>Internal server error</Heading>
      <Link to="/">
        <Heading _hover={{ textDecoration: "underline" }} color="blue.500">
          {" "}
          Back to Home
        </Heading>
      </Link>
    </Center>
  );
};

export default ServerError;
