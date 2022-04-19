import { Column } from "react-table";
import { date } from "yup/lib/locale";
import { Box, Link, Divider } from "@chakra-ui/react";

// ----------------------Opereational Boats---------------------

type BoatTableData = {
  bootNo: number;
  boatMaster: string;
  schedule: string;
  lastServiceDate: string;
  newServiceDate: string;
  status: string;
  station: string;
};

export const boatData: Array<BoatTableData> = [
  {
    bootNo: 1102,
    boatMaster: "Navjeet Singh",
    schedule: "EKM-V Puzha",
    lastServiceDate: "01/11/22",
    newServiceDate: "02-11-22",
    status: "Replace",
    station: "EDATHUA",
  },
  {
    bootNo: 1102,
    boatMaster: "Navjeet Singh",
    schedule: "EKM-V Puzha",
    lastServiceDate: "01/11/22",
    newServiceDate: "02-11-22",
    status: "Servicing",
    station: "EDATHUA",
  },
  {
    bootNo: 1102,
    boatMaster: "Navjeet Singh",
    schedule: "EKM-V Puzha",
    lastServiceDate: "01/11/22",
    newServiceDate: "02-11-22",
    status: "New",
    station: "EDATHUA",
  },
];

export const boatColumns: Column<BoatTableData>[] = [
  {
    Header: "Boat Master ID",
    accessor: "bootNo",
  },
  {
    Header: "Boat Master",
    accessor: "boatMaster",
  },
  {
    Header: "Schedule",
    accessor: "schedule",
  },
  {
    Header: "Last Service Date",
    accessor: "lastServiceDate",
  },
  {
    Header: "New Service Date",
    accessor: "newServiceDate",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Station",
    accessor: "station",
  },
];

// ---------------------Schudule----------------------

type BoatsConversionForScchedule = {
  boatNo: number;
  boatMasterName: string;
  startTime: string;
  endTime: string;
  startLocation: string;
  endLocation: string;
};

export const dataForScchedule: BoatsConversionForScchedule[] = [
  {
    boatNo: 1102,
    boatMasterName: "Navjeet Singh",
    startTime: "11:02 AM",
    endTime: "12:02 PM",
    startLocation: "EDATHUA",
    endLocation: "NEDUMUDY",
  },
  {
    boatNo: 1102,
    boatMasterName: "Navjeet Singh",
    startTime: "11:02 AM",
    endTime: "12:02 PM",
    startLocation: "EDATHUA",
    endLocation: "NEDUMUDY",
  },
  {
    boatNo: 1102,
    boatMasterName: "Navjeet Singh",
    startTime: "11:02 AM",
    endTime: "12:02 PM",
    startLocation: "EDATHUA",
    endLocation: "NEDUMUDY",
  },
];

export const columnsForSchedule: Column<BoatsConversionForScchedule>[] = [
  {
    Header: "Boat No",
    accessor: "boatNo",
  },
  {
    Header: "Boat Master Name",
    accessor: "boatMasterName",
  },
  {
    Header: "Start Time",
    accessor: "startTime",
  },
  {
    Header: "End Time",
    accessor: "endTime",
  },
  {
    Header: "Start Location",
    accessor: "startLocation",
  },
  {
    Header: "End Location",
    accessor: "endLocation",
  },
];

// ------------------------staff-----------------------
type BoatsConversionForStaff = {
  staffId: number;
  staffName: string;
  boatNumber: number;
  dateOfJoining: string;
  station: string;
  position: string;
  shift: string;
};

// export const dataForStaff: BoatsConversionForStaff[] = [
//   {
//     boatMasterId: 4321234,
//     boatMaster: "Navjeet Singh",
//     bootNo: 1102,
//     dateOfJoining: "01-11-22",
//     station: "EDATHUA",
//     postion: "Senior",
//     shift: "Morning",
//   },
//   {
//     boatMasterId: 4321234,
//     boatMaster: "Navjeet Singh",
//     bootNo: 1102,
//     dateOfJoining: "01-11-22",
//     station: "EDATHUA",
//     postion: "Junior",
//     shift: "Evening",
//   },
//   {
//     boatMasterId: 4321234,
//     boatMaster: "Navjeet Singh",
//     bootNo: 1102,
//     dateOfJoining: "01-11-22",
//     station: "EDATHUA",
//     postion: "New",
//     shift: "Morning",
//   },
// ];

export const columnsForStaff: Column<BoatsConversionForStaff>[] = [
  {
    Header: "Boat Master ID",
    accessor: "staffId",
  },
  {
    Header: "Boat Master",
    accessor: "staffName",
  },
  {
    Header: "Boat No",
    accessor: "boatNumber",
  },
  {
    Header: "Date of Joining",
    accessor: "dateOfJoining",
  },
  {
    Header: "Station",
    accessor: "station",
  },
  {
    Header: "Position",
    accessor: "position",
  },
  {
    Header: "Shift",
    accessor: "shift",
  },
];

