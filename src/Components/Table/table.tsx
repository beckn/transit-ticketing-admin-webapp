import { Table, Thead, Tbody, Tr, Th, Td, chakra, Center } from "@chakra-ui/react";
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import { useTable, useSortBy, Column } from "react-table";

export type DataTableProps<Data extends object> = {
  data: Data[];
  columns: Column<Data>[];
};



function DataTable<Data extends object>({
  data,
  columns,
}: DataTableProps<Data>) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);
  let columnCount = columns?.length < 0 ? 1 : columns?.length;
  return (
    <Table variant="simple" {...getTableProps()}>
      <Thead>
        {headerGroups.map((headerGroup: any) => (
          <Tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column: any) => (
              <Th
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
        {rows.length > 0 ? (rows.map((row: any) => {
          prepareRow(row);
          return (
            <Tr {...row.getRowProps()}>
              {row.cells.map((cell: any) => (
                <Td {...cell.getCellProps()} isNumeric={cell.column.isNumeric}>
                  {cell.render("Cell")}
                </Td>
              ))}
            </Tr>
          );
        })) : (
          <Tr verticalAlign="middle" textAlign={"center"}>
            <Td
              colSpan={columnCount}
              textAlign={"center"}
              fontFamily={"Roboto"}
              height={"225"}
              fontSize={"5xl"}
              fontWeight={"bold"}
              color={"silver"}
              opacity={"1"}
            >
              No Data Found
            </Td>
          </Tr>
        )
        }

      </Tbody>
    </Table>
  );
}

export default DataTable;
