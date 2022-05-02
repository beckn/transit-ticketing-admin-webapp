import { Box } from "@chakra-ui/react";
import Navigation from "../../Components/Navigation/navigation";
import Navbar from "../Navbar/navbar";
import { useQueryClient } from "react-query";
import { useApi } from "../../hooks/useApi";
import { apiUrl } from "../../Config/apiUrl";
import { columnsForWayBill } from "../../Pages/Home/Data/data";
import WayBillReportsTabs from "../Tabs/wayBillReportsTabs";
import { getWidgetData } from "../../utils/helpers";
import Loader from "../Loader/Loading";
import { Server } from "http";
import ServerError from "../../Pages/ErrorPages/ServerError";

export default function WayBillReport() {
  const queryClient = useQueryClient();
  const { status, data, error, isLoading } = useApi(apiUrl.WAY_BILL_REPORTS);

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
              widgetData={getWidgetData(
                data?.waybillReports,
                "status",
                "Completed"
              )}
              pageTitle="Reports"
              tableTitle="Way Bill Reports :"
              totalReport="Total Reports"
              wayBillReport="Way Bill Reports"
              BankingReport="Banking Reports"
            />
            <WayBillReportsTabs
              dataForBoat={data?.waybillReports}
              columnsForBoat={columnsForWayBill}
            />
          </>
        )}
      </Navigation>
    </Box>
  );
}
