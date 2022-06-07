import React from "react";
import { Center, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const PageNotFound = (): React.ReactElement => {
  return (
    <Center height="100vh" display="flex" flexDirection="column">
      <Heading>404 Error</Heading>
      <Heading>Page Not Found</Heading>
      <Link to="/">
        <Heading _hover={{ textDecoration: "underline" }} color="blue.500">
          Home Page
        </Heading>
      </Link>
    </Center>
  );
};

export default PageNotFound;
