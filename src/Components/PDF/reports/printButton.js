function PrintButton({ refsToPrint }) {
  const deepCloneWithStyles = (node) => {
    const style = document.defaultView.getComputedStyle(node, null);
    const clone = node.cloneNode(false);
    if (clone.style && style.cssText) clone.style.cssText = style.cssText;
    for (let child of node.childNodes) {
      if (child.nodeType === 1) clone.appendChild(deepCloneWithStyles(child));
      else clone.appendChild(child.cloneNode(false));
    }
    return clone;
  };

  const printFunction = () => {
    const printWindow = window.open("", "", "height=600,width=1000");
    printWindow.document.write(
      "<html><head><title>Page Title</title></head><body id='print-body'>"
    );
    const body = printWindow.document.getElementById("print-body");
    refsToPrint.map((ref) => {
      const clone = deepCloneWithStyles(ref.current);
      return body.appendChild(clone);
    });
    printWindow.document.write("</body></html>");
    printWindow.document.close();
    printWindow.print();
  };

  return <button style={{ display: "block", margin: "10px auto" }} onClick={printFunction}> Print </button>;
}

export default PrintButton;
