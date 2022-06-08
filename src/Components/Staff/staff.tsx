import { Box } from "@chakra-ui/react";
import { useQueryClient } from "react-query";
import AuthContainer from "../../Components/AuthRoute/index";
import Navigation from "../../Components/Navigation/navigation";
import { apiUrl } from "../../Config/apiUrl";
import { useApi } from "../../hooks/useApi";
import ServerError from "../../Pages/ErrorPages/ServerError";
import { columnsForStaff } from "../../Pages/Home/Data/data";
import Loader from "../Loader/Loading";
import Navbar from "../Navbar/navbar";
import StaffTabs from "../Tabs/staffTabs";

export default function Staff() {
  const queryClient = useQueryClient();
  const { status, data, error, isLoading } = useApi(apiUrl.STAFF_BOATMASTER);
  const ticketMasterData = useApi(apiUrl.STAFF_TICKETMASTER);
  if (data?.code === 500 || ticketMasterData?.data?.code === 500) {
    return (
      <Box>
        <Navigation>
          <ServerError />
        </Navigation>
      </Box>
    );
  }
  return (
    <AuthContainer>
      <Box>
        <Navigation>
          {isLoading || ticketMasterData.isLoading ? (
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
    </AuthContainer>
  );
}
