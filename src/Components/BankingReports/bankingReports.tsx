import React from "react";
import {
  Box
} from "@chakra-ui/react";
import Navigation from "../../Components/Navigation/navigation";
import Navbar from "../Navbar/navbar";
// import { useQueryClient } from "react-query";
// import { useApi } from "../../hooks/useApi";
// import { apiUrl } from "../../Config/apiUrl";
import { dataForBanking, columnsForBanking } from "../../Pages/Home/Data/data";
import BankingReportsTabs from "../Tabs/bankingReportsTabs";
import { ReactElement } from "react";

export default function BankingReports(): ReactElement {
  return (
    <Box>
      <Navigation>
        <Navbar 
          pageTitle="Reports" 
          tableTitle="Banking Reports :" 
          totalReport="Total Reports" 
          wayBillReport="Way Bill Reports" 
          BankingReport="Banking Reports" 
        />
        <BankingReportsTabs dataForBoat={dataForBanking} columnsForBoat={columnsForBanking} />
      </Navigation>
    </Box>
  );
}
