import { Box } from "@chakra-ui/react";
import { useQueryClient } from "react-query";
import AuthContainer from "../../Components/AuthRoute/index";
import Navigation from "../../Components/Navigation/navigation";
import { apiUrl } from "../../Config/apiUrl";
import { useApi } from "../../hooks/useApi";
import ServerError from "../../Pages/ErrorPages/ServerError";
import { boatColumns } from "../../Pages/Home/Data/data";
import Loader from "../Loader/Loading";
import Navbar from "../Navbar/navbar";
import OperationalBoatsTabs from "../Tabs/operationalBoatsTabs";

export default function OperationalBoats() {
  const queryClient = useQueryClient();
  const { status, data, error, isLoading } = useApi(apiUrl.OPERATIONAL_BOATS);
  if (status === "error") {
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
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <Navbar
                widgetData={{
                  total: data?.boatsCount,
                  remaining: data?.boatsOutOfService,
                  available: data?.boatsAvailable,
                }}
                pageTitle="Operational Boats"
                tableTitle="List of operational boats :"
                totalReport="Total Boats"
                wayBillReport="Boats Available"
                BankingReport="Boats Out Of Service"
              />
              <OperationalBoatsTabs
                dataForBoat={data?.boats}
                columnsForBoat={boatColumns}
              />
            </>
          )}
        </Navigation>
      </Box>
    </AuthContainer>
  );
}
