import React, { useEffect, useState } from "react";
//Styles
import "./Table.scss";

const Table = ({ employees }) => {
  const [filtered, setFiltered] = useState([]);
  const [activeFilter, setActiveFilter] = useState(false);

  const filterEmployees = ({ innerHTML }) => {
    const filteredByCakeDay = employees.filter(
      (employee) => employee.cakeDay.slice(4, 15) === innerHTML
    );
    setFiltered(filteredByCakeDay);
    setActiveFilter(true);
  };

  const resetFiltered = () => {
    setFiltered(employees);
    setActiveFilter(false);
  };

  useEffect(() => {
    if (employees) {
      setFiltered(employees);
    }
  }, [employees]);
  if (!employees) {
    return <p>Loading ...</p>;
  }
  return (
    <section className="table-container">
      <table className="table" data-testid="testTable">
        {activeFilter && (
          <button onClick={resetFiltered} className="table__reset">
            X RESET
          </button>
        )}
        <thead className="table__head">
          <tr>
            <th>NAME</th>
            <th>DOB</th>
            <th>CAKE DAY</th>
            <th>CAKE SIZE</th>
          </tr>
        </thead>
        {filtered.length && (
          <tbody className="table__body" data-testid="displayTbody">
            {filtered
              .map((employee) => (
                <tr className="table__row" key={employee.id}>
                  <td>{employee.name.slice(0, 20)}</td>
                  <td>{new Date(employee.dob).toDateString().slice(4, 15)}</td>
                  {employee.cakeSize === "Large" ? (
                    <td
                      className="table__row--active"
                      onClick={(e) => filterEmployees(e.target)}
                    >
                      {employee.cakeDay.slice(4, 15)}
                    </td>
                  ) : (
                    <td>{employee.cakeDay.slice(4, 15)}</td>
                  )}
                  <td>{employee.cakeSize}</td>
                </tr>
              ))
              .slice(0, 5)}
          </tbody>
        )}
      </table>
      {!filtered.length && <p className="table__error">Add an employee!</p>}
    </section>
  );
};

export default Table;
