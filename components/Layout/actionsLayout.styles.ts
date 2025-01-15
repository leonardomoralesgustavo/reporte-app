import { SxProps } from "@mui/material";

type StylesType = {
  mainContainer: SxProps;
  headerIcon: SxProps;
  headerTitle: SxProps;
  headerContainer: SxProps;
  menuProfileContainer: SxProps;
  pageTrackerContainer: SxProps;
};

const style: StylesType = {
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: { xs: "auto", md: "100%" },
    background:
      // "transparent linear-gradient(210deg, #7F4CA5 0%, #8A56B0 18%, #A771CE 50%, #B57EDC 62%, #B782DD 72%, #C08EE1 82%, #CDA2E7 93%, #DBB6EE 100%) 0% 0%",
      "#0995B8",
    width: "auto",
    minHeight: "100vh",
    // mr: 2,
    position: "relative",
    // float: { xs: "none", md: "right" },
    // mt: { xs: "90px", md: "0px" },
    // bgcolor: "red"
    // pb: { xs: 0, md: 12 },
  },
  headerIcon: { fontSize: "30px", color: "#7E7E7E", mr: 2 },
  headerTitle: { fontSize: "20px", color: "#7E7E7E" },
  headerContainer: {
    borderBottom: { xs: "1px solid #7e7e7e", md: "1px solid #000" },
    display: "flex",
    pt: { xs: 1, md: 2 },
    pb: { xs: 1, md: 3 },
    justifyContent: { xs: "center", md: "space-between" },
  },
  menuProfileContainer: { display: { xs: "none", sm: "none", md: "flex" } },
  pageTrackerContainer: {
    display: { xs: "flex", md: "none" },
    alignItems: "center",
  },
};

export default style;
