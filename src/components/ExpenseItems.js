import "./ExpenseItem.css";

function ExpenseItems() {
  const expenseDate = new Date(2023, 10, 3);
  const expensTitle = "Car insurance";
  const expenseAmount = 320;
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expensTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItems;
