import { SearchIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Center,
  Flex,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuList,
  Radio,
  RadioGroup,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Column } from "react-table";
import IMAGE_PREFIX from "../../Config/image";
import Dropdown from "../common/dropdown";
import DataTable from "../Table/table";
import "./wayBillReportsTabs.css";

export type DataTableForBoatProps<Data extends object> = {
  dataForBoat: Data[];
  columnsForBoat: Column<Data>[];
};

export default function BankingReportsTabs<
  BoatsConversionForBanking extends object
>({
  dataForBoat,
  columnsForBoat,
}: DataTableForBoatProps<BoatsConversionForBanking>) {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedLocationValue, setSelectedLocationValue] = useState("");
  const [wayBillReport, setWayBillReport] = useState("");
  const [wayBillReportValue, setWayBillReportValue] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedStatusValue, setSelectedStatusValue] = useState("");

  const [tableData, setTableData] = useState(dataForBoat || []);
  const [tableDataCopy, setTableDataCopy] = useState(dataForBoat || []);
  const [boatNo, setBoatNo] = useState("");
  const [boatMasterName, setBoatMasterName] = useState("");
  const [dropdownValue, setDropdownValue] = useState<any>("");
  const [serachInput, setSearchInput] = useState<any>("");
  // const handleDropDownFilters = () => {
  //   if (boatNo === "" && boatMasterName === "") return;
  //   let filterData: BoatsConversionForBanking[] = [];
  //   tableDataCopy.map((item: any) => {
  //     if (boatNo !== "" || item.boatMaster !== "") {
  //       if (item.boatNo === Number(boatNo) || item.boatMaster.toLowerCase() === boatMasterName.toLowerCase()) {
  //       // if (item.boatNumber === Number(boatNo) || item.boatMaster === boatMasterName) {
  //         filterData.push(item);
  //       }
  //     }
  //   });

  //   setTableData(filterData);
  // };

  const handleSearchFilters = (searchData: string) => {
    let filterData: BoatsConversionForBanking[] = [];
    tableDataCopy.map((item: any) => {
      if (
        item.boatMaster.toLowerCase().includes(searchData.toLowerCase()) ||
        item.boatNo.toLowerCase().includes(searchData.toLowerCase()) ||
        item.waybillNumber.toLowerCase().includes(searchData.toLowerCase())
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

  const filterData = () => {
    let filterData: BoatsConversionForBanking[] = [];
    tableDataCopy.map((item: any) => {
      if (
        item.wayBillNumber === wayBillReport ||
        item.boatMaster.toLowerCase() === boatMasterName.toLowerCase() ||
        item.boatNo === boatNo
      ) {
        filterData.push(item);
      }
    });
    setTableData(filterData);
  };

  useEffect(() => {
    if (
      wayBillReport === "" &&
      selectedLocation === "" &&
      boatNo === "" &&
      boatMasterName === "" &&
      dropdownValue === ""
    )
      return setTableData(tableDataCopy);
    else {
      dropdownValue === "" && filterData();
    }
  }, [wayBillReport, selectedLocation, boatNo, boatMasterName]);

  const handleFilter = (title: string, value: string, index: string): void => {
    if (title === "Location") {
      setSelectedLocation(value);
      setSelectedLocationValue(index);
    } else if (title === "WayBill Number") {
      setWayBillReport(value);
      setWayBillReportValue(index);
    } else {
      setSelectedStatus(value);
      setSelectedStatusValue(index);
    }
  };

  const getDropdownOptionForBoatNo = (dataForBoat: any) => {
    let result: any = [];
    dataForBoat.map((key: any) => {
      result.push({ value: key.boatNo, label: key.boatNo });
    });
    return result;
  };

  const getDropdownOptionForMasterName = (dataForBoat: any) => {
    let result: any = [];
    dataForBoat.map((key: any) => {
      result.push({ value: key.boatMaster, label: key.boatMaster });
    });
    return result;
  };

  const getOptionForWayBillNumber = (dataForBoat: any) => {
    let result: any = [];
    dataForBoat.map((key: any) => {
      result.push(key.wayBillNumberboatNo);
    });
    return result;
  };

  return (
    <Center display={"flex"}>
      <Box maxW={"90%"} w={"full"}>
        <Tabs>
          <TabList display={"flex"} justifyContent={"space-between"}>
            <Stack direction="row">
              <Tab
                _focus={{ borderColor: "none" }}
                _selected={{ borderBottom: "5px solid #E79378" }}
              >
                All
              </Tab>
              {/* <Tab>New</Tab>
              <Tab>Old</Tab> */}
            </Stack>

            <Flex marginBottom={"10px"}>
              <Stack
                spacing={4}
                direction="row"
                align="center"
                padding={"10px"}
              >
                <Dropdown
                  placeholder="Boat No"
                  dropdownOption={getDropdownOptionForBoatNo(dataForBoat)}
                  optionDropVal={boatNo}
                  setOptionDropVal={(value: string) => {
                    setDropdownValue("");
                    setSearchInput("");
                    setBoatNo(value);
                  }}
                />
                <Dropdown
                  placeholder="Boat Master Name"
                  dropdownOption={getDropdownOptionForMasterName(dataForBoat)}
                  optionDropVal={boatMasterName}
                  setOptionDropVal={(value: string) => {
                    setDropdownValue("");
                    setBoatMasterName(value);
                    setSearchInput("");
                  }}
                />

                {/* <Button
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
                </Button> */}
              </Stack>
            </Flex>
          </TabList>

          <Stack
            direction="row"
            marginTop={"10px"}
            display={"flex"}
            justifyContent={"flex-start"}
            width={"full"}
          >
            <Flex mr="9" w="40%">
              <InputGroup mr="6">
                <InputRightElement
                  className="InputLeft"
                  pointerEvents="none"
                  children={
                    <SearchIcon className="SearchIcon" color="gray.300" />
                  }
                />
                <Input
                  borderColor={"#E79378"}
                  _focus={{ borderColor: "#E79378" }}
                  _hover={{ borderColor: "#E79378" }}
                  borderRadius={"10px"}
                  height={"40px"}
                  variant="outline"
                  size="xs"
                  value={serachInput}
                  placeholder={`Please Enter Boat Master or Boat No`}
                  onChange={(e) => {
                    handleSearchFilters(e.target.value);
                    setDropdownValue("no");
                    setBoatNo("");
                    setBoatMasterName("");
                  }}
                />
              </InputGroup>
              <Stack direction="row" spacing={4}>
                <Menu>
                  {/* <MenuButton
                    colorScheme="#3E4059"
                    size="md"
                    _hover={{ bgColor: "#646782" }}
                    leftIcon={<img src={Filter} alt="filter Icon" />}
                    bgColor="#3E4059"
                    color={"#fff"}
                    padding={"20px"}
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                  >
                    Filter
                  </MenuButton> */}
                  <MenuList
                    maxW="180px"
                    maxH="266px"
                    overflow={"auto"}
                    p={0}
                    borderRadius="lg"
                  >
                    <Accordion allowToggle borderRadius="lg">
                      {[0, 1].map((item) => {
                        const accordingHeading =
                          item === 0 ? "Location" : "WayBill Number";
                        const radioData =
                          item === 0
                            ? [
                                "Edathua",
                                "Edathua",
                                "Edathua",
                                "Edathua",
                                "Edathua",
                              ]
                            : getOptionForWayBillNumber(dataForBoat);

                        const radioValue =
                          item === 0
                            ? selectedLocationValue
                            : wayBillReportValue;

                        return (
                          <AccordionItem key={item}>
                            <h2>
                              <AccordionButton
                                _expanded={{ bg: "#E79379", color: "#fff" }}
                                _hover={{ bgColor: "#E79379", color: "#fff" }}
                              >
                                <Box flex="1" textAlign="left" fontSize={"lg"}>
                                  {accordingHeading}
                                </Box>
                                <AccordionIcon />
                              </AccordionButton>
                            </h2>
                            <AccordionPanel
                              bgColor={"#3E4059"}
                              color={"#fff"}
                              pb={4}
                            >
                              <InputGroup>
                                <InputRightElement
                                  pos={"absolute"}
                                  right="10px"
                                  top="2px"
                                  w="4"
                                  h="4"
                                  pointerEvents="none"
                                  children={
                                    <SearchIcon
                                      className="SearchIcon"
                                      color="#3E4059"
                                    />
                                  }
                                />
                                <Input
                                  height={"20px"}
                                  variant="outline"
                                  borderRadius={"2xl"}
                                  bg="#fff"
                                  color="#000"
                                  size="xs"
                                  placeholder={`Search`}
                                />
                              </InputGroup>

                              <Flex
                                mt={"4"}
                                maxH="105px"
                                overflow={"auto"}
                                css={{
                                  "&::-webkit-scrollbar": {
                                    width: "4px",
                                  },
                                  "&::-webkit-scrollbar-track": {
                                    width: "4px",
                                  },
                                  "&::-webkit-scrollbar-thumb": {
                                    background: "#E79379",
                                    borderRadius: "24px",
                                  },
                                }}
                              >
                                <RadioGroup value={radioValue} w="100%">
                                  <Stack spacing={2}>
                                    {radioData &&
                                      radioData.length > 0 &&
                                      radioData.map(
                                        (data: string, index: number) => (
                                          <Stack
                                            onClick={() =>
                                              handleFilter(
                                                accordingHeading,
                                                data,
                                                `${index + 1}`
                                              )
                                            }
                                          >
                                            <Radio value={`${index + 1}`}>
                                              {" "}
                                              {data}{" "}
                                            </Radio>
                                          </Stack>
                                        )
                                      )}
                                  </Stack>
                                </RadioGroup>
                              </Flex>
                            </AccordionPanel>
                          </AccordionItem>
                        );
                      })}
                    </Accordion>
                  </MenuList>
                </Menu>
              </Stack>
            </Flex>

            <Flex justify={"space-between"} w="60%">
              <HStack spacing={4}>
                {selectedLocation !== "" && (
                  <Tag
                    size="lg"
                    variant="solid"
                    h="43px"
                    bg="#C4C4C4"
                    color="#F8F8F8"
                    colorScheme="#F8F8F8"
                  >
                    {selectedLocation}
                    <Image
                      css={{ cursor: "pointer" }}
                      onClick={() => {
                        setSelectedLocation("");
                        setSelectedLocationValue("");
                      }}
                      src={IMAGE_PREFIX.CrossIcon}
                      pl={"4"}
                      alt="Angle Bracket"
                    />
                  </Tag>
                )}
                {wayBillReport !== "" && (
                  <Tag
                    size="lg"
                    variant="solid"
                    h="43px"
                    bg="#C4C4C4"
                    color="#3E4059"
                    colorScheme="#3E4059"
                  >
                    {wayBillReport}
                    <Image
                      css={{ cursor: "pointer" }}
                      onClick={() => {
                        setWayBillReport("");
                        setWayBillReportValue("");
                      }}
                      src={IMAGE_PREFIX.CrossIcon}
                      pl={"4"}
                      alt="Angle Bracket"
                    />
                  </Tag>
                )}
                {selectedStatus !== "" && (
                  <Tag
                    size="lg"
                    variant="solid"
                    h="43px"
                    bg="#C4C4C4"
                    color="#3E4059"
                    colorScheme="#3E4059"
                  >
                    {selectedStatus}
                    <Image
                      css={{ cursor: "pointer" }}
                      onClick={() => {
                        setSelectedStatus("");
                        setSelectedStatusValue("");
                      }}
                      src={IMAGE_PREFIX.CrossIcon}
                      pl={"4"}
                      alt="Angle Bracket"
                    />
                  </Tag>
                )}
                {boatNo !== "" && (
                  <Tag
                    size="lg"
                    variant="solid"
                    h="43px"
                    bg="#f0f0f0"
                    color="#3E4059"
                    colorScheme="#3E4059"
                  >
                    {boatNo}
                    <Image
                      css={{ cursor: "pointer" }}
                      onClick={() => {
                        setBoatNo("");
                        filterData();
                      }}
                      src={IMAGE_PREFIX.CrossIcon}
                      pl={"4"}
                      alt="Angle Bracket"
                    />
                  </Tag>
                )}
                {boatMasterName !== "" && (
                  <Tag
                    size="lg"
                    variant="solid"
                    h="43px"
                    bg="#f0f0f0"
                    color="#3E4059"
                    colorScheme="#3E4059"
                  >
                    {boatMasterName}
                    <Image
                      css={{ cursor: "pointer" }}
                      onClick={() => {
                        setBoatMasterName("");
                        filterData();
                      }}
                      src={IMAGE_PREFIX.CrossIcon}
                      pl={"4"}
                      alt="Angle Bracket"
                    />
                  </Tag>
                )}
              </HStack>
              {(selectedLocation !== "" ||
                wayBillReport !== "" ||
                selectedStatus !== "" ||
                boatNo !== "" ||
                boatMasterName !== "") && (
                <Text
                  css={{ cursor: "pointer" }}
                  onClick={() => {
                    setBoatNo("");
                    setBoatMasterName("");
                    setSelectedLocation("");
                    setSelectedLocationValue("");
                    setWayBillReport("");
                    setWayBillReportValue("");
                    setSelectedStatus("");
                    setSelectedStatusValue("");
                  }}
                  fontSize="xl"
                  color={"#E8947A"}
                >
                  Clear All Filters
                </Text>
              )}
            </Flex>
          </Stack>
          <TabPanels css={{ margin: "0px 0px 0px -36px" }}>
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
function key(key: any) {
  throw new Error("Function not implemented.");
}
