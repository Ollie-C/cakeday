import React, { useEffect, useState } from "react";
//Components
import Navigation from "../Pagination/Pagination";
//Styles
import "./Table.scss";
//Utils
import { displayFiveEmployees } from "../../utils/helpers";

const Table = ({ employees, deleteEmployee }) => {
  const [filtered, setFiltered] = useState([]);
  //Filter mode state
  const [activeFilter, setActiveFilter] = useState(false);

  //Pagination
  const [page, setPage] = useState(1);
  const displayedEmployees = displayFiveEmployees(filtered, page);
  const totalPages = Math.ceil(filtered.length / 5);

  //Filter employees to show employees with same cake day
  const filterEmployees = ({ innerHTML }) => {
    const filteredByCakeDay = employees.filter(
      (employee) => employee.cakeDay.slice(4, 15) === innerHTML
    );
    setFiltered(filteredByCakeDay);
    setActiveFilter(true);
    setPage(1);
  };

  //Reset all filters
  const resetFiltered = () => {
    setFiltered(employees);
    setActiveFilter(false);
  };

  useEffect(() => {
    if (employees) {
      setFiltered(employees);
    }
  }, [employees]);

  //Check for data
  if (!employees) {
    return <p>Loading ...</p>;
  }
  return (
    <section className="table-container">
      {activeFilter && (
        <button onClick={resetFiltered} className="table__reset">
          X RESET
        </button>
      )}
      <table className="table" data-testid="testTable">
        <thead className="table__head">
          <tr>
            <th className="table__name">NAME</th>
            <th className="table__hide">DOB</th>
            <th className="table__cakeday">CAKE DAY</th>
            <th className="table__size">SIZE</th>
          </tr>
        </thead>

        {displayedEmployees.length > 0 && (
          <tbody className="table__body" data-testid="displayTbody">
            {displayedEmployees
              .map((employee) => (
                <tr className="table__row" key={employee.id}>
                  <td className="table__name">{employee.name.slice(0, 14)}</td>
                  <td className="table__hide">
                    {new Date(employee.dob).toDateString().slice(4, 15)}
                  </td>
                  {employee.cakeSize === "Large" ? (
                    <td
                      className="table__cakeday table__cakeday--active"
                      onClick={(e) => filterEmployees(e.target)}
                    >
                      {employee.cakeDay.slice(4, 15)}
                    </td>
                  ) : (
                    <td className="table__cakeday">
                      {employee.cakeDay.slice(4, 15)}
                    </td>
                  )}
                  <td className="table__size">{employee.cakeSize[0]}</td>
                  <td
                    className="table__delete"
                    style={{ fontSize: "12px" }}
                    onClick={() => deleteEmployee(employee.id)}
                  >
                    X
                  </td>
                </tr>
              ))
              .slice(0, 5)}
          </tbody>
        )}
      </table>
      {!filtered.length && <p className="table__nodata">Add an employee! </p>}
      {employees.length > 5 && (
        <Navigation page={page} totalPages={totalPages} setPage={setPage} />
      )}
    </section>
  );
};

export default Table;
