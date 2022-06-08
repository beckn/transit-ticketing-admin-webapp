import { Box } from "@chakra-ui/react";
import AuthContainer from "../../Components/AuthRoute/index";
import Navigation from "../../Components/Navigation/navigation";
// import { useQueryClient } from "react-query";
// import { useApi } from "../../hooks/useApi";
// import { apiUrl } from "../../Config/apiUrl";
import { columnsForBanking, dataForBanking } from "../../Pages/Home/Data/data";
import Navbar from "../Navbar/navbar";
import BankingReportsTabs from "../Tabs/bankingReportsTabs";

export default function BankingReports() {
  return (
    <AuthContainer>
      <Box>
        <Navigation>
          <Navbar
            pageTitle="Reports"
            tableTitle="Banking Reports :"
            totalReport="Total Reports"
            wayBillReport="Way Bill Reports"
            BankingReport="Banking Reports"
          />
          <BankingReportsTabs
            dataForBoat={dataForBanking}
            columnsForBoat={columnsForBanking}
          />
        </Navigation>
      </Box>
    </AuthContainer>
  );
}
