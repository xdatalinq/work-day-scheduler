// Variables
var tasks = {};
var timeslots = ["9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM"];
var today = moment().format("dddd, MMMM Do");
var clock = parseInt(moment().format('H'))

// Append time to header using moment.js
$("#currentDay").text(today);

// Event listeners
$(".saveButton").on("click", saveTasks);

// Create elements for each timeslot
timeslots.forEach(function(value) {
    var rowContainer = $('<div class="row mb-1 main past" id=' + value + '></div>'),
        timeBlock = $('<div class="d-flex justify-content-center align-items-center col-12 col-lg-2 bg-secondary time-block"></div>'),
        timeBlockContent = $('<h2 class="py-0 my-0">' + value + '</h2>'),
        textInput = $('<div class="d-flex align-items-center col-9 col-lg-9 align-self-center textInput"></div>'),
        textInputContent = $('<p class="my-auto h-100 w-100 ptag"></p>'),
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
var backgroundCheck = function() {
    $(".main").each(function() {
        switch (currentId = parseInt($(this).attr("id"))) {
            case 1:
                currentId = 13;
                if (currentId > clock) {
                    $(this).addClass("future") && $(this).removeClass("past") && $(this).removeClass("present");
                    } else if (currentId === clock) {
                        $(this).addClass("present") && $(this).removeClass("past") && $(this).removeClass("future");
                    } else {
                        $(this).addClass("past") && $(this).removeClass("present") && $(this).removeClass("future");
                    }
                break;
            case 2:
                currentId = 14;
                if (currentId > clock) {
                    $(this).addClass("future") && $(this).removeClass("past") && $(this).removeClass("present");
                    } else if (currentId === clock) {
                        $(this).addClass("present") && $(this).removeClass("past") && $(this).removeClass("future");
                    } else {
                        $(this).addClass("past") && $(this).removeClass("present") && $(this).removeClass("future");
                    }
                break;
            case 3:
                currentId = 15;
                if (currentId > clock) {
                    $(this).addClass("future") && $(this).removeClass("past") && $(this).removeClass("present");
                    } else if (currentId === clock) {
                        $(this).addClass("present") && $(this).removeClass("past") && $(this).removeClass("future");
                    } else {
                        $(this).addClass("past") && $(this).removeClass("present") && $(this).removeClass("future");
                    }
                break;
            case 4:
                currentId = 16;
                if (currentId > clock) {
                    $(this).addClass("future") && $(this).removeClass("past") && $(this).removeClass("present");
                    } else if (currentId === clock) {
                        $(this).addClass("present") && $(this).removeClass("past") && $(this).removeClass("future");
                    } else {
                        $(this).addClass("past") && $(this).removeClass("present") && $(this).removeClass("future");
                    }
                break;
            case 5:
                currentId = 17;
                if (currentId > clock) {
                    $(this).addClass("future") && $(this).removeClass("past") && $(this).removeClass("present");
                    } else if (currentId === clock) {
                        $(this).addClass("present") && $(this).removeClass("past") && $(this).removeClass("future");
                    } else {
                        $(this).addClass("past") && $(this).removeClass("present") && $(this).removeClass("future");
                    }
                break;
            default:
                if (currentId > clock) {
                    $(this).addClass("future") && $(this).removeClass("past") && $(this).removeClass("present");
                    } else if (currentId === clock) {
                        $(this).addClass("present") && $(this).removeClass("past") && $(this).removeClass("future");
                    } else {
                        $(this).addClass("past") && $(this).removeClass("present") && $(this).removeClass("future");
                    };
        };
    })        
};

// Task text was clicked
$(".textInput").on("click", "p", function() {
    // get current text of p element
    var text = $(this)
      .text()
      .trim();
  
    // replace p element with a new textarea
    var textInput = $("<textarea>").addClass("my-auto h-75 w-100 pt-3").val(text);
    $(this).replaceWith(textInput);
  
    // auto focus new element
    textInput.trigger("focus");
});

// Save tasks
var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log("Tasks saved!");
};

// Load tasks
var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    if (!tasks) {
      tasks = {};
    }
    console.log("Tasks loaded!");
};

// load tasks for the first time
loadTasks();

// Interval to update backgrounds
setInterval(function () {
    backgroundCheck();
    console.log("tick");
}, 1000);