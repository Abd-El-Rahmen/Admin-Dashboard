import React from "react";
import Line from "../components/charts/Line";
import { Box } from "@mui/material";

const LineChart = () => {
  return (
    <Box mx={{ height: "85vh" }}>  
      <Line />
    </Box>
  );
};

export default LineChart;
