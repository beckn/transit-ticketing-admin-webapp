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
  Image,
  InputRightElement,
  HStack,
  Tag,
  Flex,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Menu,
  MenuButton,
  MenuList,
  Radio,
  RadioGroup,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon, TriangleDownIcon } from "@chakra-ui/icons";
import DataTable from "../Table/table";
import { SearchIcon } from "@chakra-ui/icons";
import "./wayBillReportsTabs.css";
import Filter from "../../Assets/Svg/filter.svg";
import { Column } from "react-table";
import Select, { StylesConfig } from "react-select";
import { CSSProperties, useState } from "react";
import IMAGE_PREFIX from "../../Config/image";

export type DataTableForBoatProps<Data extends object> = {
  dataForBoat: Data[];
  columnsForBoat: any;
};

type MyOptionType = {
  label: string;
  value: string;
};

const options: MyOptionType[] = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const customControlStyles: CSSProperties = {
  color: "white",
  borderColor: "pink",
};

type IsMulti = false;

const selectStyle: StylesConfig<MyOptionType, IsMulti> = {
  control: (provided, state) => {
    return {
      ...provided,
      ...customControlStyles,
    };
  },
};

const customStyles: StylesConfig<MyOptionType, IsMulti> = {
  control: (base) => ({
    ...base,
    border: "1px solid #bac0c5b8 !important",
    "margin-top": "7px",
    "font-size": "13px",
    "font-family": "'Open Sans', sans-serif",
    "padding-bottom": "4px",
    "padding-top": "4px",
    "padding-left": "10px",
    "max-height": "42px",
    display: "flex",
    width: "100%",
    background: "#f5f8faad",
    borderRadius: "4px",
    "&:hover": {
      borderColor: " #A9A9A9 !important",
    },
    "&:focus": {
      transition: "0.4 ease",
      borderColor: "#5bc0eb !important",
      boxShadow: "0px 0px 0.3rem #02b3e4 !important",
    },
  }),
  // placeholder: () => ({
  //     color: '#7d97ad',
  // }),
  valueContainer: (provided) => ({
    ...provided,
    width: "90%",
    paddingTop: "0",
    paddingBottom: "0",
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    width: "10%",
    minHeight: "1px",
  }),
  singleValue: () => ({
    color: "#525c65",
  }),
};

const formattedArray = (array: Array<MyOptionType>) => {
  return array.map((item: MyOptionType) => {
    return {
      label: `${item.label}`,
      value: `${item.value}`,
    };
  });
};