// ----------------------------WAY BILL REPORTS----------------------------

type BoatsConversionForWayBill = {
  boatMasterName: string;
  boatMasterId: number;
  boatNumber: number;
  wayBillNumber: number;
  status: string;
  date: string;
  View: string;
  download: string;
  print: string;
};

// export const dataForWayBill: BoatsConversionForWayBill[] = [
//   {
//     nameOfBoatMaster: "Navjeet Singh",
//     boatMasterId: 4321234,
//     bootNo: 1102,
//     wayBillNo: 10101,
//     status: true,
//     date: "01/11",
//     View: "View",
//     download: "Download",
//     print: "Print",
//   },
//   {
//     nameOfBoatMaster: "Navjeet Singh",
//     boatMasterId: 4321234,
//     bootNo: 1102,
//     wayBillNo: 10101,
//     status: false,
//     date: "01/11",
//     View: "View",
//     download: "Download",
//     print: "Print",
//   },
//   {
//     nameOfBoatMaster: "Navjeet Singh",
//     boatMasterId: 4321234,
//     bootNo: 1102,
//     wayBillNo: 10101,
//     status: false,
//     date: "01/11",
//     View: "View",
//     download: "Download",
//     print: "Print",
//   },
//   {
//     nameOfBoatMaster: "Navjeet Singh",
//     boatMasterId: 4321234,
//     bootNo: 1102,
//     wayBillNo: 10101,
//     status: false,
//     date: "01/11",
//     View: "View",
//     download: "Download",
//     print: "Print",
//   },
//   {
//     nameOfBoatMaster: "Navjeet Singh",
//     boatMasterId: 4321234,
//     bootNo: 1102,
//     wayBillNo: 10101,
//     status: true,
//     date: "01/11",
//     View: "View",
//     download: "Download",
//     print: "Print",
//   },
// ];

export const columnsForWayBill: Column<BoatsConversionForWayBill>[] = [
  {
    Header: "Name Of Boat Master",
    accessor: "boatMasterName",
  },
  {
    Header: "Boat Master ID",
    accessor: "boatMasterId",
  },
  {
    Header: "Boat No",
    accessor: "boatNumber",
  },
  {
    Header: "Way Bill No",
    accessor: "wayBillNumber",
  },
  {
    Header: "Status",
    accessor: (props) => (
      <Divider
        w="42"
        h="21"
        bg={props.status === "Completed" ? "#51FC15" : "#FCF315"}
        p="1"
      ></Divider>
    ),
  },
  {
    Header: "Date",
    accessor: "date",
  },

  {
    Header: "",
    accessor: "View",
    Cell: (props) => <Link color="#EE9A7F">View</Link>,
  },
  {
    Header: "",
    accessor: "download",
    Cell: (props) => <Link color="#EE9A7F">Download</Link>,
  },
  // {
  //   Header: "",
  //   accessor: "print"
  // },
];

// ----------------------------BANKING REPORTS----------------------------

export type BoatsConversionForBanking = {
  nameOfBoatMaster: string;
  bootNo: number;
  wayBillNo: number;
  date: string;
  View: string;
  download: string;
  print: string;
};

export const dataForBanking: BoatsConversionForBanking[] = [
  {
    nameOfBoatMaster: "Navjeet Singh",
    bootNo: 1102,
    wayBillNo: 10101,
    date: "01/11",
    View: "View",
    download: "Download",
    print: "Print",
  },
  {
    nameOfBoatMaster: "Rahul Ranjan",
    bootNo: 1106,
    wayBillNo: 10101,
    date: "01/11",
    View: "View",
    download: "Download",
    print: "Print",
  },
  {
    nameOfBoatMaster: "Deepak Singh",
    bootNo: 1112,
    wayBillNo: 10101,
    date: "01/11",
    View: "View",
    download: "Download",
    print: "Print",
  },
  {
    nameOfBoatMaster: "Varun Dev",
    bootNo: 1321,
    wayBillNo: 10101,
    date: "01/11",
    View: "View",
    download: "Download",
    print: "Print",
  },
  {
    nameOfBoatMaster: "Narendra Singh",
    bootNo: 1152,
    wayBillNo: 10101,
    date: "01/11",
    View: "View",
    download: "Download",
    print: "Print",
  },
];

export const columnsForBanking: Column<BoatsConversionForBanking>[] = [
  {
    Header: "Name Of Boat Master",
    accessor: "nameOfBoatMaster",
  },
  {
    Header: "Boat No",
    accessor: "bootNo",
  },
  {
    Header: "Way Bill No",
    accessor: "wayBillNo",
  },
  {
    Header: "Date",
    accessor: "date",
  },
  {
    Header: "",
    accessor: "View",
    Cell: (props) => <Link color="#EE9A7F">View</Link>,
  },
  {
    Header: "",
    accessor: "download",
    Cell: (props) => <Link color="#EE9A7F">Download</Link>,
  },
  // {
  //   Header: "",
  //   accessor: "print",
  // },
];
