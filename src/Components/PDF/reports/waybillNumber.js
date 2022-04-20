const wayBillNumber = ({ name1, value1, name2, value2 }, key) => {
  return (
    <tr style={{ borderBottom: "1px solid rgba(224, 224, 224, 1)" }} key={key}>
      <td style={{ textAlign: "left", padding: "8px", border: "1px solid #000" }}>{name1}</td>
      <td style={{ textAlign: "left", padding: "8px", border: "1px solid #000" }}>{value1}</td>
      <td style={{ textAlign: "left", padding: "8px", border: "1px solid #000" }} colSpan={5}></td>
      <td style={{ textAlign: "left", padding: "8px", border: "1px solid #000" }}> {name2} </td>
      <td style={{ textAlign: "left", padding: "8px", border: "1px solid #000" }}> {value2} </td>
      <td style={{ textAlign: "left", padding: "8px", border: "1px solid #000" }} colSpan={3}></td>
    </tr>
  );
}

const generateTableRow = ({ c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12 }, key) => {
  return (
    <tr style={{ borderBottom: "1px solid rgba(224, 224, 224, 1)" }} key={key}>
      <td style={{ minWidth:"50px", textAlign: "left", padding: "8px", border: "1px solid #000" }}>{c1}</td>
      <td style={{ minWidth:"50px", textAlign: "left", padding: "8px", border: "1px solid #000" }}>{c2}</td>
      <td style={{ minWidth:"50px", textAlign: "left", padding: "8px", border: "1px solid #000" }}>{c3}</td>
      <td style={{ minWidth:"50px", textAlign: "left", padding: "8px", border: "1px solid #000" }}>{c4}</td>
      <td style={{ minWidth:"50px", textAlign: "left", padding: "8px", border: "1px solid #000" }}>{c5}</td>
      <td style={{ minWidth:"50px", textAlign: "left", padding: "8px", border: "1px solid #000" }}>{c6}</td>
      <td style={{ minWidth:"50px", textAlign: "left", padding: "8px", border: "1px solid #000" }}>{c7}</td>
      <td style={{ minWidth:"50px", textAlign: "left", padding: "8px", border: "1px solid #000" }}>{c8}</td>
      <td style={{ minWidth:"50px", textAlign: "left", padding: "8px", border: "1px solid #000" }}>{c9}</td>
      <td style={{ minWidth:"50px", textAlign: "left", padding: "8px", border: "1px solid #000" }}>{c10}</td>
      <td style={{ minWidth:"50px", textAlign: "left", padding: "8px", border: "1px solid #000" }}>{c11}</td>
      <td style={{ minWidth:"50px", textAlign: "left", padding: "8px", border: "1px solid #000" }}>{c12}</td>
    </tr>
  );
};

const wayBillLastRows = ({ c1, c2, c3, c4, c5 }, key) => {
  return (
    <tr style={{ borderBottom: "1px solid rgba(224, 224, 224, 1)" }} key={key}>
      <td style={{ textAlign: "left", padding: "8px", border: "1px solid #000" }}>{c1}</td>
      <td style={{ textAlign: "left", padding: "8px", border: "1px solid #000" }}>{c2}</td>
      {/* <td style={{ textAlign: "left", padding: "8px", border: "1px solid #000" }} rowSpan={5} colSpan={4}> {c3} </td> */}
      <td style={{ textAlign: "left", padding: "8px", border: "1px solid #000" }}> {c4} </td>
      <td style={{ textAlign: "left", padding: "8px", border: "1px solid #000" }} colSpan={2}> {c5} </td>
    </tr>
  );
}

export {
  wayBillNumber,
  generateTableRow,
  wayBillLastRows
}