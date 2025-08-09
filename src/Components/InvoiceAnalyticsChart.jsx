import React from "react";
import ReactECharts from "echarts-for-react";

const InvoiceAnalyticsChart = ({ data = [] }) => {
    const options = {
        tooltip: {
            trigger: "item",
        },
        legend: {
            orient: "vertical",
            right: 10,
            top: "center",
        },
        series: [
            {
                name: "Invoices",
                type: "pie",
                radius: "60%",
                data: data.map(item => ({
                    value: item.value,
                    name: item.name,
                })),
                label: {
                    formatter: "{b}", // show only name
                },
                itemStyle: {
                    borderRadius: 5,
                    borderColor: "#fff",
                    borderWidth: 2,
                },
            },
        ],
    };

    return (
        <div style={{ height: 400 }}>
            <ReactECharts option={options} style={{ height: "100%" }} />
        </div>
    );
};

export default InvoiceAnalyticsChart;
