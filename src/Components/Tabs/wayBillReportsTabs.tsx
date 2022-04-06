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
  // Select,
  Flex,
} from "@chakra-ui/react";
import { TriangleDownIcon } from "@chakra-ui/icons";
import DataTable from "../Table/table";
import { SearchIcon } from "@chakra-ui/icons";
import "./wayBillReportsTabs.css";
import Filter from "../../Assets/Svg/filter.svg";
import { Column } from "react-table";
import Select, { StylesConfig } from "react-select";
import { CSSProperties } from "react";

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
                  colorScheme="teal"
                  size="md"
                  _hover={{ bgColor: "#E79378" }}
                  leftIcon={<img src={Filter} />}
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
            width={"40%"}
          >
            <InputGroup>
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
