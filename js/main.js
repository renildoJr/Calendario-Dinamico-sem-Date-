'use strict';

// const calendar = 2026;
const year = 2026;
const byFour = parseInt((year - 1) / 4);
const byHund = parseInt((year - 1) / 100);
const byFourHund = parseInt((year - 1) / 400);
const calc = year + byFour - byHund + byFourHund;

let currentWeek = calc % 7;

const months = [
    {
        month: "january",
        firstDay: 0,
        totalDays: 31
    },
    {
        month: "february",
        firstDay: 0,
        totalDays: isLeapYear(year) ? 29 : 28
    },
    {
        month: "march",
        firstDay: 0,
        totalDays: 31
    },
    {
        month: "april",
        firstDay: 0,
        totalDays: 30
    },
    {
        month: "may",
        firstDay: 0,
        totalDays: 31
    },
    {
        month: "june",
        firstDay: 0,
        totalDays: 30
    },
    {
        month: "july",
        firstDay: 0,
        totalDays: 31
    },
    {
        month: "august",
        firstDay: 0,
        totalDays: 31
    },
    {
        month: "september",
        firstDay: 0,
        totalDays: 30
    },
    {
        month: "october",
        firstDay: 0,
        totalDays: 31
    },
    {
        month: "november",
        firstDay: 0,
        totalDays: 30
    },
    {
        month: "december",
        firstDay: 0,
        totalDays: 31
    }
]

// Acrescenta os primeiros dias de cada mês á array months. 
for(let i = 0; i < months.length; i++) {
    const month = months[i];
    month.firstDay = currentWeek;
    for(let j = 1; j <= month.totalDays; j ++) {
        if(currentWeek === 7) {
            currentWeek = 0;
        }
        currentWeek ++;
    }
}
       
const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function isLeapYear(year) {
    return year % 4 === 0 && year % 100 !== 0 || year % 400 == 0;
}

function renderCalendarHtml() {
    const calendarHtml = document.querySelector(".calendar");

    months.forEach(month => {
        const monthHtml = document.createElement("div");
        monthHtml.setAttribute("class", "month");

        const monthTitleHtml = document.createElement("h3");
        monthTitleHtml.setAttribute("class", "month-title");
        monthTitleHtml.textContent = month.month;

        const monthDaysHtml = document.createElement("div");
        monthDaysHtml.setAttribute("class", "month-days");

        for(let i = 0, date = 1; i <= 48; i ++) {
            if(i < 7) {
                monthDaysHtml.innerHTML += `<div class="day week">${weekDays[i]}</div>`;
            }else if(i - 6 > month.firstDay && date <= month.totalDays) {
                monthDaysHtml.innerHTML += `<div class="day">${date}</div>`;
                date ++;
            }else {
                monthDaysHtml.innerHTML += `<div class="day"></div>`;
            }
        }

        calendarHtml.appendChild(monthHtml);
        monthHtml.appendChild(monthTitleHtml)
        monthHtml.appendChild(monthDaysHtml)
    });
}

renderCalendarHtml();