export default function WayBillReportsTabs<Data extends object>({
  dataForBoat,
  columnsForBoat,
}: DataTableForBoatProps<Data>) {

  const [ selectedLocation, setSelectedLocation ]= useState("");
  const [ selectedLocationValue, setSelectedLocationValue ]= useState("");
  const [ wayBillReport, setWayBillReport ]= useState("");
  const [ wayBillReportValue, setWayBillReportValue ]= useState("");
  const [ selectedStatus, setSelectedStatus ]= useState("");
  const [ selectedStatusValue, setSelectedStatusValue ]= useState("");

  const handleFilter = (title: string, value:string, index: string) : void => {
    if(title === "Location"){
      setSelectedLocation(value);
      setSelectedLocationValue(index);
    }
    else if(title === "WayBill Number"){ 
      setWayBillReport(value);
      setWayBillReportValue(index);
    }
    else{ 
      setSelectedStatus(value);
      setSelectedStatusValue(index);
    }
  }

  return (
    <Center display={"flex"} justifyContent="end">
      <Box maxW={"95%"} w={"full"}>
        <Tabs>
          <TabList display={"flex"} justifyContent={"space-between"}>
            <Stack direction="row">
              <Tab>All</Tab>
              <Tab>Completed</Tab>
              <Tab>Pending</Tab>
            </Stack>

            <Flex marginBottom={"10px"}>
              <Select
                components={{ IndicatorSeparator: () => null }}
                className="Select"
                isSearchable={true}
                placeholder={"Select Boat No"}
                // onChange={(value) => {
                //     form.setFieldValue('assignment_id', value)
                // }}
                // value={
                //     field.value
                //         ? {
                //             id: field.value.id,
                //             label: field.value.value,
                //             value: field.value.value,
                //         }
                //         : ''
                // }
                styles={customStyles}
                options={
                  options.length === 0
                    ? formattedArray([])
                    : formattedArray(options)
                }
              />
              <Select
                components={{ IndicatorSeparator: () => null }}
                className="Select"
                isSearchable={true}
                placeholder={"Select Boat Master"}
                // onChange={(value) => {
                //     form.setFieldValue('assignment_id', value)
                // }}
                // value={
                //     field.value
                //         ? {
                //             id: field.value.id,
                //             label: field.value.value,
                //             value: field.value.value,
                //         }
                //         : ''
                // }
                styles={customStyles}
                options={
                  options.length === 0
                    ? formattedArray([])
                    : formattedArray(options)
                }
              />
              <Stack
                spacing={4}
                direction="row"
                align="center"
                padding={"10px"}
              >
                <Button
                  colorScheme="#E79378"
                  size="md"
                  _hover={{ bgColor: "#E79378" }}
                  leftIcon={<img src={Filter} alt="Filter Icon" />}
                  bgColor="#E79378"
                  color={"#fff"}
                  padding={"20px"}
                >
                  Apply
                </Button>
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
                  height={"40px"}
                  variant="outline"
                  size="xs"
                  placeholder={`Search`}
                />
              </InputGroup>
              <Stack direction="row" spacing={4}>
                <Menu>
                  <MenuButton 
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
                  </MenuButton>
                  <MenuList maxW="180px" maxH="266px" overflow={"auto"} p={0} borderRadius="lg">
                    <Accordion allowToggle borderRadius="lg">
                      {[0,1,2].map(item => {
                        const accordingHeading = item === 0 ? "Location" : item === 1 ? "WayBill Number" : "Status";
                        const radioData = item === 0 ? ["Edathua","Edathua","Edathua","Edathua","Edathua"] : item === 1 ? ["0001","0001","0001","0001","0001"] : ["Complete", "Pending"];
                        const radioValue = item === 0 ? selectedLocationValue : item === 1 ? wayBillReportValue : selectedStatusValue;

                        return(
                          <AccordionItem key={item}>
                            <h2>
                              <AccordionButton _expanded={{ bg: "#E79379", color: "#fff" }}  _hover={{ bgColor: "#E79379", color: "#fff" }}>
                                <Box flex="1" textAlign="left" fontSize={"lg"}>
                                  {accordingHeading}
                                </Box>
                                <AccordionIcon />
                              </AccordionButton>
                            </h2>
                            <AccordionPanel bgColor={"#3E4059"} color={"#fff"} pb={4}>
                              <InputGroup>
                                <InputRightElement
                                  pos={"absolute"}
                                  right="10px"
                                  top="2px"
                                  w="4" h="4"
                                  pointerEvents="none"
                                  children={
                                    <SearchIcon className="SearchIcon" color="#3E4059" />
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
                              
                              <Flex mt={"4"} maxH="105px" overflow={"auto"}
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
                                    {radioData.map((data, index) => (
                                      <Stack onClick={() => handleFilter(accordingHeading, data, `${index + 1}`)}>
                                        <Radio value={`${index + 1}`}> {data} </Radio>
                                      </Stack>
                                    ))}
                                  </Stack>
                                </RadioGroup>
                              </Flex>

                            </AccordionPanel>
                          </AccordionItem>
                        );
                      })}
                    </Accordion>

                    {/* <MenuItem>Create a Copy</MenuItem> */}
                  </MenuList>
                </Menu>

                {/* <Button
                  _hover={{ bgColor: "#646782" }}
                  leftIcon={<img src={Filter} />}
                  bgColor="#3E4059"
                  color={"#fff"}
                  padding={"20px"}
                >
                  Filter
                </Button> */}
              </Stack>
            </Flex>
            
            <Flex justify={"space-between"} w="60%">
              <HStack spacing={4}>
                {selectedLocation !== "" && (
                  <Tag size="lg" variant="solid" h="43px" bg="#C4C4C4" color="#3E4059" colorScheme="#3E4059"> 
                    {selectedLocation} 
                    <Image 
                      css={{ cursor: "pointer" }}
                      onClick={() => {
                        setSelectedLocation(""); 
                        setSelectedLocationValue("")
                      }} 
                      src={IMAGE_PREFIX.CrossIcon} 
                      pl={"4"} 
                      alt="Angle Bracket" 
                    />
                  </Tag>
                )}
                {wayBillReport !== "" && (
                  <Tag size="lg" variant="solid" h="43px" bg="#C4C4C4" color="#3E4059" colorScheme="#3E4059"> 
                    {wayBillReport} 
                    <Image 
                      css={{ cursor: "pointer" }}
                      onClick={() => {
                        setWayBillReport(""); setWayBillReportValue("")
                      }} 
                      src={IMAGE_PREFIX.CrossIcon} 
                      pl={"4"} 
                      alt="Angle Bracket" 
                    />
                  </Tag>
                )}
                {selectedStatus !== "" && (
                  <Tag size="lg" variant="solid" h="43px" bg="#C4C4C4" color="#3E4059" colorScheme="#3E4059"> 
                    {selectedStatus}
                    <Image 
                      css={{ cursor: "pointer" }}
                      onClick={() => {
                        setSelectedStatus(""); setSelectedStatusValue("")
                      }} 
                      src={IMAGE_PREFIX.CrossIcon} 
                      pl={"4"} 
                      alt="Angle Bracket" 
                    /> 
                  </Tag>
                )}
              </HStack>
              {(selectedLocation !== "" || wayBillReport !== "" || selectedStatus !== "") && (
                <Text 
                  css={{ cursor: "pointer" }}
                  onClick={() => {
                    setSelectedLocation(""); setSelectedLocationValue("");
                    setWayBillReport(""); setWayBillReportValue("");
                    setSelectedStatus(""); setSelectedStatusValue("");
                  }} 
                  fontSize="xl" 
                  color={"#E8947A"}
                > 
                  Clear All Filters 
                </Text>
              )}
            </Flex>
            
          </Stack>

          <TabPanels>
            <TabPanel>
              <DataTable columns={columnsForBoat} data={dataForBoat} />
            </TabPanel>
            <TabPanel>
              <DataTable columns={columnsForBoat} data={dataForBoat} />
            </TabPanel>
            <TabPanel>
              <DataTable columns={columnsForBoat} data={dataForBoat} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Center>
  );
}
