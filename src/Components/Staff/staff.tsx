import {
    Box,
} from '@chakra-ui/react';
import Navigation from '../../Components/Navigation/navigation';
import Navbar from '../Navbar/navbar';
import TabNavigation from '../TabNavigation/tabNavigation';
import {  useQueryClient } from "react-query";
import {useApi} from "../../hooks/useApi";
import {apiUrl} from "../../Config/apiUrl"



export default function Staff() {
    const queryClient = useQueryClient();
  const { status, data, error, isFetching } = useApi(apiUrl.STAFF);
  console.log(status,data,error,isFetching)
    return (
        <Box>
            <Navigation>
                <Navbar pageTitle="Staff" tableTitle="List of Staffs :"/>
                <TabNavigation />
            </Navigation>
        </Box>
    );
}
