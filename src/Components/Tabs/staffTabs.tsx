import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Column } from "react-table";
import DataTable from "../Table/table";
import "./staffTabs.css";

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
  // const [tabIndex, setTabIndex] = useState(0);
  const [tableDataCopy, setTableDataCopy] = useState(dataForBoatMaster || []);
  const [serachInput, setSearchInput] = useState<any>("");
  const [tableData, setTableData] = useState(dataForBoatMaster || []);

  const handleSearchFilters = (searchData: string) => {
    let filterData: Data[] = [];
    tableDataCopy.map((item: any) => {
      if (
        item.staffName.toLowerCase().includes(searchData.toLowerCase()) ||
        item.boatNumber
          .toString()
          .toLowerCase()
          .includes(searchData.toLowerCase())
      ) {
        filterData.push(item);
      }
    });
    setSearchInput(searchData);
    setTableData(filterData);
    if (searchData === "") {
      setTableData(tableDataCopy);
    }
  };

  const handleChangeTabs = (index: number) => {
    setSearchInput("");
    if (index === 1) {
      setTableDataCopy(dataForTicketMaster);
      setTableData(dataForTicketMaster);
    }
    if (index === 0) {
      setTableDataCopy(dataForBoatMaster);
      setTableData(dataForBoatMaster);
    }
    // setTabIndex(index);
  };
  return (
    <Center display={"flex"} justifyContent="end">
      <Box maxW={"95%"} w={"full"}>
        <Tabs onChange={handleChangeTabs}>
          <TabList display={"flex"} justifyContent={"space-between"}>
            <Stack direction="row">
              <Tab
                _focus={{ borderColor: "none" }}
                _selected={{ borderBottom: "5px solid #E79378" }}
              >
                Boat Master
              </Tab>
              <Tab
                _focus={{ borderColor: "none" }}
                _selected={{ borderBottom: "5px solid #E79378" }}
              >
                Ticket Master
              </Tab>
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
                  onChange={(e) => {
                    handleSearchFilters(e.target.value);
                  }}
                  _hover={{ borderColor: "#E79378 !important" }}
                />
              </InputGroup>
              {/* <Stack direction="row" spacing={4}>
                <Button
                  _hover={{ bgColor: "#646782" }}
                  leftIcon={<img src={Filter} />}
                  bgColor="#3E4059"
                  color={"#fff"}
                  padding={"20px"}
                >
                  Filter
                </Button>
              </Stack> */}
            </Stack>
          </TabList>

          <TabPanels>
            <TabPanel>
              <DataTable columns={columnsForBoat} data={tableData} />
            </TabPanel>
            <TabPanel>
              <DataTable columns={columnsForBoat} data={tableData} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Center>
  );
}
