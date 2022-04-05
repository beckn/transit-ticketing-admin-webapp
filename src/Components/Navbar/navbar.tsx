import {
    Heading,
    Box,
    Center,
    Flex,
    Text,
    Image
} from '@chakra-ui/react';
import './navbar.css';
import IMAGE_PREFIX from "../../Config/image";


interface NavbarProps  {
    pageTitle:string;
    tableTitle:string;
    totalReport:string;
    wayBillReport:string;
    BankingReport:string;
}
export default function Navbar(props: NavbarProps) {
    const {pageTitle,tableTitle, totalReport, wayBillReport, BankingReport}= props
    return (
        <Center display={'flex'} justifyContent="end">
            <Box
                maxW={'1232px'}
                h='354px'
                w={'full'}
            >
                <Box className='Nav-heading' letterSpacing={'2px'}><Text>{pageTitle}</Text></Box>
                <Flex justifyContent={'space-around'}>
                    <Box className='Nav-container'>
                        <Text className='Nav-content-head'>{totalReport}</Text>
                        <Text className='Nav-content-child'>100</Text>
                    </Box>
                    <Box><Image src={IMAGE_PREFIX.AngleBracket} alt="Angle Bracket"/></Box>
                    <Box>
                        <Text className='Nav-content-head'>{wayBillReport}</Text>
                        <Text className='Nav-content-child'>50</Text>
                    </Box>
                    <Box><Image src={IMAGE_PREFIX.Pipe} alt="Pipe"/></Box>
                    <Box>
                        <Text className='Nav-content-head'>{BankingReport}</Text>
                        <Text className='Nav-content-child'>50</Text>
                    </Box>
                </Flex>
                <Box className='Table-heading' letterSpacing={'2px'}><Text>{tableTitle}</Text></Box>
            </Box>
        </Center>
    );
}
