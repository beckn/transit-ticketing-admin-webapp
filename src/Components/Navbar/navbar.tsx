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


interface NavbarProps  {
    pageTitle:string;
    tableTitle:string;
}
export default function Navbar(props: NavbarProps) {
    const {pageTitle,tableTitle}= props
    return (
        <Center display={'flex'} justifyContent="end">
            <Box
                maxW={'1232px'}
                h='354px'
                w={'full'}
            >
                <Box className='Nav-heading'><Text>{pageTitle}</Text></Box>
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
                <Box className='Table-heading'><Text>{tableTitle}</Text></Box>
            </Box>
        </Center>
    );
}
