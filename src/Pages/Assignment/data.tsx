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
export const columns: Column<BoatsConversionForAssignment>[] = [
  {
    Header: "Boat No",
    accessor: "boatNo",
  },

  {
    Header: "Station",
    accessor: "station",
    Cell: (props: any) => {
      return <CustomSelect options={props.station} />;
    },
  },
  {
    Header: "Schedule",
    accessor: "schedule",
    Cell: () => {
      return <CustomSelect options={options} />;
    },
  },
  {
    Header: "Boat Master",
    accessor: "boatMaster",
    Cell: () => {
      return <CustomSelect options={options} />;
    },
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
      "open",
      "closed",
      "resolved",
      "acknowldged",
      "suppressed",
    ],
    ticketMaster: [
      { value: "1102", label: "1102" },
      { value: "1104", label: "1104" },
      { value: "1108", label: "1108" },
    ],
  },
  {
    boatNo: 1102,
    station: [
      { value: "1102", label: "1102" },
      { value: "1104", label: "1104" },
      { value: "1108", label: "1108" },
    ],
    counterSchedule: [
      "open",
      "closed",
      "resolved",
      "acknowldged",
      "suppressed",
    ],
    ticketMaster: [
      { value: "1102", label: "1102" },
      { value: "1104", label: "1104" },
      { value: "1108", label: "1108" },
    ],
  },
  {
    boatNo: 1102,
    station: [
      { value: "1102", label: "1102" },
      { value: "1104", label: "1104" },
      { value: "1108", label: "1108" },
    ],
    counterSchedule: [
      "open",
      "closed",
      "resolved",
      "acknowldged",
      "suppressed",
    ],
    ticketMaster: [
      { value: "1102", label: "1102" },
      { value: "1104", label: "1104" },
      { value: "1108", label: "1108" },
    ],
  },
  {
    boatNo: 1102,
    station: [
      { value: "1102", label: "1102" },
      { value: "1104", label: "1104" },
      { value: "1108", label: "1108" },
    ],
    counterSchedule: [
      "open",
      "closed",
      "resolved",
      "acknowldged",
      "suppressed",
    ],
    ticketMaster: [
      { value: "1102", label: "1102" },
      { value: "1104", label: "1104" },
      { value: "1108", label: "1108" },
    ],
  },
  {
    boatNo: 1102,
    station: [
      { value: "1102", label: "1102" },
      { value: "1104", label: "1104" },
      { value: "1108", label: "1108" },
    ],
    counterSchedule: [
      "open",
      "closed",
      "resolved",
      "acknowldged",
      "suppressed",
    ],
    ticketMaster: [
      { value: "1102", label: "1102" },
      { value: "1104", label: "1104" },
      { value: "1108", label: "1108" },
    ],
  },
];
export const columnsForCounter: Column<BoatsConversionForAssignmentCounter>[] =
  [
    {
      Header: "Boat No",
      accessor: "boatNo",
    },

    {
      Header: "Station",
      accessor: "station",
      Cell: () => {
        return <CustomSelect options={options} />;
      },
    },
    {
      Header: "Counter Schedule",
      accessor: "counterSchedule",
      Cell: () => {
        return <CustomSelect options={options} />;
      },
    },
    {
      Header: "Ticket Master",
      accessor: "ticketMaster",
      Cell: () => {
        return <CustomSelect options={options} />;
      },
    },
  ];
