import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  SimpleGrid,
  Box,
  Heading,
  Image,
  Divider,
  Flex,
} from "@chakra-ui/react";
import AuthContainer from "../../Components/AuthRoute/index";
import IPageProps from "../../Interfaces/page";
import { getLocalStorage } from "../../utils/helpers";
import Navigation from "../../Components/Navigation/navigation";
import IMAGE_PREFIX from "../../Config/image";
import { useHistory } from "react-router-dom";
import useWindowSize from "../../hooks/useWidth";

const Dashboard: React.FC<IPageProps> = (props) => {
  const [user, setUser] = useState<string>("");
  const history = useHistory();
  const size = useWindowSize();

  useEffect(() => {
    const data = getLocalStorage("firebaseData");
    if (data) {
      const parsedData = JSON.parse(data);
      setUser(parsedData);
    }
  }, []);

  return (
    <AuthContainer>
      <Navigation>
        <Box w={"100%"}>
          <Box
            padding="5"
            maxHeight="100vh"
            overflowY="scroll"
            maxW={"100%"}
            w={"full"}
          >
            <Heading
              as="h2"
              size="lg"
              color="#E79378"
              marginBottom="20px"
              marginTop="5"
            >
              Reports :
            </Heading>

            <Divider
              backgroundColor={"black"}
              height="2px"
              marginBottom="20px"
            />

            <SimpleGrid
              minChildWidth="300px"
              columns={[2, null, 2]}
              spacing="20px"
            >
              <Link to="/way_Bill_Reports">
                <Box
                  _hover={{
                    bg: "#E49076",
                  }}
                  bg="#3E4059"
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
                  <Image src={IMAGE_PREFIX.BillIcon} alt="Way Bill Reports" />
                </Box>
              </Link>
              <Link to="/banking_Reports">
                <Box
                  _hover={{
                    bg: "#E49076",
                  }}
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
                  <Image src={IMAGE_PREFIX.BankIcon} alt="Banking Reports" />
                </Box>
              </Link>
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
            <Divider
              backgroundColor={"black"}
              height="2px"
              marginBottom="20px"
            />
            <SimpleGrid
              minChildWidth="280px"
              columns={[2, null, 3]}
              spacing="20px"
            >
              <Link to="/opBoats">
                <Box
                  _hover={{
                    bg: "#E49076",
                  }}
                  bg="#3E4059"
                  display="flex"
                  borderRadius="24px"
                  flexDirection="column"
                  alignContent="center"
                  alignItems="center"
                  justifyContent="space-evenly"
                  height="280px"
                >
                  <Image
                    src={IMAGE_PREFIX.HomeBoatIcon}
                    alt="Way Bill Reports"
                  />

                  <Heading as="h2" size="lg" color="white" textAlign="center">
                    Operational Boats
                  </Heading>
                </Box>
              </Link>
              <Link to="/schedules">
                <Box
                  _hover={{
                    bg: "#E49076",
                  }}
                  bg="#3E4059"
                  display="flex"
                  borderRadius="24px"
                  flexDirection="column"
                  alignContent="center"
                  alignItems="center"
                  justifyContent="space-evenly"
                  height="280px"
                >
                  <Image
                    src={IMAGE_PREFIX.TimerIcon}
                    alt="Schedule & Timetable"
                  />
                  <Heading as="h2" size="lg" color="white" textAlign="center">
                    Schedule & Timetable
                  </Heading>
                </Box>
              </Link>
              <Link to="/staff">
                <Box
                  _hover={{
                    bg: "#E49076",
                  }}
                  bg="#3E4059"
                  display="flex"
                  flexDirection="column"
                  borderRadius="24px"
                  alignContent="center"
                  alignItems="center"
                  justifyContent="space-evenly"
                  height="280px"
                >
                  <Image src={IMAGE_PREFIX.StaffIcon} alt="Staff" />
                  <Heading as="h2" size="lg" color="white" marginBottom="20px">
                    Staff
                  </Heading>
                </Box>
              </Link>
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
            <Divider
              backgroundColor={"black"}
              height="2px"
              marginBottom="20px"
            />
            <SimpleGrid
              minChildWidth="300px"
              columns={[2, null, 2]}
              spacing="20px"
            >
              <Link to="/boats">
                <Box
                  _hover={{
                    bg: "#E49076",
                  }}
                  bg="#3E4059"
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
                  <Image
                    src={IMAGE_PREFIX.HomeBoatIcon}
                    width="300"
                    height="94"
                    alt="Boats"
                  />
                </Box>
              </Link>
              <Link to="/counter">
                <Box
                  _hover={{
                    bg: "#E49076",
                  }}
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
                  <Image
                    src={IMAGE_PREFIX.HomeBoatIcon}
                    width="300"
                    height="94"
                    alt="Banking Reports"
                  />
                </Box>
              </Link>
            </SimpleGrid>
          </Box>
        </Box>
      </Navigation>
    </AuthContainer>
  );
};

export default Dashboard;
