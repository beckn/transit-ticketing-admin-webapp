import { useState, useCallback, useMemo } from "react";
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
  Flex,
} from "@chakra-ui/react";
import { TableSelect } from "../Table/TableSelect";
import { SearchIcon } from "@chakra-ui/icons";
import "./operationalBoatsTabs.css";
import Filter from "../../Assets/Svg/filter.svg";
import { Column } from "react-table";
import { CustomSelect } from "../CustomSelect";

export type DataTableForBoatProps<Data extends object> = {
  dataForBoat: Data[];
  columnsForBoat: Column<Data>[];
};
export const defaultColumn = {
  Cell: CustomSelect,
};
export default function BoatsTabs<Data extends object>({
  dataForBoat,
  columnsForBoat,
}: DataTableForBoatProps<Data>) {
  const [data, setData] = useState(dataForBoat);

  const updateMyData = useCallback((rowIndex, columnId, value) => {
    setData((old) =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          };
        }
        return row;
      })
    );
  }, []);
  console.log("oldData", data);
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
              <TableSelect
                columns={columnsForBoat}
                data={data}
                defaultColumn={defaultColumn}
                updateMyData={updateMyData}
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
