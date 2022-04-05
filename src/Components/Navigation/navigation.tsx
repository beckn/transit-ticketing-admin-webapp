import { ReactNode, ReactText } from "react";
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
  HStack,
  VStack,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";
import {
  FiChevronDown,
} from 'react-icons/fi';
import { IconType } from "react-icons";
import "./navigation.css"
// import Navbar from "../Navbar/navbar";
import { useHistory } from "react-router-dom";
import IMAGE_PREFIX from "../../Config/image";
import { auth } from "../../Config/firebase";
import { deleteLocalStorage } from "../../utils/helpers";
import logging from "../../Config/logging";

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
  const handleOperationalBoats = () => {
    history.push('/opBoats')
  }
  const handleSchedules = () => {
    history.push('/schedules')
  }
  const handleStaff = () => {
    history.push('/staff')
  }
  const handleHome = () => {
    history.push('/')
  }
  const logout=()=>{
    auth.signOut()
    .then(()=>{
      deleteLocalStorage("firebaseData");
      history.push('/')
    })
    .catch(error=>logging.error(error));
  }
  return (
    <Box
      boxShadow="12px 12px 24px rgb(0 0 0 / 25%)"
      borderRadius="0px 24px 24px 0px"
      transition="1s ease"
      pb="12"
      bg={useColorModeValue('#3E4059', 'gray.900')}
      w="448px"
      h="full"
      pos="fixed"
      overflow="scroll"
      {...rest}>
      <img className="image-logo" src={IMAGE_PREFIX.Logo} alt="logo" onClick={handleHome} />
      <Flex h="147" alignItems="center" mx="8" justifyContent="space-between">
        <Text className="drawer-header">
          Government of Kerala
        </Text>
        <Text className="drawer-sub-header">
          State Water Transport Department
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <NavItem className="main-drawer-item" onClick={handleHome}>Home</NavItem>
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
      <Flex alignItems="center" mt="14" justifyContent="space-between">
        <div>
          <NavItem className="sub-drawer-item">Boats</NavItem>
          <NavItem className="sub-drawer-item">Counter</NavItem>
        </div>
      </Flex>
      <HStack spacing={{ base: '0', md: '6' }}>
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  left="24px"
                  size={"sm"}
                  src={parsedData.photoURL}
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">
                  <Text fontSize="sm" className="footer-User-name" marginLeft={'31px'}>
                    {parsedData.displayName ? parsedData.displayName : parsedData.email}
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList marginLeft={'25px'} borderStyle={'none'} bgColor="#E49076" 
            >
              <Text onClick={()=>logout()} className="footer-User-name" display={'flex'} justifyContent={'center'} cursor={'pointer'}>
                Sign out
              </Text>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
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
          bg: "#E49076",
          color: "white",
        }}
        {...rest}
      >
        {children}
      </Flex>
    </Link>
  );
};
