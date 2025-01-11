import { Box, Paper, Typography, useTheme } from "@mui/material";
import React from "react";
import Pie from "../charts/Pie";
import Bar from "../charts/Bar";
import Geography from "../charts/Geography";

const Row3 = () => {
  const theme = useTheme();
  return (
    <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-2">
      <Paper className="p-3 flex flex-col items-center h-[500px]">
        <Typography
          color={theme.palette.secondary.main}
          fontWeight={"bold"}
          p={1.2}
          variant="h5"
        >
          Revenue Generated
        </Typography>
        <Pie isDashboard={true} />

        <div className="text-center space-y-3">
          <Typography variant="h5">$48,352 revenue generated</Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
        </div>
      </Paper>
      <Paper className="p-3 flex flex-col items-center h-[500px]">
        <Typography
          color={theme.palette.secondary.main}
          fontWeight={"bold"}
          p={1.2}
          variant="h5"
        >
          Sales Quantity
        </Typography>
        <Bar />
      </Paper>
      <Paper className="p-3 flex flex-col items-center h-[500px]">
        <Geography/>
      </Paper>
    </div>
  );
};

export default Row3;
