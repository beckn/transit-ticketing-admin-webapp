import {
  Box,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Center,
  Input,
  Stack,
  Button,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  background,
} from "@chakra-ui/react";
import DataTable from "../Table/table";
import { SearchIcon } from "@chakra-ui/icons";
import "./staffTabs.css";
import Filter from "../../Assets/Svg/filter.svg";
import { Column } from "react-table";

export type DataTableForBoatProps<Data extends object> = {
  dataForBoatMaster: Data[];
  dataForTicketMaster: Data[];
  columnsForBoat: Column<Data>[];
};

export default function StaffTabs<Data extends object>({
  dataForBoatMaster,
  columnsForBoat,
  dataForTicketMaster,
}: DataTableForBoatProps<Data>) {
  return (
    <Center display={"flex"} justifyContent="end">
      <Box maxW={"95%"} w={"full"}>
        <Tabs>
          <TabList display={"flex"} justifyContent={"space-between"}>
            <Stack direction="row">
              <Tab _focus={{ borderColor: "none" }}>Boat Master</Tab>
              <Tab _focus={{ borderColor: "none" }}>Ticket Master</Tab>
            </Stack>
            <Stack direction="row" marginBottom={"10px"}>
              <InputGroup>
                <InputRightElement
                  className="InputLeft"
                  pointerEvents="none"
                  children={
                    <SearchIcon className="SearchIcon" color="gray.300" />
                  }
                />
                <Input
                  borderColor={"#E79378"}
                  focusBorderColor={"#E79378"}
                  height={"40px"}
                  variant="outline"
                  size="xs"
                  placeholder={`Search`}
                  borderRadius={"10px"}
                  _hover={{ borderColor: "#E79378 !important" }}
                />
              </InputGroup>
              <Stack direction="row" spacing={4}>
                <Button
                  _hover={{ bgColor: "#646782" }}
                  leftIcon={<img src={Filter} />}
                  bgColor="#3E4059"
                  color={"#fff"}
                  padding={"20px"}
                >
                  Filter
                </Button>
              </Stack>
            </Stack>
          </TabList>

          <TabPanels>
            <TabPanel>
              <DataTable columns={columnsForBoat} data={dataForBoatMaster} />
            </TabPanel>
            <TabPanel>
              <DataTable columns={columnsForBoat} data={dataForTicketMaster} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Center>
  );
}
