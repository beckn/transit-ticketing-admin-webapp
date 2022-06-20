import { CheckCircleIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Divider,
  Heading,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import AuthContainer from "../../../Components/AuthRoute";
import Navigation from "../../../Components/Navigation/navigation";
import { AssignBoatsForm } from "../Boat/AssignBoatForm";

export default function Counter() {
  const dataModal = useDisclosure();

  return (
    <AuthContainer>
      <Box>
        <Navigation>
          <>
            {/* <Navbar
            pageTitle="Assignments"
            tableTitle="List of Counter Assignments :"
            totalReport="Total Schedules"
            wayBillReport="Boats Counter Schedule"
            BankingReport="Ticket Master"
          /> */}
            <Heading m="31px 0px 56px 76px" color="#E79378">
              Assignment of Counter:
            </Heading>
            <Divider
              backgroundColor={"grey"}
              height="2px"
              m="31px 20px 56px 76px"
              width="90%"
            />
            <AssignBoatsForm dataModal={dataModal} />
          </>
        </Navigation>
        <Modal
          onClose={dataModal.onClose}
          isOpen={dataModal.isOpen}
          isCentered
          size="md"
        >
          <ModalOverlay />
          <ModalContent h="300">
            <ModalCloseButton />
            <Center mt="10" alignItems="center" flexDirection="column">
              <CheckCircleIcon color="#648A4C" mt="30" boxSize="38" />
              <Text mt="10" fontSize="2xl" textAlign="center">
                Counter Assigned <br />
                Successfully!
              </Text>
            </Center>
          </ModalContent>
        </Modal>
      </Box>
    </AuthContainer>
  );
}
