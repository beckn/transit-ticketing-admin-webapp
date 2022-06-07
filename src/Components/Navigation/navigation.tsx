import { ReactChild, ReactFragment, ReactNode, ReactPortal, ReactText } from "react";
import { NavLink as RouterLink } from "react-router-dom";
import {
  Avatar,
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Image,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Divider,
  HStack,
  MenuButton,
  VStack,
  Menu,
  MenuList,
} from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";
import { IconType } from "react-icons";
import "./navigation.css";
// import Navbar from "../Navbar/navbar";
import { useHistory } from "react-router-dom";
import IMAGE_PREFIX from "../../Config/image";
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import { auth } from "../../Config/firebase";
import { deleteLocalStorage } from "../../utils/helpers";
import logging from "../../Config/logging";
import useWindowSize from "../../hooks/useWidth";
interface LinkItemProps {
  name: string;
  icon: IconType;
}

export default function Navigation({ children }: { children: ReactNode }) {
  const {
    isOpen,
    // onOpen,
    onClose,
  } = useDisclosure();

  const size = useWindowSize();         
  
  return (
    <Box
      minH="100vh"
      display={"flex"}
      overflowX={"hidden"}
      bg={useColorModeValue("gray.100", "gray.900")}
    >
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
      <Box
        ml={size.width && size.width > 1300 ? "390px" : "330px"} //"450px" : "390px" -60
        w={"100%"}
        p="4"
      >
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
  const size = useWindowSize();

  let parsedData :{ photoURL: string | undefined; displayName: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; email: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; } | null = null;
  let data = localStorage.getItem("firebaseData");
  if (data) {
    parsedData = JSON.parse(data);
  }

  const logout = () => {
    auth
      .signOut()
      .then(() => {
        deleteLocalStorage("firebaseData");
        history.push("/");
      })
      .catch((error) => logging.error(error));
  };

  return (
    <Box
      boxShadow="12px 12px 24px rgb(0 0 0 / 25%)"
      borderRadius="0px 24px 24px 0px"
      transition="1s ease"
      pb="12"
      bg={useColorModeValue("#3E4059", "gray.900")}
      // w={{ base: "448px", md: 60 }}
      w={size.width && size.width > 1300 ? "390px" : "330px"}  //"448px" : "390px"  //-60
      h="full"
      pos="fixed"
      overflow="scroll"
      {...rest}
    >
      <RouterLink to="/">
        <Image className="image-logo" src={IMAGE_PREFIX.Logo} alt="logo" />
      </RouterLink>
      <Flex h="147" alignItems="center" mx="8" justifyContent="space-between">
        <Text className="drawer-header">Government of Kerala</Text>
        <Text className="drawer-sub-header">
          State Water Transport Department
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <div>
        <RouterLink exact={true} activeClassName="is-active" to="/">
          <NavItem className="main-drawer-item">Home</NavItem>
        </RouterLink>
      </div>
      <Text
        ml="8"
        fontWeight="700"
        fontSize="24"
        color="#FFFFFF"
        fontFamily={"Roboto"}
      >
        Reports
      </Text>
      <Divider mb="3" />
      <Flex alignItems="center" mx="14" justifyContent="space-between">
        <div>
          <RouterLink exact={true} activeClassName="is-active" to="/way_Bill_Reports">
            <NavItem className="sub-drawer-item">Way Bill Report</NavItem>
          </RouterLink>
          <RouterLink exact={true} activeClassName="is-active" to="/banking_Reports">
            <NavItem className="sub-drawer-item">Banking Report</NavItem>
          </RouterLink>
        </div>
      </Flex>
      <Text
        ml="8"
        fontWeight="700"
        fontSize="24"
        color="#FFFFFF"
        fontFamily={"Roboto"}
      >
        Boats
      </Text>
      <Divider mb="3" />
      <Flex alignItems="center" mx="14" justifyContent="space-between">
        <div>
          <RouterLink exact={true} activeClassName="is-active" to="/opBoats">
            <NavItem className="sub-drawer-item">Operational Boats</NavItem>
          </RouterLink>
          <RouterLink exact={true} activeClassName="is-active" to="/schedules">
            <NavItem className="sub-drawer-item">Schedules</NavItem>
          </RouterLink>
          <RouterLink exact={true} activeClassName="is-active" to="/staff">
            <NavItem className="sub-drawer-item">Staff</NavItem>
          </RouterLink>
        </div>
      </Flex>
      <Text
        ml="8"
        fontWeight="700"
        fontSize="24"
        color="#FFF"
        fontFamily={"Roboto"}
        marginTop={"20px"}
      >
        Assignments
      </Text>
      <Divider mb="3" />
      <Flex alignItems="center" mx="14" justifyContent="space-between">
        <div>
          <RouterLink exact={true} activeClassName="is-active" to="/boats">
            <NavItem className="sub-drawer-item">Boats</NavItem>
          </RouterLink>
          <RouterLink exact={true} activeClassName="is-active" to="/counter">
            <NavItem className="sub-drawer-item">Counter</NavItem>
          </RouterLink>
        </div>
      </Flex>
      <HStack spacing={{ base: "0", md: "6" }} marginTop={"20px"}>
        <Flex alignItems={"center"}>  
          <Menu>
          {({ isOpen }) => (
    <>
    <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
              >
              <HStack>
                <Avatar left="24px" size={"sm"} src={parsedData?.photoURL} />
                <VStack>
                  <Text 
                    fontSize="m"
                    className="footer-User-name"
                    marginLeft={"31px"}
                  >
                    {parsedData?.displayName
                      ? parsedData?.displayName
                      : parsedData?.email}
                  </Text>
                </VStack>
                {isOpen ? <TriangleUpIcon color={"#E49076"} /> : <TriangleDownIcon color={"#E49076"} />}
              </HStack>
            </MenuButton>
            <MenuList
              marginLeft={"25px"}
              bgColor={"#3E4059"}
              color={"#fff"}
              border={"none"}
              display={"flex"}
              justifyContent={"center"}
            >
              <Text
                onClick={() => logout()}
                display={"flex"}
                justifyContent={"left"}
                cursor={"pointer"}
                fontFamily={"Roboto"}
                border={"1px solid"}
                w={"18rem"}
                p={"10px"}
                fontWeight={"bold"}
                borderRadius={"20px"}
                _hover={{
                  bg: "#FFFFFF",
                  color: "#FF0000",
                }}
                color={"	#FF0000"}
                background={"#FFFFFF"}
                borderColor={"#FFFFFF"}
              >
                Sign Out
              </Text>
              <span className="triangle"></span>
            </MenuList>
            </>
        )}
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
    <Flex
      align="center"
      p="4"
      mx="4"
      borderRadius="24px"
      role="group"
      cursor="pointer"
      fontFamily={"Roboto"}
      _hover={{
        bg: "#E49076",
        color: "#fff",
      }}
      {...rest}
    >
      {children}
    </Flex>
  );
};
