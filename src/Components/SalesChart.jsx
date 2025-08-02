// SalesChart.jsx
import React from "react";
import ReactECharts from "echarts-for-react";

const SalesChart = () => {
  const options = {
    tooltip: {
      trigger: "axis",
      backgroundColor: "#EFF2F6",
      borderColor: "#CBD0DD",
      borderWidth: 1,
      textStyle: {
        color: "#141824",
        fontSize: 14,
        fontFamily: "Microsoft YaHei",
      },
    },
    legend: {
      data: ["May 30", "Apr 30"],
    },
    xAxis: {
      type: "category",
      data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "May 30",
        type: "line",
        data: [120, 200, 150, 80, 300, 220],
        itemStyle: {
          color: "#3874ff",
        },
      },
      {
        name: "Apr 30",
        type: "line",
        data: [100, 180, 130, 160, 550, 200],
        itemStyle: {
          color: "#0097eb",
        },
      },
    ],
  };

  return (
    <div className="echart-total-sales-chart" style={{ minHeight: 320, width: "100%" }}>
      <ReactECharts option={options} style={{ height: 320, width: "100%" }} />
    </div>
  );
};

export default SalesChart;
