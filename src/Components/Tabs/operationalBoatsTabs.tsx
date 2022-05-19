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
import "./operationalBoatsTabs.css";
import Filter from "../../Assets/Svg/filter.svg";
import { Column } from "react-table";
import { CSSProperties, useEffect, useState } from "react";

export type DataTableForBoatProps<Data extends object> = {
  dataForBoat: Data[];
  columnsForBoat: Column<Data>[];
};

export default function OperationalBoatsTabs<Data extends object>({
  dataForBoat,
  columnsForBoat,  
}: DataTableForBoatProps<Data>) {

  const [wayBillReport, setWayBillReport] = useState("");

  const [tableDataCopy, setTableDataCopy] = useState(dataForBoat || []);
  const [serachInput, setSearchInput] = useState<any>("");
  const [tableData, setTableData] = useState(dataForBoat || []);
  const [boatNo, setBoatNo] = useState("");
  const [boatMasterName, setBoatMasterName] = useState("");

  const handleSearchFilters = (searchData: string) => {
    let filterData: Data[] = [];
    tableDataCopy.map((item: any) => {
      if (
        item.boatMaster.toLowerCase().includes(searchData.toLowerCase()) ||
        item.bootNo.toString().toLowerCase().includes(searchData.toLowerCase()) 
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
                All
              </Tab>
              {/* <Tab _focus={{ borderColor: 'none' }}>New</Tab>
                            <Tab _focus={{ borderColor: 'none' }}>Old</Tab> */}
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
                  onChange={(e) => {
                    handleSearchFilters(e.target.value);
                  }}
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
            <TabPanel>
              <DataTable columns={columnsForBoat} data={tableData} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Center>
  );
}
