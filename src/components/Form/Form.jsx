import React, { useState } from "react";
import { v4 } from "uuid";
import DatePicker from "react-datepicker";
//Styles and images
import "./Form.scss";
import "react-datepicker/dist/react-datepicker.css";
import Logo from "../../assets/images/cakedayLogo.png";
//Utils
import {
  calculateCakeDay,
  cakeUpgrade,
  isShared,
  sortEmployees,
} from "../../utils/helpers";
//Seed data
import { mockData } from "../../data/seed";

const Form = ({ employees, setEmployees, year }) => {
  const [newEmployee, setNewEmployee] = useState({ name: "", dob: new Date() });

  const handleSubmit = (e) => {
    e.preventDefault();

    //Reset ALL data
    if (newEmployee.name === "reset") {
      setNewEmployee({ name: "", dob: new Date() });
      setEmployees([]);
      return;
    }

    //Seed with mock data
    if (newEmployee.name === "seed") {
      setNewEmployee({ name: "", dob: new Date() });
      setEmployees(sortEmployees(mockData));
      return;
    }

    //Calculate cakeday
    const cakeDay = calculateCakeDay(year, newEmployee.dob);

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
    console.log(newEmployee.dob);
    //Update state
    setEmployees(sorted);

    // Reset form
    setNewEmployee({ name: "", dob: new Date() });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <img src={Logo} alt="cakeday logo" className="logo" />
      <div className="form__container">
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
            peekNextMonth
            showYearDropdown
            dropdownMode="select"
            dateFormat="yyyy/MM/dd"
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
      </div>
    </form>
  );
};

export default Form;
