import React, { ReactElement } from "react";
import { background, useDisclosure } from "@chakra-ui/react";

const AssignmentDropdownTable = ():ReactElement => {
  const { onOpen } = useDisclosure();

  const handleDropdown = (e: any) => {
    e.stopPropagation();
  };

  return (
    <div style={{ display: "flex" }}>
      <select
        onClick={(e) => {handleDropdown(e);}}
        onChange={(e) => {
          onOpen();
        }}
        style={{ borderStyle: "none", background: "inherit" }}
      >
        <option value="open">Assign</option>
        <option value="acknowledged">Rahul</option>
        <option value="resolved">Varun</option>
        <option value="suppressed">Deepak</option>
        <option value="closed">Narendra</option>
      </select>
    </div>
  );
};
export default AssignmentDropdownTable;
