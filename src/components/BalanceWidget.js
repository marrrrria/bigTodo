import React from "react";

function getYearDays(year) {
  let days = 365;

  if (!(year % 4)) {
    if (!(year % 100)) {
      if (!(year % 400)) {
        days = 366;
      } else { days = 365 }
    } days = 366;
  }
  return days;
}

function BalanceWidget() {
  let date = new Date();
  let yearDays = getYearDays(date.getFullYear());

  let month = date.getMonth()+1;
  let monthDays;
  switch(month) {
    case 2: {
      monthDays = 28; 
      break;
    }
    case 1,3,5,7,8,10,12: {
      monthDays = 31;
      break;
    }
    default: {
      monthDays = 30; 
      break
    }
  }

  console.log(date.getDate())
  console.log(monthDays)
  
  console.log(yearDays)

}

export default BalanceWidget