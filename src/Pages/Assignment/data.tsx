import AssignmentDropdownTable from "../../Components/Table/assignmentDropdownForTable";
import { Column } from "react-table";
import CustomSelect from "../../Components/CustomSelect";

// ------------------------------Assignment Boats-------------------------------

type BoatsConversionForAssignment = {
  boatNo: number;
  station: MyOptionTypeForBoatNo[] | string[];
  schedule: string[] | MyOptionTypeForBoatNo[];
  boatMaster: string[] | MyOptionTypeForBoatNo[];
};
export const data: Array<BoatsConversionForAssignment> = [
  {
    boatNo: 1102,
    station: [
      { value: "1102", label: "1102" },
      { value: "1104", label: "1104" },
      { value: "1108", label: "1108" },
    ],
    schedule: [
      { value: "1102", label: "1102" },
      { value: "1104", label: "1104" },
      { value: "1108", label: "1108" },
    ],
    boatMaster: [
      { value: "1102", label: "1102" },
      { value: "1104", label: "1104" },
      { value: "1108", label: "1108" },
    ],
  },
  {
    boatNo: 1104,
    station: [
      { value: "1102", label: "1102" },
      { value: "1104", label: "1104" },
      { value: "1108", label: "1108" },
    ],
    schedule: [
      { value: "1102", label: "1102" },
      { value: "1104", label: "1104" },
      { value: "1108", label: "1108" },
    ],
    boatMaster: [
      { value: "1102", label: "1102" },
      { value: "1104", label: "1104" },
      { value: "1108", label: "1108" },
    ],
  },
  {
    boatNo: 1202,
    station: [
      { value: "1102", label: "1102" },
      { value: "1104", label: "1104" },
      { value: "1108", label: "1108" },
    ],
    schedule: [
      { value: "1102", label: "1102" },
      { value: "1104", label: "1104" },
      { value: "1108", label: "1108" },
    ],
    boatMaster: [
      { value: "1102", label: "1102" },
      { value: "1104", label: "1104" },
      { value: "1108", label: "1108" },
    ],
  },
  {
    boatNo: 1402,
    station: [
      { value: "1102", label: "1102" },
      { value: "1104", label: "1104" },
      { value: "1108", label: "1108" },
    ],
    schedule: [
      { value: "1102", label: "1102" },
      { value: "1104", label: "1104" },
      { value: "1108", label: "1108" },
    ],
    boatMaster: [
      { value: "1102", label: "1102" },
      { value: "1104", label: "1104" },
      { value: "1108", label: "1108" },
    ],
  },
  {
    boatNo: 1502,
    station: [
      { value: "1102", label: "1102" },
      { value: "1104", label: "1104" },
      { value: "1108", label: "1108" },
    ],
    schedule: [
      { value: "1102", label: "1102" },
      { value: "1104", label: "1104" },
      { value: "1108", label: "1108" },
    ],
    boatMaster: [
      { value: "1102", label: "1102" },
      { value: "1104", label: "1104" },
      { value: "1108", label: "1108" },
    ],
  },
];

type MyOptionTypeForBoatNo = {
  label: string;
  value: string;
};

const options: MyOptionTypeForBoatNo[] = [
  { value: "1102", label: "1102" },
  { value: "1104", label: "1104" },
  { value: "1108", label: "1108" },
];

export const defaultColumn = {
  Cell: CustomSelect,
};
export const columns: Column<BoatsConversionForAssignment>[] = [
  {
    Header: "Boat No",
    accessor: "boatNo",
  },

  {
    Header: "Station",
    accessor: "station",
  },
  {
    Header: "Schedule",
    accessor: "schedule",
  },
  {
    Header: "Boat Master",
    accessor: "boatMaster",
  },
];

// ------------------------------Assignment Counter-------------------------------

