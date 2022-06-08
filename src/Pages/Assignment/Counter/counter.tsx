import { Box, Divider, Heading } from "@chakra-ui/react";
import AuthContainer from "../../../Components/AuthRoute";
import Navigation from "../../../Components/Navigation/navigation";
import { AssignBoatsForm } from "../Boat/AssignBoatForm";

export default function Counter() {
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
              backgroundColor={"black"}
              height="2px"
              m="31px 20px 56px 76px"
              width="90%"
            />
            <AssignBoatsForm />
          </>
        </Navigation>
      </Box>
    </AuthContainer>
  );
}
