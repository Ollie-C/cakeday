import React from "react";
//Styles
import "./Table.scss";

const Table = ({ employees }) => {
  if (!employees) {
    return <p>Loading ...</p>;
  }
  return (
    <section className="table-container">
      <table className="table" data-testid="testTable">
        <thead className="table__head">
          <tr>
            <th>NAME</th>
            <th>DOB</th>
            <th>CAKE DAY</th>
            <th>CAKE SIZE</th>
          </tr>
        </thead>
        {employees.length && (
          <tbody className="table__body" data-testid="displayTbody">
            {employees
              .map((employee) => (
                <tr className="table__row" key={employee.id}>
                  <td>{employee.name}</td>
                  <td>{new Date(employee.dob).toDateString().slice(4, 15)}</td>
                  <td>{employee.cakeDay.slice(4, 15)}</td>
                  <td>{employee.cakeSize}</td>
                </tr>
              ))
              .slice(0, 5)}
          </tbody>
        )}
      </table>
      {!employees.length && <p className="table__error">Add an employee!</p>}
    </section>
  );
};

export default Table;
