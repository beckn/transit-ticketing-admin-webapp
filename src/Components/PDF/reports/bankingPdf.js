import { Box, Center, CircularProgress } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { apiUrl } from "../../../Config/apiUrl";
import { useApi } from "../../../hooks/useApi";
import { getBankingTableHeading } from "../data/bankingTableHeading";
import PrintButton from "./printButton";
import {
  generateTableRow
} from "./waybillNumber";

const BankingPdfComponent = () => {
  const tableRef = React.useRef();
  let { id } = useParams();
  const history = useHistory();
  const {
    status,
    data: wayBillReportsData,
    error,
    isLoading,
  } = useApi(apiUrl.WAY_BILL_REPORTS);
  const [wayBillData, setWayBillData] = useState({});
  //console.log("sunny",wayBillData,id, wayBillReportsData?.bankingSheets[0].sheets)

  useEffect(() => {
    if (!id) {
      history.push("/");
    }
    if (id && wayBillReportsData ) {
      
      const filterData = wayBillReportsData &&  wayBillReportsData?.bankingSheets[0]?.sheets.filter((data) => {
        return data.waybillNumber == id;
      });

      filterData.length > 0 && setWayBillData(filterData[0]);
    }
  }, [id, wayBillReportsData]);

  return (
    <Box>
      {isLoading && !wayBillReportsData ? (
        <Center h="100vh">
          <CircularProgress isIndeterminate color="#D27F65" />
        </Center>
      ) : (
        <>
        {wayBillData &&
          <table
            style={{
              borderColor: "grey",
              width: "100%",
              display: "table",
              borderSpacing: "0",
              borderCollapse: "collapse",
              color: "rgba(0, 0, 0, 0.87)",
              transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
              backgroundColor: "#fff",
              boxShadow:
                "0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)",
            }}
            border={1}
            ref={tableRef}
          >
            <tbody>
              <tr style={{ borderBottom: "1px solid rgba(224, 224, 224, 1)" }}>
                <th
                  style={{
                    minWidth: "50px",
                    textAlign: "left",
                    padding: "8px",
                    border: "1px solid #000",
                  }}
                  rowSpan="2"
                  colSpan={3}
                ></th>
                <th
                  style={{
                    minWidth: "50px",
                    padding: "8px",
                    border: "1px solid #000",
                  }}
                  colSpan={4}
                >
                  State Water Transport Department
                </th>
                <th
                  style={{
                    minWidth: "50px",
                    textAlign: "left",
                    padding: "8px",
                    border: "1px solid #000",
                  }}
                  rowSpan="2"
                  colSpan={5}
                ></th>
              </tr>
              <tr>
                <th
                  style={{
                    minWidth: "50px",
                    padding: "8px",
                    border: "1px solid #000",
                  }}
                  colSpan={4}
                >
                  Banking sheet
                </th>
              </tr>

              {/* {wayBillData && getTableWayBill(wayBillData).map((item, key) => wayBillNumber(item, key))} */}

              <tr>
                <td
                  style={{ padding: "12px", border: "1px solid #000" }}
                  colSpan={12}
                ></td>
              </tr>

              {wayBillData && getBankingTableHeading(wayBillReportsData?.bankingSheets[0]?.sheets).map((item, key) => generateTableRow(item, key))}

              <tr>
                <td style={{ padding: "8px", border: "1px solid #000" }}>
                  {" "}
                  Total + Rack Amount	:{" "}
                </td>
                <td
                  style={{ padding: "8px", border: "1px solid #000" }}
                  colSpan={11}
                >785</td>
              </tr>
              <tr>
                <td style={{ padding: "8px", border: "1px solid #000" }}>
                  {" "}
                  Total CR Amount	:{" "}
                </td>
                <td
                  style={{ padding: "8px", border: "1px solid #000" }}
                  colSpan={11}
                >12</td>
              </tr>
              <tr>
                <td style={{ padding: "8px", border: "1px solid #000" }}>
                  {" "}
                  Total Card Amount	:{" "}
                </td>
                <td
                  style={{ padding: "8px", border: "1px solid #000" }}
                  colSpan={11}
                >0</td>
              </tr>
              <tr>
                <td style={{ padding: "8px", border: "1px solid #000" }}>
                  {" "}
                  Net Amount	{" "}
                </td>
                <td
                  style={{ padding: "8px", border: "1px solid #000" }}
                  colSpan={11}
                >1234</td>
              </tr>

              {/* <tr>
                <td style={{ padding: "8px", border: "1px solid #000" }}>
                  {" "}
                  Machine Collection:{" "}
                </td>
                <td
                  style={{ padding: "8px", border: "1px solid #000" }}
                  colSpan={11}
                ></td>
              </tr> */}

              {/* <tr>
                <td style={{ padding: "8px", border: "1px solid #000" }}> </td>
                <td style={{ padding: "8px", border: "1px solid #000" }}>
                  {" "}
                  Rs.{" "}
                </td>
                <td style={{ padding: "8px", border: "1px solid #000" }}>
                  {" "}
                  Ps.{" "}
                </td>
                <td
                  style={{
                    padding: "8px",
                    textAlign: "center",
                    border: "1px solid #000",
                  }}
                  colSpan={9}
                >
                  {" "}
                  For Office Use Only{" "}
                </td>
              </tr> */}
{/* 
              {TableHeading2.map((item, key) => generateTableRow(item, key))}

              <tr>
                <td style={{ padding: "8px", border: "1px solid #000" }}>
                  {" "}
                  Total Amount paid{" "}
                </td>
                <td style={{ padding: "8px", border: "1px solid #000" }}>1200</td>
                <td style={{ padding: "8px", border: "1px solid #000" }}></td>
                <td
                  style={{ padding: "8px", border: "1px solid #000" }}
                  rowSpan={2}
                ></td>
                <td
                  style={{ padding: "8px", border: "1px solid #000" }}
                  rowSpan={3}
                  colSpan={2}
                ></td>
                <td
                  style={{ padding: "8px", border: "1px solid #000" }}
                  rowSpan={2}
                  colSpan={6}
                ></td>
              </tr>

              <tr>
                <td style={{ padding: "8px", border: "1px solid #000" }}>
                  {" "}
                  Total Amount in Word{" "}
                </td>
                <td
                  style={{ padding: "8px", border: "1px solid #000" }}
                  colSpan={2}
                ></td>
              </tr> */}
{/* 
              <tr>
                <td style={{ padding: "8px", border: "1px solid #000" }}>
                  {" "}
                  Remarks{" "}
                </td>
                <td
                  style={{ padding: "8px", border: "1px solid #000" }}
                  colSpan={3}
                ></td>
                <td style={{ padding: "8px", border: "1px solid #000" }}>
                  {" "}
                  Inspector{" "}
                </td>
                <td style={{ padding: "8px", border: "1px solid #000" }}></td>
                <td
                  style={{ padding: "8px", border: "1px solid #000" }}
                  colSpan={4}
                ></td>
              </tr>

              <tr>
                <td style={{ padding: "8px" }} colSpan={2}></td>
                <td
                  style={{ padding: "8px", borderBottom: "1px solid #000" }}
                  rowSpan={6}
                  colSpan={4}
                ></td>
                <td style={{ padding: "8px", border: "1px solid #000" }}>
                  {" "}
                  Inspector Details{" "}
                </td>
                <td
                  style={{ padding: "8px", border: "1px solid #000" }}
                  colSpan={2}
                ></td>
                <td
                  style={{ padding: "8px", border: "1px solid #000" }}
                  colSpan={3}
                  rowSpan={6}
                ></td>
              </tr> */}

              {/* {TableLastData.map((item, key) => wayBillLastRows(item, key))} */}
            </tbody>
          </table>
}
          <PrintButton refsToPrint={[tableRef]} />
        </>
      )}
    </Box>
  );
};

export default BankingPdfComponent;
