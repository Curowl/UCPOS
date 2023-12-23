$(document).ready(function () {
    let salesPurchasesChart;
    let currentMonthChart;
    let cashflowChart;

    function destroyChart(chartInstance) {
        if (chartInstance) {
            chartInstance.destroy();
        }
    }

    function initializeChart(canvasId, chartType, chartData) {
        const canvas = document.getElementById(canvasId);
        destroyChart(window[canvasId]);

        return new Chart(canvas, {
            type: chartType,
            data: chartData,
            options: {
                // Puedes agregar opciones específicas del gráfico aquí
            }
        });
    }

    $.get('/sales-purchases/chart-data', function (response) {
        salesPurchasesChart = initializeChart('salesPurchasesChart', 'bar', {
            labels: response.sales.original.days,
            datasets: [
                {
                    label: 'Sales',
                    data: response.sales.original.data,
                    backgroundColor: ['#6366F1'],
                    borderColor: ['#6366F1'],
                    borderWidth: 1
                },
                {
                    label: 'Purchases',
                    data: response.purchases.original.data,
                    backgroundColor: ['#A5B4FC'],
                    borderColor: ['#A5B4FC'],
                    borderWidth: 1
                }
            ]
        });
    });

    $.get('/current-month/chart-data', function (response) {
        currentMonthChart = initializeChart('currentMonthChart', 'doughnut', {
            labels: ['Sales', 'Purchases', 'Expenses'],
            datasets: [{
                data: [response.sales, response.purchases, response.expenses],
                backgroundColor: ['#F59E0B', '#0284C7', '#EF4444'],
                hoverBackgroundColor: ['#F59E0B', '#0284C7', '#EF4444'],
            }]
        });
    });

    $.get('/payment-flow/chart-data', function (response) {
        cashflowChart = initializeChart('paymentChart', 'line', {
            labels: response.months,
            datasets: [
                {
                    label: 'Payment Sent',
                    data: response.payment_sent,
                    fill: false,
                    borderColor: '#EA580C',
                    tension: 0
                },
                {
                    label: 'Payment Received',
                    data: response.payment_received,
                    fill: false,
                    borderColor: '#2563EB',
                    tension: 0
                },
            ]
        });
    });
});
