import { Box } from "@chakra-ui/react";
import { useQueryClient } from "react-query";
import AuthContainer from "../../Components/AuthRoute/index";
import Navigation from "../../Components/Navigation/navigation";
import { apiUrl } from "../../Config/apiUrl";
import { useApi } from "../../hooks/useApi";
import ServerError from "../../Pages/ErrorPages/ServerError";
import { columnsForSchedule } from "../../Pages/Home/Data/data";
import Loader from "../Loader/Loading";
import Navbar from "../Navbar/navbar";
import ScheduleTabs from "../Tabs/scheduleTabs";

export default function Schedules() {
  const queryClient = useQueryClient();
  const { status, data, error, isLoading } = useApi(apiUrl.SCHEDULE);
  if (status === "error" || data?.code === 500) {
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
                pageTitle="Schedules & Timetable"
                tableTitle="List of Schedules :"
                totalReport="Total Stops"
                wayBillReport="Boats Available"
                BankingReport="Area Covered"
                widgetData={{ total: 4, remaining: 5, available: 7 }}
              />
              <ScheduleTabs
                dataForBoat={data.boatSchedules}
                columnsForBoat={columnsForSchedule}
              />
            </>
          )}
        </Navigation>
      </Box>
    </AuthContainer>
  );
}
