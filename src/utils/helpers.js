//Function to calculate cake day -Take birthday, find date for this year, calculate cakeday as following working day after birthday day off
export const calculateCakeDay = (year, dob) => {
  //Format: Wed Mar 15 2023 (date object)

  //Get this year's birthday
  const birthday = new Date(year, dob.getMonth(), dob.getDate());
  //Get day of the week
  const birthdayDay = birthday.getDay();

  //# of days until cakeday set at 1 for Mon-Thu
  let addedDays = 1;

  //IF Friday or Saturday, add 2 extra days
  if (birthdayDay === 5 || birthdayDay === 6) {
    addedDays += 2;
  }

  //IF Sunday, add 1 extra day
  if (!birthdayDay) {
    addedDays += 1;
  }

  //Add days and then format
  birthday.setDate(birthday.getDate() + addedDays);

  //Return as string
  return birthday.toDateString();
};

//Check if new employees cake day matches the cake day of any current employees. Return boolean
export const isShared = (cakeDay, employees) => {
  const hasSharedCakeDay = employees.filter(
    (employee) => employee.cakeDay === cakeDay
  );
  return hasSharedCakeDay.length > 0;
};

//Update all employees cake size who have the same cake day as new employee
export const cakeUpgrade = (cakeDay, employees) => {
  return employees.map((employee) =>
    employee.cakeDay === cakeDay ? { ...employee, cakeSize: "Large" } : employee
  );
};

//Sort employees by cakeday (ascending)
export const sortEmployees = (employees) => {
  return employees.sort((a, b) => new Date(a.cakeDay) - new Date(b.cakeDay));
};

//Get 5 employees for pagination
export const displayFiveEmployees = (employees, currentPage) => {
  const lastEmployeeIndex = currentPage * 5;
  const firstEmployeeIndex = lastEmployeeIndex - 5;

  if (employees.length) {
    return employees.slice(firstEmployeeIndex, lastEmployeeIndex);
  }

  return employees;
};
