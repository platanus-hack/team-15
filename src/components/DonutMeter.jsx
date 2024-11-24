/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";


const SpeedMeter = ({
  segments = [
    { id: 0, value: 10, label: "A" },
    { id: 1, value: 15, label: " B" },
    { id: 2, value: 20, label: " C" },
  ],
  size = 300,
  setDataSelected,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: size, // Define the width of the parent container
        height: size, // Match height with width for a square container
      }}
    >
      <PieChart
        series={[
          {
            data: segments,
            innerRadius: 50,
            outerRadius: 100,
            paddingAngle: 5,
            cornerRadius: 5,
            startAngle: -145,
            endAngle: 225,
            cx: size / 2,
            cy: size / 2,
            highlightScope: { fade: 'global', highlight: 'item' },
            faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
          },
        ]}
        onHighlightChange={(highlight) => setDataSelected(highlight?.dataIndex)}
        width={size}
        height={size}
      />
    </Box>
  );
};

export default SpeedMeter;
