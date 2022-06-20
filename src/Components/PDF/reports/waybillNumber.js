const wayBillNumberRows = {
  textAlign: "left", padding: "8px", border: "1px solid #000"
}
const wayBillNumber = ({ name1, value1, name2, value2 }, key) => {
  return (
    <tr style={{ borderBottom: "1px solid rgba(224, 224, 224, 1)" }} key={key}>
      <td style={wayBillNumberRows}>{name1}</td>
      <td style={wayBillNumberRows}>{value1}</td>
      <td style={wayBillNumberRows} colSpan={5}></td>
      <td style={wayBillNumberRows}> {name2} </td>
      <td style={wayBillNumberRows}> {value2} </td>
      <td style={wayBillNumberRows} colSpan={3}></td>
    </tr>
  );
}

const tableRowStyle= {
  minWidth:"50px", textAlign: "left", padding: "8px", border: "1px solid #000" 
}
const generateTableRow = ({ c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12 }, key) => {
  return (
    <tr style={{ borderBottom: "1px solid rgba(224, 224, 224, 1)" }} key={key}>
      <td style={tableRowStyle}>{c1}</td>
      <td style={tableRowStyle}>{c2}</td>
      <td style={tableRowStyle}>{c3}</td>
      <td style={tableRowStyle}>{c4}</td>
      <td style={tableRowStyle}>{c5}</td>
      <td style={tableRowStyle}>{c6}</td>
      <td style={tableRowStyle}>{c7}</td>
      <td style={tableRowStyle}>{c8}</td>
      <td style={tableRowStyle}>{c9}</td>
      <td style={tableRowStyle}>{c10}</td>
      <td style={tableRowStyle}>{c11}</td>
      <td style={tableRowStyle}>{c12}</td>
    </tr>
  );
};

const wayBillLastRows = ({ c1, c2, c3, c4, c5 }, key) => {
  return (
    <tr style={{ borderBottom: "1px solid rgba(224, 224, 224, 1)" }} key={key}>
      <td style={wayBillNumberRows}>{c1}</td>
      <td style={wayBillNumberRows}>{c2}</td>
      {/* <td style={wayBillNumberRows} rowSpan={5} colSpan={4}> {c3} </td> */}
      <td style={wayBillNumberRows}> {c4} </td>
      <td style={wayBillNumberRows} colSpan={2}> {c5} </td>
    </tr>
  );
}

export {
  wayBillNumber,
  generateTableRow,
  wayBillLastRows
};
