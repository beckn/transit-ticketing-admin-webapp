import {
    Box,
} from '@chakra-ui/react';
import Navigation from '../../Components/Navigation/navigation';
import Navbar from '../Navbar/navbar';
import {  useQueryClient } from "react-query";
import {useApi} from "../../hooks/useApi";
import {apiUrl} from "../../Config/apiUrl"
import { data, columns } from '../../Pages/Home/Data/data';
import OperationalBoatsTabs from '../Tabs/operationalBoatsTabs';

export default function OperationalBoats() {
    const queryClient = useQueryClient();
    const { status, data, error, isFetching } = useApi(apiUrl.OPERATIONAL_BOATS);
    console.log(status,data,error,isFetching)
    return (
        <Box>
            <Navigation>
                <Navbar pageTitle="Operational Boats" tableTitle="List of operational boats :" totalReport="Total Boats" wayBillReport="Boats Available" BankingReport ="Boats Out Of Service"/>
                <OperationalBoatsTabs dataForBoat={data} columnsForBoat={columns} />
            </Navigation>
        </Box>
    );
}
