import { useEffect, useState } from "react";
import Chart from "./components/PieChart/PieChart";
import Form from "./components/Form/Form";
import Table from "./components/Table/Table";
import "./styles/Styles.scss";

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [cakeSizes, setCakeSizes] = useState([0, 0]);

  useEffect(() => {
    //On page load, sync state with localstorage
    const savedEmployees = JSON.parse(localStorage.getItem("employees"));
    if (savedEmployees) {
      if (savedEmployees.length > 0) {
        setEmployees(savedEmployees);
      }
    }
  }, []);

  useEffect(() => {
    //Update localstorage upon employees state change
    localStorage.setItem("employees", JSON.stringify(employees));
    console.log(employees);

    if (employees) {
      //Update cake size data
      const bigCakes = employees.filter(
        (employee) => employee.cakeSize === "Large"
      ).length;
      setCakeSizes([bigCakes, employees.length - bigCakes]);
    }
  }, [employees]);

  return (
    <div className="App">
      <main>
        <Form employees={employees} setEmployees={setEmployees} />
        <Table employees={employees} />
        <Chart cakeSizes={cakeSizes} />
      </main>
    </div>
  );
};

export default App;
