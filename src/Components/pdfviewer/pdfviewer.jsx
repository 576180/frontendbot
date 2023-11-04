// import React from "react";

// import { Document, Page, pdfjs } from "react-pdf";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// function Pdfviewer({ url }) {
//   return (
//     <div>
//       <Document file={url}>
//         <Page pageNumber={1} />
//       </Document>
//     </div>
//   );
// }

// export default Pdfviewer;

import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Pdfviewer({ url }) {
  const [numPages, setNumPages] = useState(null);

  const handleLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      <Document  file={url} onLoadSuccess={handleLoadSuccess}>
        {Array.from({ length: numPages }, (_, pageIndex) => (
          <Page width="1100" key={`page_${pageIndex + 1}`} pageNumber={pageIndex + 1} />
        ))}
      </Document>
    </div>
  );
}

export default Pdfviewer;

