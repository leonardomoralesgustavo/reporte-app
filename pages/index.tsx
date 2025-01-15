import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { Box, Button, Typography } from "@mui/material";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      height={"100vh"}
    >
      <Typography
        sx={{
          fontSize: 40,
          color: "#fff",
          mb: 2,
          fontFamily: "var(--font-geist-sans)",
        }}
      >
        Sistema de reportes de vendedores
      </Typography>
      <Button
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
      >
        Generar reporte
      </Button>
    </Box>
  );
}
