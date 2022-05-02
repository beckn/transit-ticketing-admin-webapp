import { Box } from "@chakra-ui/react";
import Navigation from "../../Components/Navigation/navigation";
import Navbar from "../Navbar/navbar";
import { useQueryClient } from "react-query";
import { useApi } from "../../hooks/useApi";
import { apiUrl } from "../../Config/apiUrl";
import { boatData, boatColumns } from "../../Pages/Home/Data/data";
import OperationalBoatsTabs from "../Tabs/operationalBoatsTabs";
import Loader from "../Loader/Loading";
import { getWidgetData } from "../../utils/helpers";
import ServerError from "../../Pages/ErrorPages/ServerError";

export default function OperationalBoats() {
  const queryClient = useQueryClient();
  const { status, data, error, isLoading } = useApi(apiUrl.OPERATIONAL_BOATS);
  console.log(status, data, error, isLoading);
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
  );
}
