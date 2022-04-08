import { Heading, Box, Center, Flex, Text, Image } from "@chakra-ui/react";
import "./navbar.css";
import IMAGE_PREFIX from "../../Config/image";

interface NavbarProps {
  pageTitle: string;
  tableTitle: string;
  totalReport: string;
  wayBillReport: string;
  BankingReport: string;
  widgetData?: any;
}
export default function Navbar(props: NavbarProps) {
  const {
    pageTitle,
    tableTitle,
    totalReport,
    wayBillReport,
    BankingReport,
    widgetData,
  } = props;
  const { total, remaining, available } = widgetData || {};
  return (
    <Center display={"flex"} justifyContent="end">
      <Box maxW={"1232px"} h="354px" w={"full"}>
        <Box className="Nav-heading" letterSpacing={"2px"}>
          <Text>{pageTitle}</Text>
        </Box>
        <Flex justifyContent={"space-around"}>
          <Box className="Nav-container">
            <Text className="Nav-content-head">{totalReport}</Text>
            <Center>
              <Text className="Nav-content-child">{total || 0}</Text>
            </Center>
          </Box>
          <Box>
            <Image src={IMAGE_PREFIX.AngleBracket} alt="Angle Bracket" />
          </Box>
          <Box>
            <Text className="Nav-content-head">{wayBillReport}</Text>
            <Center>
              <Text className="Nav-content-child">{available || 0}</Text>
            </Center>
          </Box>
          <Box>
            <Image src={IMAGE_PREFIX.Pipe} alt="Pipe" />
          </Box>
          <Box>
            <Text className="Nav-content-head">{BankingReport}</Text>
            <Center>
              <Text className="Nav-content-child">{remaining || 0}</Text>
            </Center>
          </Box>
        </Flex>
        <Box className="Table-heading" letterSpacing={"2px"}>
          <Text>{tableTitle}</Text>
        </Box>
      </Box>
    </Center>
  );
}
