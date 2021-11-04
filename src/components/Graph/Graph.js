import * as React from "react";
import Paper from "@material-ui/core/Paper";
import "./graph.css";
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  Title,
  Legend,
} from "@devexpress/dx-react-chart-material-ui";
import { withStyles } from "@material-ui/core/styles";
import { Stack, Animation } from "@devexpress/dx-react-chart";

import { olimpicMedals as data } from "./graph_data";

const legendStyles = () => ({
  root: {
    display: "flex",
    margin: "auto",
    flexDirection: "row",
  },
});
const legendRootBase = ({ classes, ...restProps }) => (
  <Legend.Root {...restProps} className={classes.root} />
);
const Root = withStyles(legendStyles, { name: "LegendRoot" })(legendRootBase);
const legendLabelStyles = () => ({
  label: {
    whiteSpace: "nowrap",
  },
});
const legendLabelBase = ({ classes, ...restProps }) => (
  <Legend.Label className={classes.label} {...restProps} />
);
const Label = withStyles(legendLabelStyles, { name: "LegendLabel" })(
  legendLabelBase
);

export default class Graph extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Paper className="graph_container">
        <Chart className="bar_graph_container" data={chartData}>
          <ArgumentAxis />
          <ValueAxis />

          <BarSeries
            name="2020"
            valueField="gold"
            argumentField="country"
            color="#1665D8"
          />
          <BarSeries
            name="2021"
            valueField="silver"
            argumentField="country"
            color="#EDF0F2"
          />

          <Animation />
          <Legend
            position="bottom"
            rootComponent={Root}
            labelComponent={Label}
          />
          <Title text="Users by device" />
          <Stack />
        </Chart>
      </Paper>
    );
  }
}
