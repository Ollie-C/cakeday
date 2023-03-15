import React from "react";
import { PieChart as Pie } from "react-minimal-pie-chart";
//Styles
import "./PieChart.scss";

const PieChart = ({ cakeSizes }) => {
  //Divide # large cakes by 2 as assuming 1 will be shared for a joint birthday, rounded up if more than 2
  const data = [
    { title: "Big", value: Math.ceil(cakeSizes[0] / 2), color: "#db2885" },
    { title: "Small", value: cakeSizes[1], color: "#FFF" },
  ];

  //If no cake data, render message
  if (cakeSizes[0] === 0 && cakeSizes[1] === 0) {
    return (
      <div className="piechart">
        <p className="piechart__noCake">Short on Cake :(</p>
      </div>
    );
  }

  return (
    <div className="piechart">
      {cakeSizes[0] > 0 && (
        <p className="piechart__largeCake">
          Big Cakes ( {Math.ceil(cakeSizes[0] / 2)} )
        </p>
      )}
      <Pie
        data={data}
        animate
        animationDuration={500}
        animationEasing="ease-out"
        center={[45, 10]}
        radius={8}
        viewBoxSize={[90, 20]}
      />
      {cakeSizes[1] > 0 && (
        <p className="piechart__smallCake">Small Cakes ( {cakeSizes[1]} )</p>
      )}
    </div>
  );
};

export default PieChart;
