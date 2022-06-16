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
import { useState } from "react";
import { Column } from "react-table";
import DataTable from "../Table/table";
import "./scheduleTabs.css";

export type DataTableForBoatProps<Data extends object> = {
  dataForBoat: Data[];
  columnsForBoat: Column<Data>[];
};

export default function ScheduleTabs<Data extends object>({
  dataForBoat,
  columnsForBoat,
}: DataTableForBoatProps<Data>) {
  const [tableDataCopy, setTableDataCopy] = useState(dataForBoat || []);
  const [serachInput, setSearchInput] = useState<any>("");
  const [tableData, setTableData] = useState(dataForBoat || []);

  const handleSearchFilters = (searchData: string) => {
    let filterData: Data[] = [];
    tableDataCopy.map((item: any) => {
      if (
        item.boatMasterName.toLowerCase().includes(searchData.toLowerCase()) ||
        item.boatNo.toString().toLowerCase().includes(searchData.toLowerCase())
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
  return (
    <Center display={"flex"} justifyContent="end">
      <Box maxW={"95%"} w={"full"}>
        <Tabs>
          <TabList display={"flex"} justifyContent={"space-between"}>
            <Stack direction="row">
              <Tab
                _focus={{ borderColor: "none" }}
                _selected={{ borderBottom: "5px solid #E79378" }}
              >
                Schedule
              </Tab>
              {/* <Tab _focus={{ borderColor: "none" }}>Timetable</Tab> */}
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
                  placeholder={`Boat master Name & No`}
                  borderRadius={"10px"}
                  onChange={(e) => {
                    handleSearchFilters(e.target.value);
                  }}
                  _hover={{ borderColor: "#E79378 !important" }}
                />
              </InputGroup>
            </Stack>
          </TabList>

          <TabPanels css={{margin : "0px 0px 0px -36px"}}>
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
