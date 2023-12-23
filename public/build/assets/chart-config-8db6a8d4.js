$(document).ready(function(){function e(a){a&&a.destroy()}function t(a,r,o){const l=document.getElementById(a);return e(window[a]),new Chart(l,{type:r,data:o,options:{}})}$.get("/sales-purchases/chart-data",function(a){t("salesPurchasesChart","bar",{labels:a.sales.original.days,datasets:[{label:"Sales",data:a.sales.original.data,backgroundColor:["#6366F1"],borderColor:["#6366F1"],borderWidth:1},{label:"Purchases",data:a.purchases.original.data,backgroundColor:["#A5B4FC"],borderColor:["#A5B4FC"],borderWidth:1}]})}),$.get("/current-month/chart-data",function(a){t("currentMonthChart","doughnut",{labels:["Sales","Purchases","Expenses"],datasets:[{data:[a.sales,a.purchases,a.expenses],backgroundColor:["#F59E0B","#0284C7","#EF4444"],hoverBackgroundColor:["#F59E0B","#0284C7","#EF4444"]}]})}),$.get("/payment-flow/chart-data",function(a){t("paymentChart","line",{labels:a.months,datasets:[{label:"Payment Sent",data:a.payment_sent,fill:!1,borderColor:"#EA580C",tension:0},{label:"Payment Received",data:a.payment_received,fill:!1,borderColor:"#2563EB",tension:0}]})})});
