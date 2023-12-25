$(document).ready(function(){let t=document.getElementById("salesPurchasesChart");$.get("/sales-purchases/chart-data",function(a){new Chart(t,{type:"bar",data:{labels:a.sales.original.days,datasets:[{label:"Ventas",data:a.sales.original.data,backgroundColor:["#6366F1"],borderColor:["#6366F1"],borderWidth:1},{label:"Compras",data:a.purchases.original.data,backgroundColor:["#A5B4FC"],borderColor:["#A5B4FC"],borderWidth:1}]},options:{scales:{y:{beginAtZero:!0}}}})});let e=document.getElementById("currentMonthChart");$.get("/current-month/chart-data",function(a){new Chart(e,{type:"doughnut",data:{labels:["Ventas","Compras"],datasets:[{data:[a.sales,a.purchases,a.expenses],backgroundColor:["#F59E0B","#0284C7","#EF4444"],hoverBackgroundColor:["#F59E0B","#0284C7","#EF4444"]}]}})});let r=document.getElementById("paymentChart");$.get("/payment-flow/chart-data",function(a){new Chart(r,{type:"line",data:{labels:a.months,datasets:[{label:"Dinero Invertido",data:a.payment_sent,fill:!1,borderColor:"#EA580C",tension:0},{label:"Dinero Recibido",data:a.payment_received,fill:!1,borderColor:"#2563EB",tension:0}]}})})});
