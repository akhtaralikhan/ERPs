import React from 'react'
import ReactEcharts from 'echarts-for-react'

function InvoiceAnalyticsChart() {
   
    const  data = [
        { name: "Paid", value: 40 },
        { name: "Pending", value: 25 },
        { name: "Overdue", value: 15 },
        { name: "Cancelled", value: 20 },
    ] 
    const options = {
        tooltip:{
            trigger:"item",
        },
        legend:{
            orient:"vertical",
            top:"center",
            right:"10"
        },
        series:[
            {
                name:"invoices",
                type:"pie",
                radius:"60%",
                data:data.map((item)=>({
                    value:item.value,
                    name:item.name,
                })),
                label:{
                    formatter: "{b}",
                },
                itemStyle: {
                    borderRadius: 5,
                    borderColor:"#fff",
                    borderWidth:2,
                },
            },
        ],

    }
  return (
    <div style={{height:400}}>
      <ReactEcharts option={options} style={{height:"100%"}}/>
    </div>
  )
}

export default InvoiceAnalyticsChart
