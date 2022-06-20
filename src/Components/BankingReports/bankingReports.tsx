import { Box } from "@chakra-ui/react";
import { useQueryClient } from "react-query";
import AuthContainer from "../../Components/AuthRoute/index";
import Navigation from "../../Components/Navigation/navigation";
import { apiUrl } from "../../Config/apiUrl";
import { useApi } from "../../hooks/useApi";
import ServerError from "../../Pages/ErrorPages/ServerError";
import { columnsForBankingNew } from "../../Pages/Home/Data/data";
import Loader from "../Loader/Loading";
import Navbar from "../Navbar/navbar";
import BankingReportsTabs from "../Tabs/bankingReportsTabs";

export default function BankingReports() {
  const queryClient = useQueryClient();
  const { status, data, error, isLoading } = useApi(apiUrl.WAY_BILL_REPORTS);
  //const { status, data, error, isLoading } = useApi(apiUrl.BANKING_REPORTS);

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
                  total: data.bankingSheetCount + data.waybillReportsCount,
                  remaining: data.bankingSheetCount,
                  available: data.waybillReportsCount,
                }}
                pageTitle="Reports"
                tableTitle="Banking Reports :"
                totalReport="Total Reports"
                wayBillReport="Way Bill Reports"
                BankingReport="Banking Reports"
              />
              <BankingReportsTabs
                dataForBoat={data?.bankingSheets[0]?.sheets}
                columnsForBoat={columnsForBankingNew}
              />
            </>
          )}
        </Navigation>
      </Box>
    </AuthContainer>
  );
}
