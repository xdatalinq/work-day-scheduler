// Variables
var timeslots = ["9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM"];
var today = moment().format("dddd, MMMM Do");
var clock = parseInt(moment().format('H'))

// Append time to header using moment.js
$("#currentDay").text(today);

// Create elements for each timeslot
timeslots.forEach(function(value) {
    var id2 = value+"b";
        rowContainer = $('<div class="row mb-1 main future" id=' + value + '></div>'),
        timeBlock = $('<div class="d-flex justify-content-center align-items-center col-12 col-lg-2 bg-secondary time-block"></div>'),
        timeBlockContent = $('<h2 class="py-0 my-0">' + value + '</h2>'),
        textInput = $('<div class="d-flex align-items-center col-9 col-lg-9 align-self-center textInput"></div>'),
        textInputContent = $('<textarea class="my-auto h-100 w-100 textareaclass" id="'+id2+'"></textarea>'),
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
                    }
        };
    });        
};

// Load tasks
var loadTasks = function() {
    console.log("Tasks loaded!");
    // Get item from local storage if any
    
    $("#9AMb").val(localStorage.getItem("9am"));
    $("#10AMb").val(localStorage.getItem("10am"));
    $("#11AMb").val(localStorage.getItem("11am"));
    $("#12PMb").val(localStorage.getItem("12pm"));
    $("#1PMb").val(localStorage.getItem("1pm"));
    $("#2PMb").val(localStorage.getItem("2pm"));
    $("#3PMb").val(localStorage.getItem("3pm"));
    $("#4PMb").val(localStorage.getItem("4pm"));
    $("#5PMb").val(localStorage.getItem("5pm"));
};

// Save tasks
var saveTasks = function() {
    backgroundCheck;
    console.log("Tasks saved!");
    var A = $("#9AMb").val();
    localStorage.setItem("9am", A);
    var B = $("#10AMb").val();
    localStorage.setItem("10am", B);
    var C = $("#11AMb").val();
    localStorage.setItem("11am", C);
    var D = $("#12PMb").val();
    localStorage.setItem("12pm", D);
    var E = $("#1PMb").val();
    localStorage.setItem("1pm", E);
    var F = $("#2PMb").val();
    localStorage.setItem("2pm", F);
    var G = $("#3PMb").val();
    localStorage.setItem("3pm", G);
    var H = $("#4PMb").val();
    localStorage.setItem("4pm", H);
    var I = $("#5PMb").val();
    localStorage.setItem("5am", I);
};

// Event listener
$(".saveButton").on("click", saveTasks);

// Interval to update backgrounds
setInterval(function () {
    backgroundCheck();
    console.log("tick");
}, 1000);

// load tasks for the first time
loadTasks();