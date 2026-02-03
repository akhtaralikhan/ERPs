import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

function InvoiceAnalyticsChart() {
    const data = {
        labels: ['Paid', 'Pending', 'Overdue', 'Cancelled'],
        datasets: [
            {
                label: 'Invoices',
                data: [40, 25, 15, 20],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(201, 203, 207, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 255, 255, 1)',
                    'rgba(255, 255, 255, 1)',
                    'rgba(255, 255, 255, 1)',
                    'rgba(255, 255, 255, 1)'
                ],
                borderWidth: 2,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'right',
            },
            tooltip: {
                enabled: true,
            },
        },
        cutout: '40%',
    };

    return (
        <div style={{ height: 400 }} className='d-flex justify-content-center align-items-center' >
            <Pie data={data} options={options} style={{ height: '100%' }} />
        </div>
    );
}

export default InvoiceAnalyticsChart;
