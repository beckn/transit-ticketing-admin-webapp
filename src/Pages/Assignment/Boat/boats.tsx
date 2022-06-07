import React, { ReactElement } from "react";
import { Box, Heading, Divider } from "@chakra-ui/react";
import Navigation from "../../../Components/Navigation/navigation";
// import Navbar from "../../../Components/Navbar/navbar";
import { AssignBoatsForm } from "./AssignBoatForm";

export default function OperationalBoats(): ReactElement {
  return (
    <Box>
      <Navigation>
        <>
          {/* <Navbar
            pageTitle="Operational Boats"
            tableTitle="List of operational boats :"
            totalReport="Total Boats"
            wayBillReport="Boats Available"
            BankingReport="Boats Out Of Service"
          /> */}
          <Heading m="31px 0px 56px 76px" color="#E79378">
            Assignment of Operational Boats:
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
  );
}
