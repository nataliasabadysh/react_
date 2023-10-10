import * as React from "react";
import Grid from "@mui/system/Unstable_Grid";
import Box from "@mui/system/Box";
import CircularProgressBar from "./circularProgress";
import { Item, ItemBar } from "../styles";

const charts = [
  {
    name: "Lessons completed",
    icon: "c",
    buttonName: "go to lessons",
    bar: <CircularProgressBar value={78} />,
  },
  {
    name: "Assignments",
    icon: "c",
    buttonName: "go to assignments",
    bar: <CircularProgressBar value={60} />,
  },
  {
    name: "Attended sessions",
    icon: "c",
    buttonName: "go to calendar",
    bar: <CircularProgressBar value={10} />,
  },
];

export default function ChartItem() {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {charts.map((item: any) => {
          return (
            <Grid lg={4} xs={12} key={item.name}>
              <Item>
                <div>{item.name}</div>
                <ItemBar>{item.bar}</ItemBar>
              </Item>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
