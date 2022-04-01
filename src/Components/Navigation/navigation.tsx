import React, { ReactNode, ReactText } from "react";
import {
  Avatar,
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Divider,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import logo from '../../Assets/Img/logo.png';
import './navigation.css'
import Navbar from '../Navbar/navbar';
import { useHistory } from "react-router-dom";

interface LinkItemProps {
  name: string;
  icon: IconType;
}

export default function Navigation({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      {/* <MobileNav onOpen={onOpen} /> */}
      {/* <Navbar/> */}
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box> 
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const history = useHistory();

  let parsedData = null
    let data = localStorage.getItem("firebaseData");
    if(data) {
       parsedData = JSON.parse(data)
    }
    console.log("ParsedData",parsedData.photoURL)

    const handleOperationalBoats =()=>{
      history.push('/opBoats')
    }
    const handleSchedules =()=>{
      history.push('/schedules')
    }
    const handleStaff =()=>{
      history.push('/staff')
    }
  return (
    <Box
      className="Box-container"
      position="absolute"
      width="400px"
      left=" 0px"
      top="0px"
      background="#3E4059"
      box-shadow="12px 12px 24px rgb(0 0 0 / 25%)"
      border-radius="0px 24px 24px 0px"
      transition="3s ease"
      //h="full"
      {...rest}
    >
      <img className="image-logo" src={logo} />
      <Flex h="147" alignItems="center" mx="8" justifyContent="space-between">
        <Text className="drawer-header">Government of Kerala</Text>
        <Text className="drawer-sub-header">
          State Water Transport Department
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <NavItem className="main-drawer-item">Home</NavItem>
      <NavItem className="main-drawer-item">Boats</NavItem>
      <Divider />
      <Flex alignItems="center" mx="14" justifyContent="space-between">
      <div>
      <NavItem className="sub-drawer-item" onClick={handleOperationalBoats}>Operational Boats</NavItem>
      <NavItem className="sub-drawer-item" onClick={handleSchedules}>Schedules</NavItem>
      <NavItem className="sub-drawer-item" onClick={handleStaff}>Staff</NavItem>
      </div>
      </Flex>
      <NavItem className="main-drawer-item">Assignments</NavItem>
      <Divider />
      <Flex alignItems="center" mx="14" justifyContent="space-between">
        <div>
          <NavItem className="sub-drawer-item">Boats</NavItem>
          <NavItem className="sub-drawer-item">Counter</NavItem>
        </div>
      </Flex>
      <Flex alignItems="end" h="28vh">
        <Avatar left="24px" size={"sm"} src={parsedData.photoURL} />
        <Text className="footer-User-name">
          {parsedData.displayName ? parsedData.displayName : parsedData.email}
        </Text>
      </Flex>
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  children: ReactText;
}
const NavItem = ({ children, ...rest }: NavItemProps) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: "none", textAlign: "left" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {children}
      </Flex>
    </Link>
  );
};
