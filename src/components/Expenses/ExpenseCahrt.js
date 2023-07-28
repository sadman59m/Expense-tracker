import React from "react";

import Chart from "../Charts/Chart";

const ExpenseChart = (props) => {
  const expenseDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  for (let expense of props.expenses) {
    const dataPointMonth = expense.date.getMonth(); //returns the index of month ex: jan => 0
    expenseDataPoints[dataPointMonth].value += expense.amount;
  }
  return <Chart dataPoints={expenseDataPoints} />;
};

export default ExpenseChart;
