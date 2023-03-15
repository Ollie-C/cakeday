import React from "react";
import { PieChart as Pie } from "react-minimal-pie-chart";
//Styles
import "./PieChart.scss";

const PieChart = ({ cakeSizes }) => {
  const data = [
    { title: "Big", value: cakeSizes[0], color: "#db2885" },
    { title: "Small", value: cakeSizes[1], color: "#FFF" },
  ];

  return (
    <Pie
      data={data}
      animate
      animationDuration={500}
      animationEasing="ease-out"
      center={[50, 11]}
      radius={10}
      viewBoxSize={[100, 22]}
    />
  );
};

export default PieChart;
