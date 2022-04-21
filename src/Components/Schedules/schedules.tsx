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
import ServerError from "../../Pages/ErrorPages/ServerError";

export default function Schedules() {
  const queryClient = useQueryClient();
  const { status, data, error, isLoading } = useApi(apiUrl.SCHEDULE);
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
              pageTitle="Schedules & Timetable"
              tableTitle="List of Schedules :"
              totalReport="Total Stops"
              wayBillReport="Boats Available"
              BankingReport="Area Covered"
              widgetData={{ total: 4, remaining: 5, available: 7 }}
            />
            <ScheduleTabs
              dataForBoat={data}
              columnsForBoat={columnsForSchedule}
            />
          </>
        )}
      </Navigation>
    </Box>
  );
}
