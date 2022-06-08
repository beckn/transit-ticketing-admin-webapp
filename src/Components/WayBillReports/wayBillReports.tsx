import { Box } from "@chakra-ui/react";
import { useQueryClient } from "react-query";
import AuthContainer from "../../Components/AuthRoute/index";
import Navigation from "../../Components/Navigation/navigation";
import { apiUrl } from "../../Config/apiUrl";
import { useApi } from "../../hooks/useApi";
import ServerError from "../../Pages/ErrorPages/ServerError";
import { columnsForWayBill } from "../../Pages/Home/Data/data";
import Loader from "../Loader/Loading";
import Navbar from "../Navbar/navbar";
import WayBillReportsTabs from "../Tabs/wayBillReportsTabs";

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
    <AuthContainer>
      <Box>
        <Navigation>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <Navbar
                widgetData={{
                  total: data.waybillReportsCount,
                  remaining: 0,
                  available: data.waybillReportsCount,
                }}
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
    </AuthContainer>
  );
}
