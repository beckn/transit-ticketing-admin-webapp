import {
    Heading,
    Box,
    Center,
    Flex,
    Text,
} from '@chakra-ui/react';
import './navbar.css';
import AngleBracket from '../../Assets/Svg/Vector.svg';
import Pipe from '../../Assets/Svg/Pipe.svg';

export default function Navbar() {
    return (
        <Center display={'flex'} justifyContent="end">
            <Box
                maxW={'1232px'}
                h='354px'
                w={'full'}
            >
                <Box className='Nav-heading'><Text>Reports</Text></Box>
                <Flex justifyContent={'space-around'}>
                    <Box className='Nav-container'>
                        <Text className='Nav-content-head'>Total Reports</Text>
                        <Text className='Nav-content-child'>100</Text>
                    </Box>
                    <Box><img src={AngleBracket} /></Box>
                    <Box>
                        <Text className='Nav-content-head'>Total Reports</Text>
                        <Text className='Nav-content-child'>50</Text>
                    </Box>
                    <Box><img src={Pipe} /></Box>
                    <Box>
                        <Text className='Nav-content-head'>Total Reports</Text>
                        <Text className='Nav-content-child'>50</Text>
                    </Box>
                </Flex>
                <Box className='Table-heading'><Text>Way Bill Reports :</Text></Box>
            </Box>
        </Center>
    );
}
