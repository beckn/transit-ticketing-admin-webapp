import { Box } from "@chakra-ui/react";
import Navigation from "../../../Components/Navigation/navigation";
import Navbar from "../../../Components/Navbar/navbar";
import { dataForCounter, columnsForCounter } from "../data";
import CounterTabs from "../../../Components/Tabs/counterTabs";

export default function Counter() {
  return (
    <Box>
      <Navigation>
        <>
          <Navbar
            pageTitle="Assignments"
            tableTitle="List of Counter Assignments :"
            totalReport="Total Schedules"
            wayBillReport="Boats Counter Schedule"
            BankingReport="Ticket Master"
          />
          <CounterTabs
            dataForBoat={dataForCounter}
            columnsForBoat={columnsForCounter}
          />
        </>
      </Navigation>
    </Box>
  );
}
