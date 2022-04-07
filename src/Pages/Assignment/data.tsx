import AssignmentDropdownTable from '../../Components/Table/assignmentDropdownForTable';
import { Column } from "react-table";

// ------------------------------Assignment Boats-------------------------------

type BoatsConversionForAssignment = {
  boatNo: number;
  station: string[];
  schedule: string[];
  boatMaster: string[];
};
export const data: Array<BoatsConversionForAssignment> = [
  {
    boatNo: 1102,
    station: ["open", "closed", "resolved", "acknowldged", "suppressed"],
    schedule: ["open", "closed", "resolved", "acknowldged", "suppressed"],
    boatMaster: ["open", "closed", "resolved", "acknowldged", "suppressed"],
  },
  {
    boatNo: 1102,
    station: ["open", "closed", "resolved", "acknowldged", "suppressed"],
    schedule: ["open", "closed", "resolved", "acknowldged", "suppressed"],
    boatMaster: ["open", "closed", "resolved", "acknowldged", "suppressed"],
  },
  {
    boatNo: 1102,
    station: ["open", "closed", "resolved", "acknowldged", "suppressed"],
    schedule: ["open", "closed", "resolved", "acknowldged", "suppressed"],
    boatMaster: ["open", "closed", "resolved", "acknowldged", "suppressed"],
  },
  {
    boatNo: 1102,
    station: ["open", "closed", "resolved", "acknowldged", "suppressed"],
    schedule: ["open", "closed", "resolved", "acknowldged", "suppressed"],
    boatMaster: ["open", "closed", "resolved", "acknowldged", "suppressed"],
  },
  {
    boatNo: 1102,
    station: ["open", "closed", "resolved", "acknowldged", "suppressed"],
    schedule: ["open", "closed", "resolved", "acknowldged", "suppressed"],
    boatMaster: ["open", "closed", "resolved", "acknowldged", "suppressed"],
  }
];
export const columns: Column<BoatsConversionForAssignment>[] = [
  {
    Header: "Boat No",
    accessor: "boatNo" 
  },

  {
    Header: "Station",
    accessor: "station",
    Cell: () => {
      return <AssignmentDropdownTable />;
    }
  },
  {
    Header: "Schedule",
    accessor: "schedule",
    Cell: () => {
      return <AssignmentDropdownTable />;
    }
  },
  {
    Header: "Boat Master",
    accessor: "boatMaster",
    Cell: () => {
      return <AssignmentDropdownTable />;
    }
  },
 
];

// ------------------------------Assignment Counter-------------------------------

type BoatsConversionForAssignmentCounter = {
  boatNo: number;
  station: string[];
  counterSchedule: string[];
  ticketMaster: string[];
};
export const dataForCounter: Array<BoatsConversionForAssignmentCounter> = [
  {
    boatNo: 1102,
    station: ["open", "closed", "resolved", "acknowldged", "suppressed"],
    counterSchedule: ["open", "closed", "resolved", "acknowldged", "suppressed"],
    ticketMaster: ["open", "closed", "resolved", "acknowldged", "suppressed"],
  },
  {
    boatNo: 1102,
    station: ["open", "closed", "resolved", "acknowldged", "suppressed"],
    counterSchedule: ["open", "closed", "resolved", "acknowldged", "suppressed"],
    ticketMaster: ["open", "closed", "resolved", "acknowldged", "suppressed"],
  },
  {
    boatNo: 1102,
    station: ["open", "closed", "resolved", "acknowldged", "suppressed"],
    counterSchedule: ["open", "closed", "resolved", "acknowldged", "suppressed"],
    ticketMaster: ["open", "closed", "resolved", "acknowldged", "suppressed"],
  },
  {
    boatNo: 1102,
    station: ["open", "closed", "resolved", "acknowldged", "suppressed"],
    counterSchedule: ["open", "closed", "resolved", "acknowldged", "suppressed"],
    ticketMaster: ["open", "closed", "resolved", "acknowldged", "suppressed"],
  },
  {
    boatNo: 1102,
    station: ["open", "closed", "resolved", "acknowldged", "suppressed"],
    counterSchedule: ["open", "closed", "resolved", "acknowldged", "suppressed"],
    ticketMaster: ["open", "closed", "resolved", "acknowldged", "suppressed"],
  }
];
export const columnsForCounter: Column<BoatsConversionForAssignmentCounter>[] = [
  {
    Header: "Boat No",
    accessor: "boatNo" 
  },

  {
    Header: "Station",
    accessor: "station",
    Cell: () => {
      return <AssignmentDropdownTable />;
    }
  },
  {
    Header: "Counter Schedule",
    accessor: "counterSchedule",
    Cell: () => {
      return <AssignmentDropdownTable />;
    }
  },
  {
    Header: "Ticket Master",
    accessor: "ticketMaster",
    Cell: () => {
      return <AssignmentDropdownTable />;
    }
  },
 
];