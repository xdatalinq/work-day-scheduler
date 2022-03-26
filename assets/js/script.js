/*
1. display current date/day top of screen under h1
2. create a hourly grid 9-5
3. color-code time blocks, 3 labels past present future
4. click into time block to enter info, need save button
5. save button writes to localStorage
6. data persists refresh/close
7. use touch library for mobile users
*/ 

var m = moment();
$("#currentDay").append(m.format("dddd MMM Mo YYYY"));