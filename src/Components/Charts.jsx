import React from "react";
import { Col, Card } from "react-bootstrap";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";

ChartJS.register(ArcElement, Tooltip);

const TopCoupons = () => {
    const labels = ["Percentage discount", "Fixed card discount", "Fixed product discount"];
    const values = [72, 18, 10];
    const colors = ["#3b82f6", "#93c5fd", "#1d4ed8"];

    const donutData = {
        labels,
        datasets: [
            {
                data: values,
                backgroundColor: colors,
                borderWidth: 2,
                cutout: "75%", // thinner ring
            },
        ],
    };

    // Plugin for center text
    const centerTextPlugin = {
        id: "centerText",
        beforeDraw: (chart) => {
            const { width, height } = chart;
            const ctx = chart.ctx;
            ctx.restore();

            const fontSize = (height / 6).toFixed(2);
            ctx.font = `${fontSize}px sans-serif`;
            ctx.textBaseline = "middle";

            const text = "72%";
            const textX = Math.round((width - ctx.measureText(text).width) / 2);
            const textY = height / 2;

            ctx.fillStyle = "#000";
            ctx.fillText(text, textX, textY);
            ctx.save();
        },
    };

    const options = {
        plugins: {
            legend: { display: false }, // disable default legend
        },
        maintainAspectRatio: false,
    };

    return (
        <Col >
            <Card className="p-3 pb-0 border-0">
                <h6 className="text-start">Top coupons</h6>
                <small className="text-start text-muted">Last 7 days</small>

                <div className="d-flex justify-content-center align-items-center" style={{ height: "220px" }}>
                    <Doughnut data={donutData} options={options} plugins={[centerTextPlugin]} />
                </div>

                {/* Custom Legend */}
                <div className="mt-5">
                    {labels.map((label, i) => (
                        <div key={i} className="d-flex justify-content-between align-items-center mb-1 mt-2">
                            <div className="d-flex align-items-center">
                                <span
                                    style={{
                                        display: "inline-block",
                                        width: "12px",
                                        height: "12px",
                                        borderRadius: "2px",
                                        backgroundColor: colors[i],
                                        marginRight: "8px",
                                    }}
                                ></span>
                                <span className="text-muted ">{label}</span>
                            </div>
                            <span className="fw-semibold ">{values[i]}%</span>
                        </div>
                    ))}
                </div>
            </Card>
        </Col>
    );
};

export default TopCoupons;


const semiDonutData = {
    labels: ["Paying customer", "Non-paying customer"],
    datasets: [
        {
            data: [30, 70],
            backgroundColor: ["#2979ff", "#e3ecfd"],
            borderWidth: 0,
            cutout: "80%"
        }
    ]
};

const semiDonutOptions = {
    circumference: 180,
    rotation: 270,
    plugins: {
        legend: { display: false },
        tooltip: { enabled: false }
    },
    maintainAspectRatio: false
};

const legendDot = (color) => (
    <span
        style={{
            display: "inline-block",
            height: "9px",
            width: "9px",
            borderRadius: "50%",
            background: color,
            marginRight: "7px"
        }}
    />
);

export const PayingVsNonPaying = () => (
    <Col>
        <Card className="px-2 border-0" style={{ minHeight: 310, maxWidth: 500 }}>
            <div className="text-start">
                <p className="fw-semibold fs--1">Paying vs non paying</p>
                <div style={{ color: "#5a5a5a", fontSize: 14 }}>Last 7 days</div>
            </div>
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: 295 }}>
                <div style={{ width: 195, height: 75 }}>
                    <Doughnut data={semiDonutData} options={semiDonutOptions} />
                </div>
            </div>
            <div className="d-flex flex-column mt-0" style={{ fontSize: 14 }}>
                <div className="d-flex justify-content-between align-items-center mb-1">
                    <span>{legendDot("#2979ff")}Paying customer</span>
                    <span className="fw-semibold">30%</span>
                </div>
                <div className="d-flex justify-content-between align-items-center" style={{ color: "#7886a0" }}>
                    <span>{legendDot("#e3ecfd")}Non-paying customer</span>
                    <span className="fw-semibold">70%</span>
                </div>
            </div>
        </Card>
    </Col>
);
