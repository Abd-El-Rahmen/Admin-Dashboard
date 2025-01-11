import { ResponsivePie } from "@nivo/pie";
import { useTheme } from "@mui/material/styles";
import pieData from "../../utils/data/PieData";

const Pie = ({ isDashboard }) => {
  const theme = useTheme();

  const nivoTheme = {
    tooltip: {
      container: {
        background: theme.palette.background.paper,
        color: theme.palette.text.primary,
      },
    },
  };

  return (
    <ResponsivePie
    enableArcLinkLabels={!isDashboard}
    enableArcLabels={!isDashboard}
      data={pieData}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={isDashboard ? 0.7 : 0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor={theme.palette.primary.main}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
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
      fill={[
        { match: { id: "AD" }, id: "dots" },
        { match: { id: "AE" }, id: "dots" },
        { match: { id: "AF" }, id: "dots" },
        { match: { id: "AG" }, id: "lines" },
        { match: { id: "AI" }, id: "lines" },
        { match: { id: "AL" }, id: "lines" },
        { match: { id: "AM" }, id: "lines" },
      ]}
      legends={
        !isDashboard && [
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: theme.palette.primary.main,
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                },
              },
            ],
          },
        ]
      }
      theme={nivoTheme}
    />
  );
};

export default Pie;
