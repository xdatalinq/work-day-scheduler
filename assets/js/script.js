/*
1. 
2. 
3. color-code time blocks, 3 labels past present future
4. click into time block to enter info, need save button
5. save button writes to localStorage
6. data persists refresh/close
7. use touch library for mobile users
*/ 
// Variables
var tasks = {};
var timeslots = ["9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM"];
var m = moment();

// Append time to header using moment.js
$("#currentDay").append(m.format("dddd MMM Mo YYYY"));

// Event listeners

// Functions

// Load tasks
var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    if (!tasks) {
      tasks = {};
    }
    console.log("Tasks loaded!");
};

// Save tasks
var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log("Tasks saved!");
  };

// Create elements for each timeslot
timeslots.forEach(function(value, index) {
    var rowContainer = $('<div class="row mb-1" id=' + value + '></div>'),
        timeBlock = $('<div class="d-flex justify-content-center align-items-center col-12 col-lg-2 bg-secondary time-block"></div>'),
        timeBlockContent = $('<h2 class="py-0 my-0">' + value + '</h2>'),
        textInput = $('<div class="d-flex align-items-center col-9 col-lg-9 align-self-center textInput"></div>'),
        textInputContent = $('<p class="my-auto h-75 w-100 pt-3"></p>');
        saveButton = $('<button class="col-3 col-lg-1 btn btn-secondary saveButton d-flex justify-content-center align-items-center"></button>'),
        saveButtonContent = $('<i class="fa-solid fa-floppy-disk"></i>');
        $(".saveButton").on("click", saveTasks);

    rowContainer.appendTo(".container");
    timeBlock.appendTo(rowContainer);
    timeBlockContent.appendTo(timeBlock);
    textInput.appendTo(rowContainer);
    textInputContent.appendTo(textInput);
    saveButton.appendTo(rowContainer);
    saveButtonContent.appendTo(saveButton);
});























  /*

// enable draggable/sortable feature on list-group elements
$(".card .list-group").sortable({
  // enable dragging across lists
  connectWith: $(".card .list-group"),
  scroll: false,
  tolerance: "pointer",
  helper: "clone",
  activate: function(event, ui) {
    console.log(ui);
    $(this).addClass("dropover");
    $(".bottom-trash").addClass("bottom-trash-drag")
  },
  deactivate: function(event, ui) {
    console.log(ui);
    $(this).removeClass("dropover");
    $(".bottom-trash").removeClass("bottom-trash-drag")
  },
  over: function(event) {
    console.log(event);
    $(event.target).addClass("dropover-active");
  },
  out: function(event) {
    console.log(event);
    $(event.target).removeClass("dropover-active");
  },
  update: function() {
    var tempArr = [];

*/