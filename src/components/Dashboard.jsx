import { Box, Button } from '@mui/material';

import SpeedMeter from './Speedmeter';
import InfoPanel from './InfoPanel';
import MoneyDistribution from './MoneyDistribution';
import CompanyInfo from './CompanyInfo';
import DebtPanel from './DebtPanel';
import AdditionalInfo from './AdditionalInfo';

import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const data = {
  updated_at: "08/11/2024",
  total_debt: "$143.729",
  payment_status: [
    { label: "Vigente", amount: "$143.729" },
    { label: "30 a 59 días", amount: "$0" },
    { label: "60 a 89 días", amount: "$0" },
    { label: "90 o más días", amount: "$0" },
  ],
  direct_debt_details: [
    {
      financial_institution: "Bice",
      credit_type: "Consumo",
      total_credit: "$53.724",
      current: "$53.724",
      "30_to_59_days": "$10.000",
      "60_to_89_days": "$0",
      "90_or_more_days": "$0",
    },
    {
      financial_institution: "Banco Itaú Chile",
      credit_type: "Consumo",
      total_credit: "$90.005",
      current: "$90.005",
      "30_to_59_days": "$0",
      "60_to_89_days": "$0",
      "90_or_more_days": "$0",
    },
  ],
  credit_lines_details: [
    { financial_institution: "Bice", direct: "$1.509.079", indirect: "$0" },
    { financial_institution: "Banco Itaú Chile", direct: "$2.051.679", indirect: "$0" },
  ],
};

const moneyData = [
  { title: "Documentos impagos", value: 24500, color: "#f44336" }, // Rojo
  { title: "Valoracion de Propiedades", value: 450000, color: "#4caf50" }, // Verde
  { title: "Valoracion de Vehiculos", value: 28500, color: "#2196f3" }, // Azul
];

const personalInfo = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  age: 23,
  rut: '12.345.678-9',
};

export default function DashboardPage() {

  const generatePDF = async () => {
    const element = document.getElementById("dashboard-content");
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
  
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
  
    // Escala del canvas para mantener proporciones
    const contentWidth = canvas.width;
    const contentHeight = canvas.height;
  
    // Calcula cuántas páginas se necesitan
    let pageHeight = (pdfHeight * contentWidth) / pdfWidth;
    let remainingHeight = contentHeight;
  
    let position = 0;
  
    while (remainingHeight > 0) {
      // Agregar imagen a la posición actual
      pdf.addImage(
        imgData,
        "PNG",
        0,
        position,
        pdfWidth,
        pageHeight > remainingHeight ? (remainingHeight * pdfWidth) / contentWidth : pdfHeight
      );
  
      remainingHeight -= pageHeight;
      position -= pdfHeight;
  
      // Añadir nueva página si hay más contenido
      if (remainingHeight > 0) {
        pdf.addPage();
      }
    }
  
    pdf.save("dashboard.pdf");
  };
  

  return (
    <Box id="dashboard" sx={{ backgroundColor: '#f5f5f5' }}>
      <Box id="dashboard-content" sx={{ px: 6 }} >
        <Box mb={4} display="flex" flexDirection="row" gap={2}>
          <InfoPanel personalInfo={personalInfo} />
          <SpeedMeter speed={7.5} maxSpeed={10} />
        </Box>
        <Box mb={4} textAlign="center">
          <DebtPanel />
        </Box>
        <MoneyDistribution data={moneyData} />
        <Box mb={4}>
          <CompanyInfo data={data} />
        </Box>
        <AdditionalInfo />
      </Box>

      {/* Botón para generar PDF */}
      <Box textAlign="center" my={4}>
        <Button
          variant="contained"
          color="primary"
          sx={{
            padding: '10px 20px',
            fontWeight: 'bold',
          }}
          onClick={generatePDF}
        >
          Generar PDF
        </Button>
      </Box>
    </Box>
  );
}
