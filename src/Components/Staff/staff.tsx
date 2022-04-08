import { Box, CircularProgress, Center } from "@chakra-ui/react";
import Navigation from "../../Components/Navigation/navigation";
import Navbar from "../Navbar/navbar";
import { useQueryClient } from "react-query";
import { useApi } from "../../hooks/useApi";
import { apiUrl } from "../../Config/apiUrl";
import { dataForStaff, columnsForStaff } from "../../Pages/Home/Data/data";
import StaffTabs from "../Tabs/staffTabs";
import Loader from "../Loader/Loading";

export default function Staff() {
  const queryClient = useQueryClient();
  const { status, data, error, isFetching } = useApi(apiUrl.STAFF);
  console.log(status, data, error, isFetching);

  return (
    <Box>
      <Navigation>
        {isFetching ? (
          <Loader />
        ) : (
          <>
            <Navbar
              pageTitle="Staff"
              tableTitle="Boat Master :"
              totalReport="Total Staff"
              wayBillReport="Boat Master"
              BankingReport="Ticket Master"
              widgetData={{ total: 4, remaining: 5, available: 7 }}
            />
            <StaffTabs
              dataForBoat={dataForStaff}
              columnsForBoat={columnsForStaff}
            />
          </>
        )}
      </Navigation>
    </Box>
  );
}
