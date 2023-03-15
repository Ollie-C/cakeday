import React, { useState } from "react";
//Styles
import "./Form.scss";
import "react-datepicker/dist/react-datepicker.css";
//Utils
import { calculateCakeDay, cakeUpgrade, isShared } from "../../utils/helpers";
//Packages
import { v4 } from "uuid";
import DatePicker from "react-datepicker";

const Form = ({ employees, setEmployees }) => {
  const [newEmployee, setNewEmployee] = useState({ name: "", dob: "" });

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

    //Update state
    setEmployees([employee, ...updatedEmployees]);

    // Reset;
    setNewEmployee({ name: "", dob: "" });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Employee Details Form</h2>
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
          selected={new Date()}
          onChange={(e) => setNewEmployee({ ...newEmployee, dob: e })}
        />
        <button
          className="form__cta"
          type="submit"
          disabled={!newEmployee.name || !newEmployee.dob}
        >
          SUBMIT
        </button>
      </div>
    </form>
  );
};

export default Form;
