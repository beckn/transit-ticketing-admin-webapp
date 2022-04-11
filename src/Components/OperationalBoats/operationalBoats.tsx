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

export default function OperationalBoats() {
  const queryClient = useQueryClient();
  const { status, data, error, isFetching } = useApi(apiUrl.OPERATIONAL_BOATS);
  console.log(status, data, error, isFetching);
  return (
    <Box>
      <Navigation>
        {isFetching ? (
          <Loader />
        ) : (
          <>
            <Navbar
              widgetData={getWidgetData(data, "status", "New")}
              pageTitle="Operational Boats"
              tableTitle="List of operational boats :"
              totalReport="Total Boats"
              wayBillReport="Boats Available"
              BankingReport="Boats Out Of Service"
            />
            <OperationalBoatsTabs
              dataForBoat={data}
              columnsForBoat={boatColumns}
            />
          </>
        )}
      </Navigation>
    </Box>
  );
}
