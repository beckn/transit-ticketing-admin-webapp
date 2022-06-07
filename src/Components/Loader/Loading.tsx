import React, { ReactElement } from "react";
import {
  Center,CircularProgress
} from "@chakra-ui/react";


const Loader = (): ReactElement => {
  return (
    <Center h="100vh">
      <CircularProgress isIndeterminate 
        color="#D27F65"
      />
    </Center>
  );
};

export default Loader;




   
