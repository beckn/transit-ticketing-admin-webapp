import {
    Box,
} from '@chakra-ui/react';
import Navigation from '../../Components/Navigation/navigation';
import Navbar from '../Navbar/navbar';
import TabNavigation from '../TabNavigation/tabNavigation';
import {  useQueryClient } from "react-query";
import {useApi} from "../../hooks/useApi";
import {apiUrl} from "../../Config/apiUrl"
import { data, columns } from '../../Pages/Home/Data/data';


export default function OperationalBoats() {
    // const queryClient = useQueryClient();
    // const { status, data, error, isFetching } = useApi(apiUrl.OPERATIONAL_BOATS);
    // console.log(status,data,error,isFetching)
    return (
        <Box>
            <Navigation>
                <Navbar pageTitle="Operational Boats" tableTitle="List of operational boats :"/>
                <TabNavigation dataForBoat={data} columnsForBoat={columns} />
            </Navigation>
        </Box>
    );
}
