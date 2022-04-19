import { Box } from "@chakra-ui/react";
import Navigation from "../../../Components/Navigation/navigation";
import Navbar from "../../../Components/Navbar/navbar";
import { dataForCounter, columnsForCounter } from "../data";
import BoatsTabs from "../../../Components/Tabs/boatsTabs";
export default function OperationalBoats() {
  return (
    <Box>
      <Navigation>
        <>
          <Navbar
            pageTitle="Operational Boats"
            tableTitle="List of operational boats :"
            totalReport="Total Boats"
            wayBillReport="Boats Available"
            BankingReport="Boats Out Of Service"
          />
          <BoatsTabs
            dataForBoat={dataForCounter}
            columnsForBoat={columnsForCounter}
          />
        </>
      </Navigation>
    </Box>
  );
}
