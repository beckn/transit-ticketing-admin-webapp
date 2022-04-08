import { useState } from "react";
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
  InputRightElement,
  Flex,
} from "@chakra-ui/react";
import DataTable from "../Table/table";
import { SearchIcon } from "@chakra-ui/icons";
import "./operationalBoatsTabs.css";
import Filter from "../../Assets/Svg/filter.svg";
import { Column } from "react-table";

export type DataTableForBoatProps<Data extends object> = {
  dataForBoat: Data[];
  columnsForBoat: Column<Data>[];
};

export default function CounterTabs<Data extends object>({
  dataForBoat,
  columnsForBoat,
}: DataTableForBoatProps<Data>) {
  const [rowData, setRowData] = useState([]);

  const handleClickRow = (cell: any) => {
    // console.log("dropdown", cell.column.id);
    console.log("cell", cell.row.original);
  };
  return (
    <Center display={"flex"} justifyContent="end">
      <Box maxW={"95%"} w={"full"}>
        <Tabs>
          <TabList display={"flex"} justifyContent={"space-between"}>
            <Stack direction="row">
              <Tab _focus={{ borderColor: "none" }}>All</Tab>
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
              <DataTable
                columns={columnsForBoat}
                data={dataForBoat}
                onClickRow={(row: any) => handleClickRow(row)}
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
        <Flex justifyContent={"flex-end"}>
          <Button
            bgColor="#3E4059"
            color={"#fff"}
            _hover={{ bgColor: "#646782" }}
            padding={"20px"}
          >
            Save
          </Button>
        </Flex>
      </Box>
    </Center>
  );
}
