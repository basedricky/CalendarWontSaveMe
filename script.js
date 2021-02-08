// Setting the variable and using Moment to show the current date and time at the top of the page on page load.
var now = moment().format('LLLL');
console.log(now);

function pageLoad() {
    document.getElementById("currentDay").innerHTML = now;
};

pageLoad();

//local storage you're gonna to set it as setItem(time, toDO)

//getItem

//save event button onClick requires setItem


var timer = setInterval(scheduler, 100000)

function scheduler() {

    var timeRows = document.querySelectorAll('.time-row');
    console.log(timeRows)

    var currentTime = moment().format('HH');
    console.log(currentTime)

    $(".time-row").each(function () {

        var timeBlock = $(this).attr("id")

        console.log(timeBlock)

        //compare time here and add the class present, past, or future depending on case
        //look up addClass and removeClass

        if (timeBlock < currentTime) {
            $(this).removeClass("present future")
            $(this).addClass("past hour")

        } else if (timeBlock > currentTime) {
            $(this).removeClass("past present")
            $(this).addClass("future hour")

        } else {
            $(this).removeClass("future past")
            $(this).addClass("present hour")
        }
    })


}
scheduler();

// pull current storage append to it, then push it again! for local storage. it will just overright it, otherwise.
