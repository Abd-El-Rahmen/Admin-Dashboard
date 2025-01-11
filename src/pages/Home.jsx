import React from "react";
import Row1 from "../components/dashboardRows/Row1";
import Row2 from "../components/dashboardRows/Row2";
import Row3 from "../components/dashboardRows/Row3";
import { Box, Button } from "@mui/material";
import { DownloadOutlined } from "@mui/icons-material";

const Home = () => {
  return (
    <div className="space-y-5 p-4">
      <Box sx={{ textAlign: "right" }}>
        <Button variant="contained" color="primary" sx={{padding: "2px 8px"}}>
          <DownloadOutlined />
          Download Repports
        </Button>
      </Box>

      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  );
};

export default Home;
