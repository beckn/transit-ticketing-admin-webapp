import { Box, CircularProgress, Center } from "@chakra-ui/react";
import Navigation from "../../Components/Navigation/navigation";
import Navbar from "../Navbar/navbar";
import { useQueryClient } from "react-query";
import { useApi } from "../../hooks/useApi";
import { apiUrl } from "../../Config/apiUrl";
import { columnsForStaff } from "../../Pages/Home/Data/data";
import StaffTabs from "../Tabs/staffTabs";
import Loader from "../Loader/Loading";

export default function Staff() {
  const queryClient = useQueryClient();
  const { status, data, error, isFetching } = useApi(apiUrl.STAFF_BOATMASTER);
  const ticketMasterData = useApi(apiUrl.STAFF_TICKETMASTER);
  return (
    <Box>
      <Navigation>
        {isFetching || ticketMasterData.isFetching ? (
          <Loader />
        ) : (
          <>
            <Navbar
              pageTitle="Staff"
              tableTitle="Boat Master :"
              totalReport="Total Staff"
              wayBillReport="Boat Master"
              BankingReport="Ticket Master"
              widgetData={{
                total: data.length + ticketMasterData?.data.length,
                remaining: data.length,
                available: ticketMasterData?.data.length,
              }}
            />
            <StaffTabs
              dataForBoatMaster={data}
              columnsForBoat={columnsForStaff}
              dataForTicketMaster={ticketMasterData?.data}
            />
          </>
        )}
      </Navigation>
    </Box>
  );
}
