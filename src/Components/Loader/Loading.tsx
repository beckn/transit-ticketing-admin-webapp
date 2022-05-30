import {
  Box,Center,CircularProgress
} from "@chakra-ui/react";


const Loader=() => {
  return (
    <Center h="100vh">
      <CircularProgress isIndeterminate 

        color="#D27F65"

      />
    </Center>
  );
};

export default Loader;




   
