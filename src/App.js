import { useEffect, useState } from "react";
//Components
import Chart from "./components/PieChart/PieChart";
import Form from "./components/Form/Form";
import Table from "./components/Table/Table";
//Styles
import "./styles/Styles.scss";
import { calculateCakeDay } from "./utils/helpers";

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [cakeSizes, setCakeSizes] = useState([0, 0]);
  //Set current year
  const [year, setYear] = useState(new Date().getFullYear());

  //Delete employee
  const deleteEmployee = (id) => {
    const updated = employees.filter((employee) => employee.id !== id);
    setEmployees(updated);
  };

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

    if (employees) {
      //Update cake size data
      const bigCakes = employees.filter(
        (employee) => employee.cakeSize === "Large"
      ).length;
      setCakeSizes([bigCakes, employees.length - bigCakes]);
    }
    console.log(employees);
  }, [employees]);

  return (
    <div className="App">
      <main>
        <Form employees={employees} year={year} setEmployees={setEmployees} />
        <Table
          employees={employees}
          year={year}
          deleteEmployee={deleteEmployee}
        />
        <Chart cakeSizes={cakeSizes} />
      </main>
    </div>
  );
};

export default App;
