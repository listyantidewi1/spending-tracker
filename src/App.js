import Expenses from "./components/Expenses/Expenses";

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
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
