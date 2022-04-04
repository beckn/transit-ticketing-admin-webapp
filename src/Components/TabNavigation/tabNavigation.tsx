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
import DataTable from "../Table/table"
import { data, columns } from "../../Pages/Home/Data/data"
import { SearchIcon } from "@chakra-ui/icons";
import "./tabNavigation.css";
import  Filter  from "../../Assets/Svg/filter.svg";

export default function TabNavigation() {
    return (
        <Center display={"flex"} justifyContent="end">
            <Box maxW={"84%"} w={"full"}>
                <Tabs>
                    <TabList display={"flex"} justifyContent={"space-between"}>
                        <Stack direction="row">
                        <Tab>All</Tab>
                        <Tab>New</Tab>
                        <Tab>Old</Tab>
                        </Stack>
                        <Stack direction="row">
                        <InputGroup>
                            <InputRightElement 
                                className="InputLeft"
                                pointerEvents="none"
                                children={<SearchIcon className="SearchIcon" color="gray.300" />}
                                
                            />
                            <Input  height={"40px"} variant="outline" size="xs" placeholder={`Search`} />
                        </InputGroup>
                        <Stack direction="row" spacing={4}>
                            <Button _hover={{bgColor:"#646782"}}  leftIcon={<img src={Filter}/>} bgColor="#3E4059" color={"#fff"} padding={"20px"} >
                                Filter
                            </Button>
                        </Stack>
                        </Stack>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <DataTable columns={columns} data={data} />
                        </TabPanel>
                        <TabPanel>
                            <DataTable columns={columns} data={data} />
                        </TabPanel>
                        <TabPanel>
                            <DataTable columns={columns} data={data} />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Center>
    );
}
