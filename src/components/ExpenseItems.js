import "./ExpenseItem.css";

function ExpenseItems() {
  return (
    <div className="expense-item">
      <div>13 July, 2023</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$13.99</div>
      </div>
    </div>
  );
}

export default ExpenseItems;
