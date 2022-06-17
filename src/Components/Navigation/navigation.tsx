import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Box,
  BoxProps,
  CloseButton,
  Drawer,
  DrawerContent,
  Flex,
  FlexProps,
  // Divider,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuList,
  Text,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import {
  ReactChild,
  ReactElement,
  ReactFragment,
  ReactNode,
  ReactPortal,
  ReactText,
} from "react"; // import { FiChevronDown } from "react-icons/fi";
import { IconType } from "react-icons";
import {
  NavLink as RouterLink,
  useHistory,
  useLocation,
} from "react-router-dom";
import { auth } from "../../Config/firebase";
import IMAGE_PREFIX from "../../Config/image";
import logging from "../../Config/logging";
import useWindowSize from "../../hooks/useWidth";
import { deleteLocalStorage } from "../../utils/helpers";
import "./navigation.css";
interface LinkItemProps {
  name: string;
  icon: IconType;
}

export default function Navigation({
  children,
}: {
  children: ReactNode;
}): ReactElement {
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
        // ml={size.width && size.width > 1300 ? "392px" : "330px"}
        ml={"392px"}
        w="100%"
        p="4"
        overflowX="scroll"
      >
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}
const accordionRouteMap: any = {
  "/way_Bill_Reports": [0],
  "/banking_Reports": [0],
  "/opBoats": [1],
  "/schedules": [1],
  "/staff": [1],
  "/boats": [2],
  "/counter": [2],
};

