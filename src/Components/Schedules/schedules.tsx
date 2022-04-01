import {
    Box,
} from '@chakra-ui/react';
import Navigation from '../../Components/Navigation/navigation';
import Navbar from '../Navbar/navbar';
import TabNavigation from '../TabNavigation/tabNavigation';





export default function Schedules() {
    return (
        <Box>
            <Navigation>
                <Navbar/>
                <TabNavigation/>
            </Navigation>
        </Box>
    );
}
