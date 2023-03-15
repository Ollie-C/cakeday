import React from "react";
import { PieChart as Pie } from "react-minimal-pie-chart";
//Styles
import "./PieChart.scss";

const PieChart = ({ cakeSizes }) => {
  //Divide # large cakes by 2 as assuming 1 will be shared for a joint birthday, rounded up if more than 2
  const data = [
    {
      title: "Large",
      value: Math.ceil(cakeSizes[0] / 2),
      color: "#27a2c7",
    },
    { title: "Small", value: cakeSizes[1], color: "#db2885" },
  ];

  //If no cake data, render message
  if (cakeSizes[0] === 0 && cakeSizes[1] === 0) {
    return (
      <div className="piechart">
        <h3>CAKE ANALYSIS</h3>
        <p className="piechart__noCake">Short on Cake :(</p>
      </div>
    );
  }

  return (
    <div className="piechart">
      <h3>CAKE ANALYSIS</h3>
      <Pie
        data={data}
        animate
        animationDuration={500}
        animationEasing="ease-out"
        center={[50, 11]}
        radius={10}
        viewBoxSize={[100, 22]}
        background={"#fff"}
      />
      <div className="piechart__text">
        {cakeSizes[0] > 0 && (
          <p className="piechart__largeCake">
            LARGE ( {Math.ceil(cakeSizes[0] / 2)} )
          </p>
        )}
        {cakeSizes[1] > 0 && (
          <p className="piechart__smallCake">SMALL ( {cakeSizes[1]} )</p>
        )}
      </div>
    </div>
  );
};

export default PieChart;
