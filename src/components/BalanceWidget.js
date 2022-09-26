import React from "react";
import ProgressBar from "./ProgressBar";

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

function getMonthDays(month, yearDays) {
  switch(month) {
    case 2: {
      if (yearDays === 365){
        return 28; 
      } else { return 29 }
    }
    case 1,3,5,7,8,10,12: {
      return 31;
    }
    default: {
      return 30; 
    }
  }
}

function getPercentOfYear(date, yearDays) {
  let nowDate = new Date()
  let startYear = new Date(date.getFullYear(), 0, 1)
  let different = nowDate-startYear;
  let currentDays = Math.round(different/1000/3600/24)
  let percentOfYear = Math.floor((currentDays * 100)/yearDays)
  return percentOfYear;
}

function BalanceWidget() {
  let date = new Date();
  let yearDays = getYearDays(date.getFullYear());
  let monthDays = getMonthDays(date.getMonth()+1);
  let dayOfMonth = date.getDate()
  let weekDay = date.getDay() || 7 //! 0 - Sunday !!!
  let time = date.getHours();

  let percentsOfYear = getPercentOfYear(date, yearDays);
  let percentsOfMonth = Math.floor(dayOfMonth*100/monthDays);
  let percentsOfWeek = Math.floor(weekDay*100/7)
  let percentsOfDay = Math.floor(time * 100 / 24)

  let widgetData = [
    {
      bgcolor: "#00695c",
      completed: percentsOfYear,
      title: `Year`
    },
    {
      bgcolor: "#00695c",
      completed: percentsOfMonth,
      title: "Month"
    },
    {
      bgcolor: "#00695c",
      completed: percentsOfWeek,
      title: "Week"
    },
    {
      bgcolor: "#00695c",
      completed: percentsOfDay,
      title: "Day"
    },
  ];

  return (
    <div className="balance-widget">
      {widgetData.map((item, i) => <ProgressBar key={i} bgcolor={item.bgcolor} completed={item.completed} title={item.title}/>)}
    </div>
  )

}

export default BalanceWidget