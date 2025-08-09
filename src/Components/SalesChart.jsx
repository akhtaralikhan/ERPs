import React from "react";
import ReactECharts from "echarts-for-react";

const SalesChart = ({ chartLabel = [], linesData = [] }) => {
  const lineNames = ["Profits", "Incomes", "Expenses"];
  const lineColors = ["#3874ff", "#0097eb", "#f39c12"];

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
      data: lineNames.slice(0, linesData.length),
    },
    xAxis: {
      type: "category",
      data: chartLabel,
    },
    yAxis: {
      type: "value",
    },
    series: linesData.map((data, i) => ({
      name: lineNames[i] || `Line ${i + 1}`,
      type: "line",
      data,
      itemStyle: {
        color: lineColors[i] || "#888888",
      },
    })),
  };

  return (
    <div className="echart-total-sales-chart" style={{ minHeight: 320, width: "100%" }}>
      <ReactECharts option={options} style={{ height: 320, width: "100%" }} />
    </div>
  );
};

export default SalesChart;
