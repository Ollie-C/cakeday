//Function to calculate cake day
//Take birthday, find date for this year, calculate cakeday as following working day after birthday day off
export const calculateCakeDay = (dob) => {
  //Format: Wed Mar 15 2023 + time

  //Get this year's birthday
  const birthday = new Date(2023, dob.getMonth(), dob.getDate());
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
