import { Column } from "react-table";

type BoatsConversion = {
  masterName: string;
  masterId: number;
  bootNo: number;
  wayBillNo: string;
  status: boolean;
  date: string;
};

export const data: BoatsConversion[] = [
  {
    masterName: "Navjeet Singh",
    masterId: 4321234,
    bootNo: 1102,
    wayBillNo: "00001",
    status: true,
    date: "01/11"
  },
  {
    masterName: "Navjeet Singh",
    masterId: 4321234,
    bootNo: 30.48,
    wayBillNo: "00001",
    status: true,
    date: "01/11"
  },
  {
    masterName: "Navjeet Singh",
    masterId: 4321234,
    bootNo: 0.91444,
    wayBillNo: "00001",
    status: false,
    date: "01/11"
  }
];

export const columns: Column<BoatsConversion>[] = [
  {
    Header: "Name of Boat Master",
    accessor: "masterName"
  },
  {
    Header: "Boat Master ID",
    accessor: "masterId"
  },
  {
    Header: "Boat No",
    accessor: "bootNo"
  },
  {
    Header: "Way Bill No",
    accessor: "wayBillNo"
  },
  {
    Header: "Status",
    accessor: d => d.status ? "Yes" : "No" 
  },
  {
    Header: "Date",
    accessor: "date"
  }
];