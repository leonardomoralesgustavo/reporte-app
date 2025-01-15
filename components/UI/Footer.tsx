import { Box, Typography } from "@mui/material";
import React from "react";

interface ISocial {
  icon: string;
}

const social: ISocial[] = [
  { icon: "/Icons/facebook.png" },
  { icon: "/Icons/linkedin.png" },
  { icon: "/Icons/instagram.png" },
  { icon: "/Icons/tiktok.png" },
];

const Footer = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={{ xs: "column", sm: "column", md: "row" }}
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={{ background: "#004A7C 0% 0% no-repeat padding-box;" }}
      p={5}
      gap={2}
    >
      <Box
        component={"img"}
        src="./Images/logo-chevrolet.png"
        width={{ xs: "100px", sm: "120px", md: "90px", lg: "6%" }}
      />
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        mt={1}
      >
        {/* {social.map((social) => (
          <Box key={social.icon} component={"img"} src={`${social.icon}`} />
        ))} */}

        <Typography variant="body2" color="white" align="center" mt={2}>
          © {new Date().getFullYear()} Todos los derechos reservados.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
