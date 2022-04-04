import { Column } from "react-table";
// ----------------------Opereational Boats---------------------
type BoatsConversion = {
  bootNo: number;
  boatMaster: string;
  schudule: string;
  lastServiceDate: string;
  newServiceDate: string;
  status: boolean;
  station: string;
};

export const data: BoatsConversion[] = [
  {
    bootNo: 1102,
    boatMaster: "Navjeet Singh",
    schudule: "EKM-V Puzha",
    lastServiceDate: "01/11/22",
    newServiceDate: "02-11-22",
    status: true,
    station: "EDATHUA"
  },
  {
    bootNo: 1102,
    boatMaster: "Navjeet Singh",
    schudule: "EKM-V Puzha",
    lastServiceDate: "01/11/22",
    newServiceDate: "02-11-22",
    status: true,
    station: "EDATHUA"
  },
  {
    bootNo: 1102,
    boatMaster: "Navjeet Singh",
    schudule: "EKM-V Puzha",
    lastServiceDate: "01/11/22",
    newServiceDate: "02-11-22",
    status: true,
    station: "EDATHUA"
  }
];

export const columns: Column<BoatsConversion>[] = [
  {
    Header: "Boat No",
    accessor: "bootNo"
  },
  {
    Header: "Boat Master",
    accessor: "boatMaster"
  },
  {
    Header: "Schudule",
    accessor: "schudule"
  },
  {
    Header: "Last Service Date",
    accessor: "lastServiceDate"
  },
  {
    Header: "New Service Date",
    accessor: "newServiceDate"
  },
  {
    Header: "Status",
    accessor: d => d.status ? "Yes" : "No" 
  },
  {
    Header: "Station",
    accessor: "station"
  },
];

// ---------------------Schudule----------------------

type BoatsConversionForScchedule = {
  bootNo: number;
  boatMasterName: string;
  startTime: string;
  endTime: string;
  startLocation: string;
  endLocation: string;
};

export const dataForScchedule: BoatsConversionForScchedule[] = [
  {
    bootNo: 1102,
    boatMasterName: "Navjeet Singh",
    startTime: "11:02 AM",
    endTime: "12:02 PM",
    startLocation: "EDATHUA",
    endLocation: "NEDUMUDY"
  },
  {
    bootNo: 1102,
    boatMasterName: "Navjeet Singh",
    startTime: "11:02 AM",
    endTime: "12:02 PM",
    startLocation: "EDATHUA",
    endLocation: "NEDUMUDY"
  },
  {
    bootNo: 1102,
    boatMasterName: "Navjeet Singh",
    startTime: "11:02 AM",
    endTime: "12:02 PM",
    startLocation: "EDATHUA",
    endLocation: "NEDUMUDY"
  }
];

export const columnsForSchedule: Column<BoatsConversionForScchedule>[] = [
  {
    Header: "Boat No",
    accessor: "bootNo"
  },
  {
    Header: "Boat Master Name",
    accessor: "boatMasterName"
  },
  {
    Header: "Start Time",
    accessor: "startTime"
  },
  {
    Header: "End Time",
    accessor: "endTime"
  },
  {
    Header: "Start Location",
    accessor: "startLocation"
  },
  {
    Header: "End Location",
    accessor: "endLocation"
  },
];

// ------------------------staff-----------------------
type BoatsConversionForStaff = {
  boatMasterId: number,
  boatMaster: string,
  bootNo: number;
  dateOfJoining: string,
  station: string,
  postion: string,
  shift: string,
};

export const dataForStaff: BoatsConversionForStaff[] = [
  {
    boatMasterId: 4321234,
    boatMaster: "Navjeet Singh",
    bootNo: 1102,
    dateOfJoining: "01-11-22",
    station: "EDATHUA",
    postion: "Senior",
    shift: "Morning"
  },
  {
    boatMasterId: 4321234,
    boatMaster: "Navjeet Singh",
    bootNo: 1102,
    dateOfJoining: "01-11-22",
    station: "EDATHUA",
    postion: "Junior",
    shift: "Evening"
  },
  {
    boatMasterId: 4321234,
    boatMaster: "Navjeet Singh",
    bootNo: 1102,
    dateOfJoining: "01-11-22",
    station: "EDATHUA",
    postion: "New",
    shift: "Morning"
  }
];

export const columnsForStaff: Column<BoatsConversionForStaff>[] = [
  {
    Header: "Boat Master ID",
    accessor: "boatMasterId"
  },
  {
    Header: "Boat Master",
    accessor: "boatMaster"
  },
  {
    Header: "Boat No",
    accessor: "bootNo"
  },
  {
    Header: "Date of Joining",
    accessor: "dateOfJoining"
  },
  {
    Header: "Station",
    accessor: "station"
  },
  {
    Header: "Position",
    accessor: "postion"
  },
  {
    Header: "Shift",
    accessor: "shift"
  },
];
