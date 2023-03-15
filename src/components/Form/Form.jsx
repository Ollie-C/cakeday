import React, { useState } from "react";
import "./Form.scss";
import { calculateCakeDay, cakeUpgrade, isShared } from "../../utils/helpers";
import { v4 } from "uuid";

const Form = ({ employees, setEmployees }) => {
  const [newEmployee, setNewEmployee] = useState({ name: "", dob: "" });

  //Update newEmployee.name and .dob on user input
  const handleChange = ({ target }) => {
    let { name, value } = target;
    setNewEmployee({ ...newEmployee, [name]: value });
  };

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

    //Reset
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
          onChange={(e) => handleChange(e)}
        />
        <input
          type="date"
          name="dob"
          value={newEmployee.dob}
          onChange={(e) => handleChange(e)}
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
