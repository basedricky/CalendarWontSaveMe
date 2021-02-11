$(document).ready(function () {
    document.getElementById("currentDay").innerHTML = now;
    // Setting the variable and using Moment to show the current date and time at the top of the page on page load.
    var now = moment().format('LLLL');

    console.log(now);

    //saveBtn even listener
    $(".saveBtn").on("click", function () {
        //get nearby values.
        console.log(this);
        var toDo = $(this).siblings(".textarea").val();
        var time = $(this).parent().attr("id");

        //set items in local storage.
        localStorage.setItem(time, toDo);
    })
    //load any saved data from LocalStorage - do this for each reated.
    $("#09 .description").val(localStorage.getItem("09"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));






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
                $(this).addClass("past 

            } else if (timeBlock > currentTime) {
                $(this).removeClass("past present")
                $(this).addClass("future 

            } else {
                $(this).removeClass("future past")
                $(this).addClass("present 
            }
        })




    }


    scheduler();

})


// pull current storage append to it, then push it again! for local storage. it will just over write it otherwise.
