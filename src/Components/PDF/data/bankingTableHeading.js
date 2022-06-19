const getTableWayBill = (data) => {
  return [
    {
      name1: "Way Bill Number",
      value1: data.wayBillNumber || 12111051,
      name2: "Date",
      value2: "05/11/2021",
    },
    {
      name1: "Boat Master Name",
      value1: data.boatMasterName || "Salilan T.N",
      name2: "Schedule No",
      value2: data.routes.route_name || "EKM-V Puzha",
    },
    {
      name1: "Boat Master Id",
      value1: data.boatMasterId || 363,
      name2: "",
      value2: "",
    },
  ];
};
const TableWayBill = [
  {
    name1: "Way Bill Number",
    value1: 12111051,
    name2: "Date",
    value2: "05/11/2021",
  },
  {
    name1: "Boat Master Name",
    value1: "Salilan T.N",
    name2: "Schedule No",
    value2: "EKM-V Puzha",
  },
  { name1: "Boat Master Id", value1: 363, name2: "", value2: "" },
];

const getBankingTableHeading = (data) => {
  const headingTable = [
    {
      c1: "Station Code",
      c2: ":1",
      c3: "",
      c4: "",
      c5: "Station Name",
      c6: "Ernakulam",
      c7: "",
      c8: "",
      c9: "",
      c10: "",
      c11: "Date",
      c12: ":4/11/2022",
    },
    {
    c1: "Boat No",
    c2: "Starting Time",
    c3: "Waybill No",
    c4: "Starting Stage",
    c5: "Ending stage",
    c6: "Boatmaster",
    c7: "Total Collection(Rs.)",
    c8: "Total Collection(Ps.)",
    c9: "Batta",
    c10: "Warrant",
    c11: "Others",
    c12: "Total Amount deducted",
  }];
  const tableData = data.map((wayBill) => {
    return {
      c1: wayBill?.boatNo,
      c2: wayBill?.startingTime,
      c3: wayBill?.waybillNumber,
      c4: wayBill?.startingStage,
      c5: wayBill?.endingStage,
      c6: wayBill?.boatMaster,
      c7: wayBill?.endingStage,
      c8: wayBill?.totalCollection.rupees,
      c9: wayBill?.totalCollection.paise,
      c10: wayBill?.warrant,
      c11: wayBill?.others,
      c12: wayBill?.totalAmountDeducted,
    };
  });

  return [...headingTable, ...tableData];
};

const TableHeading = [
  {
    c1: "Trip No",
    c2: "Boat No",
    c3: "Route No",
    c4: "Starting Time",
    c5: "Starting stage",
    c6: "Ending Time",
    c7: "Ending Stage",
    c8: "Start Ticket No",
    c9: "End Ticket No",
    c10: "Total passengers",
    c11: "Income(Rs)",
    c12: "Income(Ps)",
  },
  {
    c1: "",
    c2: "",
    c3: "",
    c4: "",
    c5: "",
    c6: "",
    c7: "",
    c8: "",
    c9: "",
    c10: "",
    c11: "",
    c12: "",
  },
  {
    c1: "",
    c2: "",
    c3: "",
    c4: "",
    c5: "",
    c6: "",
    c7: "",
    c8: "",
    c9: "",
    c10: "",
    c11: "",
    c12: "",
  },
  {
    c1: "",
    c2: "",
    c3: "",
    c4: "",
    c5: "",
    c6: "",
    c7: "",
    c8: "",
    c9: "",
    c10: "",
    c11: "",
    c12: "",
  },
  {
    c1: "",
    c2: "",
    c3: "",
    c4: "",
    c5: "",
    c6: "",
    c7: "",
    c8: "",
    c9: "",
    c10: "",
    c11: "",
    c12: "",
  },
];

const TableHeading2 = [
  {
    c1: "By Cash",
    c2: "",
    c3: "",
    c4: "Amount Recieved Person",
    c5: "Salilan T.M",
    c6: "",
    c7: "",
    c8: "Banking Sheet No",
    c9: "",
    c10: "",
    c11: "Rs.",
    c12: "Ps.",
  },
  {
    c1: "Warrant",
    c2: "",
    c3: "",
    c4: "",
    c5: "",
    c6: "",
    c7: "",
    c8: "",
    c9: "",
    c10: "Bal.Amt",
    c11: "",
    c12: "",
  },
  {
    c1: "Batta",
    c2: "",
    c3: "",
    c4: "Special Batta",
    c5: "",
    c6: "",
    c7: "Others",
    c8: "",
    c9: "",
    c10: "Exs.Amt",
    c11: "",
    c12: "",
  },
];

const TableLastData = [
  { c1: "Serang", c2: "Employee ID", c3: "", c4: "Diesel", c5: "" },
  { c1: "Driver", c2: "Employee ID", c3: "", c4: "Lub Oil", c5: "" },
  { c1: "Lascar1", c2: "Employee ID", c3: "", c4: "Gear Oil", c5: "" },
  { c1: "Lascar2", c2: "Employee ID", c3: "", c4: "Steering Oil", c5: "" },
  { c1: "Lascar3", c2: "Employee ID", c3: "", c4: "Grease", c5: "" },
];

export {
  getTableWayBill,
  getBankingTableHeading,
  TableWayBill,
  TableHeading,
  TableHeading2,
  TableLastData,
  //getTableHeading,
};
