import SalesReport from "@/components/table/SalesReport";
import { Box, Button, Typography } from "@mui/material";
import jsPDF from "jspdf";
import "jspdf-autotable";

declare module "jspdf" {
  interface jsPDF {
    autoTable: (options: any) => jsPDF;
  }
}

export default function Home() {
  const handleGenerateReport = () => {
    const doc = new jsPDF();

    // Título del documento
    doc.setFontSize(18);
    doc.text("Venta de Autos al 28 Diciembre 2024 CMC Por paquete", 10, 20);

    // Datos de la tabla
    const tableColumn = ["Paquete", "Cantidad", "Precio Unitario", "Total"];
    const tableRows = [
      ["Paquete A", "10", "$20,000", "$200,000"],
      ["Paquete B", "5", "$25,000", "$125,000"],
      ["Paquete C", "8", "$22,000", "$176,000"],
    ];

    // Generar la tabla
    doc.autoTable({
      startY: 30,
      head: [tableColumn],
      body: tableRows,
    });

    // Guardar el PDF
    doc.save("reporte.pdf");
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      height={"auto"}
      gap={4}
    >
      <Typography
        sx={{
          fontSize: { xs: 20, sm: 25 },
          color: "#fff",
          mb: 2,
          mt: 4,
          fontFamily: "var(--font-geist-sans)",
          textAlign: "center",
          px: 2,
        }}
      >
        Sistema de reportes de vendedores
      </Typography>
      {/* <Button
        variant="contained"
        color="primary"
        sx={{
          mt: 2,
          px: 4,
          py: 1,
          fontSize: 16,
          textTransform: "none",
          borderRadius: 2,
          boxShadow: 3,
        }}
        onClick={handleGenerateReport}
      >
        Generar reporte
      </Button> */}
      <SalesReport />
    </Box>
  );
}
