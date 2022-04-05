import { ReactNode, ReactText } from "react";
import {Link as RouterLink} from "react-router-dom"
import {
  Avatar,
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Link,
  Image,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Divider,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import "./navigation.css"
// import Navbar from "../Navbar/navbar";
import { useHistory } from "react-router-dom";
import IMAGE_PREFIX from "../../Config/image";

interface LinkItemProps {
  name: string;
  icon: IconType;
}

export default function Navigation({ children }: { children: ReactNode }) {
  const { isOpen, 
    // onOpen, 
    onClose } = useDisclosure();
  return (
    <Box minH="100vh" display={"flex"} bg={useColorModeValue("gray.100", "gray.900")}>
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
      <Box ml={"26%"} w={"70%"} p="4">
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
  if (data) {
    parsedData = JSON.parse(data)
  }
  return (
    <Box
      boxShadow="12px 12px 24px rgb(0 0 0 / 25%)"
      borderRadius="0px 24px 24px 0px"
      transition="1s ease"
      pb="12"
      bg={useColorModeValue('#3E4059', 'gray.900')}
      // w={{ base: "448px", md: 60 }}
      w="448px"
      h="full"
      pos="fixed"
      overflow="scroll"
      {...rest}>
         <RouterLink to="/">
  <Image className="image-logo" src={IMAGE_PREFIX.Logo} alt="logo"  /></RouterLink>
      <Flex h="147" alignItems="center" mx="8" justifyContent="space-between">
        <Text className="drawer-header">
          Government of Kerala
        </Text>
        <Text className="drawer-sub-header">
          State Water Transport Department
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
     <RouterLink to="/">
     <NavItem className="main-drawer-item">Home</NavItem>
       </RouterLink> 
      <Text ml="8" fontWeight="700" fontSize="24" color="#FFFFFF" >Boats</Text>
      <Divider mb="3"/>
      <Flex alignItems="center" mx="14" justifyContent="space-between">
        <div>
        <RouterLink to="/opBoats"><NavItem className="sub-drawer-item" >Operational Boats</NavItem></RouterLink> 
        <RouterLink to="/schedules"><NavItem className="sub-drawer-item" >Schedules</NavItem></RouterLink> 
        <RouterLink to="/staff"><NavItem className="sub-drawer-item" >Staff</NavItem></RouterLink> 
        </div>
      </Flex>
      <Text ml="8" fontWeight="700" fontSize="24" color="#FFFFFF">Assignments</Text>
      <Divider mb="3"/>
      <Flex alignItems="center" mx="14" justifyContent="space-between">
        <div>
          <NavItem className="sub-drawer-item">Boats</NavItem>
          <NavItem className="sub-drawer-item">Counter</NavItem>
        </div>
      </Flex>
      <Flex  mt="14" pos="relative" bottom="0">
        <Avatar
          left="24px"
          size={"sm"}
          src={parsedData.photoURL}
        />
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
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="24px"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "#E49076",
          color: "white",
        }}
        {...rest}
      >
        {children}
      </Flex>
  );
};
