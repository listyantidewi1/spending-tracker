import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 297.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 89.987,
      date: new Date(2021, 5, 14),
    },
    {
      id: "e3",
      title: "Toilet Paper",
      amount: 7.12,
      date: new Date(2021, 10, 4),
    },
    {
      id: "e4",
      title: "New Desk",
      amount: 701.61,
      date: new Date(2021, 8, 3),
    },
  ];

  return (
    <div>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
