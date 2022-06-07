/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactElement } from "react";
import { Table, Thead, Tbody, Tr, Th, Td, chakra, Center } from "@chakra-ui/react";
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import { useTable, useSortBy, Column } from "react-table";

export type DataTableProps<Data extends object> = {
  data: Data[];
  columns: Column<Data>[];
};

function DataTable<Data extends object>({
  data,
  columns
}: DataTableProps<Data>): ReactElement {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  return (
    <Table variant="simple" {...getTableProps()}>
      <Thead>
        {headerGroups.map((headerGroup: any, index: any) => (
          <Tr key={index} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column: any, index1: any) => (
              <Th
                key={index1}
                {...column.getHeaderProps(column.getSortByToggleProps())}
                isNumeric={column.isNumeric}
              >
                {column.render("Header")}
                <chakra.span pl="4">
                  {column.isSorted ? (
                    column.isSortedDesc ? (
                      <TriangleDownIcon aria-label="sorted descending" />
                    ) : (
                      <TriangleUpIcon aria-label="sorted ascending" />
                    )
                  ) : null}
                </chakra.span>
              </Th>
            ))}
          </Tr>
        ))}
      </Thead>
      <Tbody {...getTableBodyProps()}>
        
        {rows.length > 0 ?(rows.map((row: any, index: any) => {
          prepareRow(row);
          return (
            <Tr key={index} {...row.getRowProps()}>
              {row.cells.map((cell: any, index1: any) => (
                <Td key={index1} {...cell.getCellProps()} isNumeric={cell.column.isNumeric}>
                  {cell.render("Cell")}
                </Td>
              ))}
            </Tr>
          );
        })) : (
          <Tr verticalAlign= "middle" textAlign={"center"}>
            <Center background={"#E79378"} fontFamily = {"Roboto"} borderRadius={"3xl"} color='white'>
              No Data ... 
            </Center>
          </Tr>
        )
        }
        
      </Tbody>
    </Table>
  );
}

export default DataTable;
