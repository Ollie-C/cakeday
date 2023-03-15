import React, { useState } from "react";
//Styles
import "./Form.scss";
import "react-datepicker/dist/react-datepicker.css";
//Utils
import {
  calculateCakeDay,
  cakeUpgrade,
  isShared,
  sortEmployees,
} from "../../utils/helpers";
//Packages
import { v4 } from "uuid";
import DatePicker from "react-datepicker";

const Form = ({ employees, setEmployees }) => {
  const [newEmployee, setNewEmployee] = useState({ name: "", dob: new Date() });

  const handleSubmit = (e) => {
    e.preventDefault();

    //Calculate cakeday
    const cakeDay = calculateCakeDay(newEmployee.dob);

    //Add new fields to new employee object
    const employee = {
      ...newEmployee,
      id: v4(),
      cakeDay: cakeDay,
      //Check if cakeday already exists and update cakeSize for new employee
      cakeSize: isShared(cakeDay, employees) ? "Large" : "Small",
    };

    //Update cakeSize for current employee
    const updatedEmployees = cakeUpgrade(cakeDay, employees);

    //Sort in ascending order
    const sorted = sortEmployees([employee, ...updatedEmployees]);

    //Update state
    setEmployees(sorted);

    // Reset;
    setNewEmployee({ name: "", dob: new Date() });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h4>EMPLOYEE DETAILS FORM</h4>
      <div className="form__fields">
        <input
          type="text"
          name="name"
          value={newEmployee.name}
          placeholder="Employee name"
          onChange={(e) =>
            setNewEmployee({ ...newEmployee, name: e.target.value })
          }
        />
        <DatePicker
          selected={newEmployee.dob}
          onSelect={(e) => setNewEmployee({ ...newEmployee, dob: e })}
        />
        <button
          className="form__cta"
          type="submit"
          disabled={!newEmployee.name}
        >
          SUBMIT
        </button>
      </div>
    </form>
  );
};

export default Form;