type BoatsConversionForAssignmentCounter = {
  boatNo: number;
  station: MyOptionTypeForBoatNo[] | string[];
  counterSchedule: string[] | MyOptionTypeForBoatNo[];
  ticketMaster: string[] | MyOptionTypeForBoatNo[];
};
export const dataForCounter: Array<BoatsConversionForAssignmentCounter> = [
  {
    boatNo: 1102,
    station: [
      { value: "1102", label: "1102" },
      { value: "1104", label: "1104" },
      { value: "1108", label: "1108" },
    ],
    counterSchedule: [
      { value: "open", label: "open" },
      { value: "closed", label: "closed" },
      { value: "resolved", label: "resolved" },
      { value: "acknowldged", label: "acknowledged" },
      { value: "suppressed", label: "suppressed" },
    ],
    ticketMaster: [
      { value: "1102", label: "1102" },
      { value: "1104", label: "1104" },
      { value: "1108", label: "1108" },
    ],
  },
  {
    boatNo: 1302,
    station: [
      { value: "1102", label: "1102" },
      { value: "1104", label: "1104" },
      { value: "1108", label: "1108" },
    ],
    counterSchedule: [
      { value: "open", label: "open" },
      { value: "closed", label: "closed" },
      { value: "resolved", label: "resolved" },
      { value: "acknowldged", label: "acknowledged" },
      { value: "suppressed", label: "suppressed" },
    ],
    ticketMaster: [
      { value: "1102", label: "1102" },
      { value: "1104", label: "1104" },
      { value: "1108", label: "1108" },
    ],
  },
  {
    boatNo: 1105,
    station: [
      { value: "1102", label: "1102" },
      { value: "1104", label: "1104" },
      { value: "1108", label: "1108" },
    ],
    counterSchedule: [
      { value: "open", label: "open" },
      { value: "closed", label: "closed" },
      { value: "resolved", label: "resolved" },
      { value: "acknowldged", label: "acknowledged" },
      { value: "suppressed", label: "suppressed" },
    ],
    ticketMaster: [
      { value: "1102", label: "1102" },
      { value: "1104", label: "1104" },
      { value: "1108", label: "1108" },
    ],
  },
  {
    boatNo: 1104,
    station: [
      { value: "1102", label: "1102" },
      { value: "1104", label: "1104" },
      { value: "1108", label: "1108" },
    ],
    counterSchedule: [
      { value: "open", label: "open" },
      { value: "closed", label: "closed" },
      { value: "resolved", label: "resolved" },
      { value: "acknowldged", label: "acknowledged" },
      { value: "suppressed", label: "suppressed" },
    ],
    ticketMaster: [
      { value: "1102", label: "1102" },
      { value: "1104", label: "1104" },
      { value: "1108", label: "1108" },
    ],
  },
  {
    boatNo: 1103,
    station: [
      { value: "1102", label: "1102" },
      { value: "1104", label: "1104" },
      { value: "1108", label: "1108" },
    ],
    counterSchedule: [
      { value: "open", label: "open" },
      { value: "closed", label: "closed" },
      { value: "resolved", label: "resolved" },
      { value: "acknowldged", label: "acknowledged" },
      { value: "suppressed", label: "suppressed" },
    ],
    ticketMaster: [
      { value: "1102", label: "Rahul" },
      { value: "1104", label: "Ankit" },
      { value: "1108", label: "Varun" },
    ],
  },
];
export const columnsForCounter: Column<BoatsConversionForAssignmentCounter>[] =
  [
    {
      Header: "Boat No",
      accessor: "boatNo",
      Cell: (row: any) => {
        return <span>{row.value}</span>;
      },
    },

    {
      Header: "Station",
      accessor: "station",
      Cell: (props) => <CustomSelect {...props} />,
    },
    {
      Header: "Counter Schedule",
      accessor: "counterSchedule",
      Cell: (props) => <CustomSelect {...props} />,
    },
    {
      Header: "Ticket Master",
      accessor: "ticketMaster",
      Cell: (props) => {
        return <CustomSelect {...props} />;
      },
    },
  ];
