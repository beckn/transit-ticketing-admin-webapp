import React, { useState, useEffect } from "react";
import {
  SimpleGrid,
  Box,
  Heading,
  Image,
  Divider,
  Container,
} from "@chakra-ui/react";
import AuthContainer from "../../Components/AuthRoute/index";
import IPageProps from "../../Interfaces/page";
import { getLocalStorage } from "../../utils/helpers";
import Navigation from "../../Components/Navigation/navigation";
import BankLogo from "../../Assets/Icons/bank.svg";
import BillLogo from "../../Assets/Icons/bill.svg";
import BoatLogo from "../../Assets/Icons/boat.svg";
import TimerLogo from "../../Assets/Icons/timer.svg";
import StaffLogo from "../../Assets/Icons/staff.svg";

const Dashboard: React.FC<IPageProps> = (props) => {
  const [user, setUser] = useState<string>("");

  useEffect(() => {
    const data = getLocalStorage("firebaseData");
    if (data) {
      const parsedData = JSON.parse(data);
      setUser(parsedData);
    }
  }, []);

  return (
    <AuthContainer>
      <Box padding="5">
        <Heading
          as="h2"
          size="lg"
          color="#E79378"
          marginBottom="20px"
          marginTop="5"
        >
          Reports :
        </Heading>
        <Divider border="1px solid rgba(62, 64, 89, 0.4)" marginBottom="20px" />
        <SimpleGrid minChildWidth="300px" columns={[1, null, 2]} spacing="20px">
          <Box
            bg="#E49076"
            display="flex"
            borderRadius="24px"
            flexDirection="column"
            alignContent="center"
            alignItems="center"
            justifyContent="center"
            height="286px"
          >
            <Heading as="h2" size="xl" color="white">
              Way Bill Reports
            </Heading>
            <Image src={BillLogo} alt="Way Bill Reports" />
          </Box>
          <Box
            bg="#3E4059"
            display="flex"
            flexDirection="column"
            borderRadius="24px"
            alignContent="center"
            alignItems="center"
            justifyContent="center"
            height="286px"
          >
            <Heading as="h2" size="xl" color="white" marginBottom="20px">
              Banking Reports
            </Heading>
            <Image src={BankLogo} alt="Banking Reports" />
          </Box>
        </SimpleGrid>
        <Heading
          as="h2"
          size="lg"
          color="#E79378"
          marginBottom="20px"
          marginTop="5"
        >
          Boats :
        </Heading>
        <Divider border=" 1px solid #3E405966" marginBottom="20px" />
        <SimpleGrid minChildWidth="280px" columns={[1, null, 3]} spacing="20px">
          <Box
            bg="#3E4059"
            display="flex"
            borderRadius="24px"
            flexDirection="column"
            alignContent="center"
            alignItems="center"
            justifyContent="space-evenly"
            height="280px"
          >
            <Image src={BoatLogo} alt="Way Bill Reports" />

            <Heading as="h2" size="lg" color="white" textAlign="center">
              Operational Boats
            </Heading>
          </Box>
          <Box
            bg="#3E4059"
            display="flex"
            borderRadius="24px"
            flexDirection="column"
            alignContent="center"
            alignItems="center"
            justifyContent="space-evenly"
            height="280px"
          >
            <Image src={TimerLogo} alt="Schedule & Timetable" />
            <Heading as="h2" size="lg" color="white" textAlign="center">
              Schedule & Timetable
            </Heading>
          </Box>
          <Box
            bg="#3E4059"
            display="flex"
            flexDirection="column"
            borderRadius="24px"
            alignContent="center"
            alignItems="center"
            justifyContent="space-evenly"
            height="280px"
          >
            <Image src={StaffLogo} alt="Staff" />
            <Heading as="h2" size="lg" color="white" marginBottom="20px">
              Staff
            </Heading>
          </Box>
        </SimpleGrid>
        <Heading
          as="h2"
          size="lg"
          color="#E79378"
          marginBottom="20px"
          marginTop="5"
        >
          Assignments
        </Heading>
        <Divider border="1px solid rgba(62, 64, 89, 0.4)" marginBottom="20px" />
        <SimpleGrid minChildWidth="448px" columns={[1, null, 2]} spacing="20px">
          <Box
            bg="#E49076"
            display="flex"
            borderRadius="24px"
            flexDirection="column"
            alignContent="center"
            alignItems="center"
            justifyContent="space-around"
            height="286px"
          >
            <Heading as="h2" size="xl" color="white">
              Boats
            </Heading>
            <Image src={BoatLogo} width="300" height="94" alt="Boats" />
          </Box>
          <Box
            bg="#3E4059"
            display="flex"
            flexDirection="column"
            borderRadius="24px"
            alignContent="center"
            alignItems="center"
            justifyContent="center"
            height="286px"
          >
            <Heading as="h2" size="xl" color="white" marginBottom="20px">
              Counter
            </Heading>
            {/* <Image src={BankLogo} alt="Banking Reports" /> */}
          </Box>
        </SimpleGrid>
      </Box>
    </AuthContainer>
  );
};

export default Dashboard;
