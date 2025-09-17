import React from 'react';
import ReactEcharts from 'echarts-for-react';

function SalesChart() {
  const chartLabel = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const lineColors = ["#3874ff", "#0097eb", "#f39c12"];
  const lineData = [
    [120, 132, 101, 134, 90, 230],  
    [220, 182, 191, 234, 290, 330], 
    [150, 232, 201, 154, 190, 330] 
  ];
  const lineNames = ["Profit","Income","Expense"];

  const options = {
    tooltip : {
      trigger: "axis",
      backgroundColor: "#EFF2F6",
      borderColor: "#CBD0DD",
      borderWidth: 1,
      textStyle: {
        color: "#141824",
        fontSize: 14,
        fontFamily: "Microsoft YaHei",
      }
    },
    legend: {
      data : lineNames.slice(0,lineNames.length),
    },
    xAxis:{
      type:"category",
      data:chartLabel,
    },
    yAxis:{
      type:"value"
    },
    series:lineData.map((data,i)=>({
      name:lineNames[i] || `Line ${i+1}`,
      type:"line",
      data,
      itemStyle:{
        color:lineColors[i] || "#888888",
      },
    }))
  }
  return (
    <div style={{minHeight:"320px",width:"100%"}}>
      <ReactEcharts option={options} height={400}/>
    </div>
  )
}

export default SalesChart
