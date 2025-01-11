import {
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import Line from "../charts/Line";
import { DownloadOutlined } from "@mui/icons-material";

const Row2 = () => {
  const theme = useTheme();

  const transactionCount = 13;

  return (
    <Stack
        className="gap-5 md:gap-0"
      direction={"row"}
      flexWrap={"wrap"}
      spacing={1.5}
      sx={{ height: "450px" }}
    >
      <Paper
        sx={{
          height: "100%",
          width: "58%",
          flexGrow: 1,
          p: 2,
        }}
      >
        <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
          <Box>
            <Typography
              color={theme.palette.secondary.main}
              fontWeight={"bold"}
              p={1.2}
              variant="h5"
            >
              Revenue Generated
            </Typography>
            <Typography variant="body2" ml={4}>
              $59,342,012
            </Typography>
          </Box>
          <IconButton sx={{ mr: 3 }}>
            <DownloadOutlined />
          </IconButton>
        </Stack>
        <Box
          sx={{
            height: "85%",
          }}
        >
          <Line />
        </Box>
      </Paper>
      <Box
        sx={{
          overflow: "auto",
          height: "100%",
          width: "40%",
          flexGrow: 1,
        }}
      >
        <Paper sx={{ height: "full", px: 2 }}>
          <Typography
            color={theme.palette.secondary.main}
            fontWeight={"bold"}
            p={1.2}
            variant="h5"
          >
            Recent Transactions
          </Typography>
          {[...Array(transactionCount)].map((_, index) => (
            <Paper
              sx={{
                mt: 1,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box p={1.2}>
                <Typography variant="body1" fontWeight={"600"}>
                  Test
                </Typography>
                <Typography variant="body2" fontWeight={"600"}>
                  Test
                </Typography>
              </Box>
              <Typography variant="body1">Test</Typography>

              <Typography
                borderRadius={1.4}
                p={1}
                bgcolor={theme.palette.error.main}
                color={theme.palette.getContrastText(theme.palette.error.main)}
                variant="body2"
              >
                $5.55
              </Typography>
            </Paper>
          ))}
        </Paper>
      </Box>
    </Stack>
  );
};

export default Row2;
