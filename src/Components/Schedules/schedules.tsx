import {
    Box,
} from '@chakra-ui/react';
import Navigation from '../../Components/Navigation/navigation';
import Navbar from '../Navbar/navbar';
import TabNavigation from '../TabNavigation/tabNavigation';
import {useApi} from "../../hooks/useApi";
import {apiUrl} from "../../Config/apiUrl";
import {  useQueryClient } from "react-query";




export default function Schedules() {
    const queryClient = useQueryClient();
  const { status, data, error, isFetching } = useApi(apiUrl.SCHEDULE);
  console.log(status,data,error,isFetching)
    return (
        <Box>
            <Navigation>
                <Navbar pageTitle="Schedules & Timetable" tableTitle="List of Schedules :"/>
                <TabNavigation/>
            </Navigation>
        </Box>
    );
}