const iconMap: any = {
  "Banking Report": IMAGE_PREFIX.BankIcon,
  "Way Bill Report": IMAGE_PREFIX.BillIcon,
  "Operational Boats": IMAGE_PREFIX.HomeBoatIcon,
  Staff: IMAGE_PREFIX.StaffIcon,
  Schedule: IMAGE_PREFIX.TimerIcon,
  Boats: IMAGE_PREFIX.HomeBoatIcon,
  Counter: IMAGE_PREFIX.HomeBoatIcon,
};
const SidebarContent = ({ onClose, ...rest }: SidebarProps): ReactElement => {
  const history = useHistory();
  const size = useWindowSize();
  const location = useLocation();
  const activeIndex = accordionRouteMap[location.pathname];
  //accordionRouteMap[];
  let parsedData: {
    photoURL: string | undefined;
    displayName:
      | boolean
      | ReactChild
      | ReactFragment
      | ReactPortal
      | null
      | undefined;
    email:
      | boolean
      | ReactChild
      | ReactFragment
      | ReactPortal
      | null
      | undefined;
  } | null = null;
  const data = localStorage.getItem("firebaseData");
  if (data) {
    parsedData = JSON.parse(data);
  }

  const logout = (): void => {
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
      // pb="12"
      bg={useColorModeValue("#3E4059", "gray.900")}
      // w={size.width && size.width > 1300 ? "392px" : "330px"}
      w={"392px"}
      h="full"
      pos="fixed"
      overflow="scroll"
      {...rest}
    >
      <div style={{ minHeight: "calc(100vh - 80px)", marginBottom: "10px" }}>
        <RouterLink to="/">
          <Image className="image-logo" src={IMAGE_PREFIX.Logo} alt="logo" />
        </RouterLink>
        <Flex h="147" alignItems="center" mx="8" justifyContent="space-between">
          <Text className="drawer-header">Government of Kerala</Text>
          <Text className="drawer-sub-header">
            State Water Transport Department
          </Text>
          <CloseButton
            display={{ base: "flex", md: "none" }}
            onClick={onClose}
          />
        </Flex>
        <div>
          <RouterLink exact={true} activeClassName="is-active" to="/">
            <NavItem className="main-drawer-item">Home</NavItem>
          </RouterLink>
        </div>

        <Accordion defaultIndex={activeIndex || 0} allowToggle>
          <AccordionItem style={{ border: "none" }}>
            <h2>
              <AccordionButton>
                <Box
                  ml="4"
                  flex="1"
                  color="#FFFFFF"
                  textAlign="left"
                  fontWeight="700"
                  fontSize="24"
                >
                  Reports
                </Box>
                <AccordionIcon color="#fff" />
              </AccordionButton>
            </h2>
            <AccordionPanel
              pb={4}
              _focus={{
                boxShadow: "none",
              }}
            >
              <Flex alignItems="center" mx="8" justifyContent="space-between">
                <div>
                  <RouterLink
                    exact={true}
                    activeClassName="is-active"
                    to="/way_Bill_Reports"
                  >
                    <NavItem className="sub-drawer-item" type="Way Bill Report">
                      Way Bill Report
                    </NavItem>
                  </RouterLink>
                  <RouterLink
                    exact={true}
                    activeClassName="is-active"
                    to="/banking_Reports"
                  >
                    <NavItem className="sub-drawer-item" type="Banking Report">
                      Banking Report
                    </NavItem>
                  </RouterLink>
                </div>
              </Flex>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem style={{ border: "none" }}>
            <h2>
              <AccordionButton>
                <Box
                  ml="4"
                  flex="1"
                  color="#FFFFFF"
                  textAlign="left"
                  fontWeight="700"
                  fontSize="24"
                >
                  Boats
                </Box>
                <AccordionIcon color="#fff" />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Flex alignItems="center" mx="8" justifyContent="space-between">
                <div>
                  <RouterLink
                    exact={true}
                    activeClassName="is-active"
                    to="/opBoats"
                  >
                    <NavItem
                      className="sub-drawer-item"
                      type="Operational Boats"
                    >
                      Operational Boats
                    </NavItem>
                  </RouterLink>
                  <RouterLink
                    exact={true}
                    activeClassName="is-active"
                    to="/schedules"
                  >
                    <NavItem className="sub-drawer-item" type="Schedule">
                      Schedules
                    </NavItem>
                  </RouterLink>
                  <RouterLink
                    exact={true}
                    activeClassName="is-active"
                    to="/staff"
                  >
                    <NavItem className="sub-drawer-item" type="Staff">
                      Staff
                    </NavItem>
                  </RouterLink>
                </div>
              </Flex>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem style={{ border: "none" }}>
            <h2>
              <AccordionButton>
                <Box
                  ml="4"
                  flex="1"
                  color="#FFFFFF"
                  textAlign="left"
                  fontWeight="700"
                  fontSize="24"
                >
                  Assignments
                </Box>
                <AccordionIcon color="#fff" />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Flex alignItems="center" mx="8" justifyContent="space-between">
                <div>
                  <RouterLink
                    exact={true}
                    activeClassName="is-active"
                    to="/boats"
                  >
                    <NavItem className="sub-drawer-item" type="Boats">
                      Boats
                    </NavItem>
                  </RouterLink>
                  <RouterLink
                    exact={true}
                    activeClassName="is-active"
                    to="/counter"
                  >
                    <NavItem className="sub-drawer-item" type="Counter">
                      Counter
                    </NavItem>
                  </RouterLink>
                </div>
              </Flex>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
      <HStack
        spacing={{ base: "0", md: "6" }}
        bottom="0"
        marginTop={"20px"}
        // mb="10"
      >
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
                    <Avatar
                      left="24px"
                      size={"sm"}
                      src={parsedData?.photoURL}
                    />
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
                    {isOpen ? (
                      <TriangleUpIcon color={"#E49076"} />
                    ) : (
                      <TriangleDownIcon color={"#E49076"} />
                    )}{" "}
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
  type?: string;
}
const NavItem = ({ children, type, ...rest }: NavItemProps): ReactElement => {
  return (
    <Flex
      align="center"
      p="4"
      mx="4"
      gap="2"
      borderRadius="24px"
      role="group"
      cursor="pointer"
      fontFamily={"Roboto"}
      whiteSpace="nowrap"
      _hover={{
        bg: "#E49076",
        color: "#fff",
      }}
      {...rest}
    >
      {type && (
        <Image
          boxSize="30px"
          //objectFit="cover"
          src={iconMap[type]}
          alt={type}
        />
      )}

      {children}
    </Flex>
  );
};
