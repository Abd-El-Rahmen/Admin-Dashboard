import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import { ResponsivePie } from "@nivo/pie";

const cards = [
  {
    icon: <EmailIcon />,
    title: "12,361",
    subTitle: "Emails Sent",
    data: [
      {
        id: "hack",
        label: "hack",
        value: 266,
        color: "hsl(350, 70%, 50%)",
      },
      {
        id: "elixir",
        label: "elixir",
        value: 408,
        color: "hsl(23, 70%, 50%)",
      },
    ],
    piecolors: "accent",
    increase: "+14%",
  },
  {
    icon: <PointOfSaleIcon />,
    title: "433,225",
    subTitle: "Sales obtained",
    data: [
      {
        id: "elixir",
        label: "elixir",
        value: 408,
        color: "hsl(23, 70%, 50%)",
      },
      {
        id: "go",
        label: "go",
        value: 483,
        color: "hsl(79, 70%, 50%)",
      },
    ],
    piecolors: "red_grey",
    increase: "+21",
  },
  {
    icon: <PersonAddIcon />,
    title: "32,441",
    subTitle: "New clients",
    data: [
      {
        id: "sass",
        label: "sass",
        value: 129,
        color: "hsl(170, 70%, 50%)",
      },
      {
        id: "php",
        label: "php",
        value: 222,
        color: "hsl(160, 70%, 50%)",
      },
    ],
    piecolors: "brown_blueGreen",
    increase: "+5%",
  },
  {
    icon: <TrafficIcon />,
    title: "1,325,552",
    subTitle: "Traffic Received",
    data: [
      {
        id: "php",
        label: "php",
        value: 702,
        color: "hsl(160, 70%, 50%)",
      },
      {
        id: "go",
        label: "go",
        value: 222,
        color: "hsl(79, 70%, 50%)",
      },
    ],
    piecolors: "paired",
    increase: "+43%",
  },
];

const Row1 = () => {
  const theme = useTheme();

  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      gap={1}
      justifyContent={{ xs: "center", sm: "space-between" }}
    >
      {cards.map(({ icon, title, data, piecolors, subTitle, increase }) => (
        <Paper
          sx={{
            minWidth: "333px",
            p: 1.5,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Stack className="space-y-2">
            <span className={`text-[${theme?.palette?.secondary.main}]`}>
              {icon}
            </span>
            <Typography variant="body2" sx={{ fontsize: "20px" }}>
              {title}
            </Typography>
            <Typography variant="body2" sx={{ fontsize: "10px" }}>
              {subTitle}
            </Typography>
          </Stack>
          <Stack  className="flex flex-col items-center">
            <Box sx={{ height: "90px", width: "90px" }}>
              <ResponsivePie
                data={data}
                margin={{ top: 60, right: 80, bottom: 80, left: 80 }}
                startAngle={-180}
                sortByValue={Math.floor(Math.random() * 2)}
                innerRadius={0.6}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                colors={{ scheme: piecolors }}
                borderColor={{
                  from: "color",
                  modifiers: [["darker", 0.2]],
                }}
                enableArcLinkLabels={false}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor="#333333"
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: "color" }}
                enableArcLabels={false}
                arcLabelsRadiusOffset={0.4}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor={{
                  from: "color",
                  modifiers: [["darker", 2]],
                }}
                defs={[
                  {
                    id: "dots",
                    type: "patternDots",
                    background: "inherit",
                    color: "rgba(255, 255, 255, 0.3)",
                    size: 4,
                    padding: 1,
                    stagger: true,
                  },
                  {
                    id: "lines",
                    type: "patternLines",
                    background: "inherit",
                    color: "rgba(255, 255, 255, 0.3)",
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10,
                  },
                ]}
                legends={[]}
              />
            </Box>
            <Typography variant="body2">{increase}</Typography>
          </Stack>
        </Paper>
      ))}
    </Stack>
  );
};

export default Row1;
