import Pdf from "./components/Main";
import source from "../public/source.json"

// @ts-ignore
import html2pdf from 'html2pdf.js';

const App = () => {
  const generatePDF = () => {
    const element = document.getElementById('resumeContent');
    const NameFile = source.filename
    const opt = {
      margin: 0.5,
      filename: `${NameFile}.pdf`,
      // image: { type: 'png', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    // New Promise-based usage:
    html2pdf().set(opt).from(element).save();
  };


  return (
    <>
      <Pdf />
      <hr />
      <button
        onClick={generatePDF}
        style={{
          width: "20%",
          marginLeft: "40%",
          marginBottom: "100px"
        }}
      >Download PDF</button>
    </>
  )
}

export default App;
