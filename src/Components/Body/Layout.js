import { CssBaseline } from "@mui/material";
import { Box } from "@mui/system";
import React, { Fragment } from "react";
import Header from "./Header";
import Background from "../../image/backgroundimg.png";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <CssBaseline />
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Header />
        <Box
          p={2}
          sx={{
            flexGrow: 1,
            overflow: "auto",
            backgroundImage: `url(${Background})`,
            maxHeight: "auto",
            backgroundPosition: "center",
          }}
        >
          {children}
        </Box>
      </Box>
    </Fragment>
  );
};

export default Layout;
