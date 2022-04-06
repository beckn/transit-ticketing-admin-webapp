import { Box } from "@chakra-ui/react";
import Navigation from "../../Components/Navigation/navigation";
import Navbar from "../Navbar/navbar";
import { useQueryClient } from "react-query";
import { useApi } from "../../hooks/useApi";
import { apiUrl } from "../../Config/apiUrl";
import { dataForWayBill, columnsForWayBill } from "../../Pages/Home/Data/data";
import WayBillReportsTabs from "../Tabs/wayBillReportsTabs";
import { getWidgetData } from "../../utils/helpers";

export default function WayBillReport() {
  return (
    <Box>
      <Navigation>
        <Navbar
          widgetData={getWidgetData(dataForWayBill, "status", true)}
          pageTitle="Reports"
          tableTitle="Way Bill Reports :"
          totalReport="Total Reports"
          wayBillReport="Way Bill Reports"
          BankingReport="Banking Reports"
        />
        <WayBillReportsTabs
          dataForBoat={dataForWayBill}
          columnsForBoat={columnsForWayBill}
        />
      </Navigation>
    </Box>
  );
}
