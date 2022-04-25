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
  import DataTable from "../Table/table";
  import { SearchIcon } from "@chakra-ui/icons";
  import "./operationalBoatsTabs.css";
  import Filter from "../../Assets/Svg/filter.svg";
  import { Column } from "react-table";
  import Dropdown from "../common/dropdown";
import { useEffect, useState } from "react";
  
  export type DataTableForBoatProps<Data extends object> = {
    dataForBoat: Data[];
    columnsForBoat: Column<Data>[];
  };
  
  export default function BoatsTabs<Data extends object>({
    dataForBoat,
    columnsForBoat,
  }: DataTableForBoatProps<Data>) {

    const [dropdownValue, setDropdownValue] = useState<any>();
    const [boatNumber, setBoatNo] = useState("");
    const [tableData, setTableData] = useState(dataForBoat || []);
    const [tableDataCopy, setTableDataCopy] = useState(dataForBoat || []);


    const handleDropDownFilters = () => {
      if (boatNumber === "") return;
      let filterData: Data[] = [];
      tableDataCopy.map((item: any) => {
        
        console.log("item", item.boatNo)
        if (boatNumber !== "") {
          if (item.boatNo === Number(boatNumber)) {
            filterData.push(item);
          }
        }
      });
      console.log("tableData", tableData)
      setTableData(filterData);
    };

    const getDropdownOptionForBoatNo = (dataForBoat: any) => {
      let result: any = [];
      dataForBoat.map((key: any) => {
        result.push({ value: key.boatNo, label: key.boatNo });
      })      
      return result;
    };

    return (
      <Center display={"flex"} justifyContent="end">
        <Box maxW={"95%"} w={"full"}>
          <Tabs>
            <TabList display={"flex"} justifyContent={"space-between"}>
              <Stack direction="row">
                <Tab _focus={{borderColor:'none'}}>All</Tab>
                <Tab _focus={{borderColor:'none'}}>Recent</Tab>
              </Stack>
              <Stack
                spacing={4}
                direction="row"
                align="center"
                padding={"10px"}
              >
              <Dropdown
                placeholder="Boat No"
                dropdownOption={getDropdownOptionForBoatNo(dataForBoat)}
                optionDropVal={dropdownValue}
                setOptionDropVal={(value: string) => {
                  setBoatNo(value)
                }}
              />
                <Button
                  colorScheme="#E79378"
                  size="md"
                  _hover={{ bgColor: "#E79378" }}
                  leftIcon={<img src={Filter} alt="Filter Icon" />}
                  bgColor="#E79378"
                  color={"#fff"}
                  padding={"20px"}
                  onClick={() => handleDropDownFilters()}
                >
                  Apply
                </Button>
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
          <Flex justifyContent={'flex-end'}>
            <Button
            bgColor='#3E4059'
            color={'#fff'} 
            _hover={{ bgColor: "#646782" }} 
            padding={"20px"}>
                Save
            </Button>
          </Flex>
        </Box>
      </Center>
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
