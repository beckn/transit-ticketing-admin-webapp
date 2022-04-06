import { Box, Center, CircularProgress } from "@chakra-ui/react";
import Navigation from "../../Components/Navigation/navigation";
import Navbar from "../Navbar/navbar";
import { useApi } from "../../hooks/useApi";
import { apiUrl } from "../../Config/apiUrl";
import { useQueryClient } from "react-query";
import {
  dataForScchedule,
  columnsForSchedule,
} from "../../Pages/Home/Data/data";
import ScheduleTabs from "../Tabs/scheduleTabs";
import Loader from "../Loader/Loading";

export default function Schedules() {
  const queryClient = useQueryClient();
  const { status, data, error, isFetching } = useApi(apiUrl.SCHEDULE);
  console.log(status, data, error, isFetching);

  return (
    <Box>
      <Navigation>
        {isFetching ? (
          <Loader />
        ) : (
          <>
            <Navbar
              pageTitle="Schedules & Timetable"
              tableTitle="List of Schedules :"
              totalReport="Total Stops"
              wayBillReport="Boats Available"
              BankingReport="Area Covered"
            />
            <ScheduleTabs
              dataForBoat={dataForScchedule}
              columnsForBoat={columnsForSchedule}
            />
          </>
        )}
      </Navigation>
    </Box>
  );
}
