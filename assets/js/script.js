// Variables
var tasks = {};
var timeslots = ["9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM"];
var m = moment();
var clock = m.hour();

// Append time to header using moment.js
$("#currentDay").append(m.format("dddd MMM Mo YYYY"));

// Event listeners
$(".saveButton").on("click", saveTasks);

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
timeslots.forEach(function(value) {
    var intValue = parseInt(value),
        rowContainer = $('<div class="row mb-1" id=' + value + '></div>'),
        timeBlock = $('<div class="d-flex justify-content-center align-items-center col-12 col-lg-2 bg-secondary time-block"></div>'),
        timeBlockContent = $('<h2 class="py-0 my-0">' + value + '</h2>'),
        textInput = $('<div class="d-flex align-items-center col-9 col-lg-9 align-self-center textInput" id="'+ intValue +'"></div>'),
        textInputContent = $('<p class="my-auto h-75 w-100 pt-3"></p>');
        saveButton = $('<button class="col-3 col-lg-1 btn btn-secondary saveButton d-flex justify-content-center align-items-center"></button>'),
        saveButtonContent = $('<i class="fa-solid fa-floppy-disk"></i>');
        

    rowContainer.appendTo(".container");
    timeBlock.appendTo(rowContainer);
    timeBlockContent.appendTo(timeBlock);
    textInput.appendTo(rowContainer);
    textInputContent.appendTo(textInput);
    saveButton.appendTo(rowContainer);
    saveButtonContent.appendTo(saveButton);
});

// Apply backgrounds based on current hour
setInterval(function () {   
    $(".textInput").each = function() {
        var idPull = $("#id"); 
        if (idPull < clock) {
            console.log("PAST");
        } else if (idPull === clock) {
            console.log("PRESENT");
        } else if (idPull > clock){
            console.log("FUTURE");
        }
    }
}, (1000*3));

// Create textArea on focus