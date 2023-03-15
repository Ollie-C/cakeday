import { useEffect, useState } from "react";
import Form from "./components/Form/Form";
import Table from "./components/Table/Table";
import "./styles/Styles.scss";

const App = () => {
  const [employees, setEmployees] = useState([]);

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
  }, [employees]);

  return (
    <div className="App">
      <header>
        <h1>It's Cake Day</h1>
      </header>
      <main>
        <Form employees={employees} setEmployees={setEmployees} />
        <Table employees={employees} />
      </main>
    </div>
  );
};

export default App;
