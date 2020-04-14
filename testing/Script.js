//ready function
$(document).ready(function() {
    //diplaying current day and time
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a")); //https://momentjs.com/

    //asigning saveBtn button (.on)click listener for input and time
    $(".saveBtn").on("click", function() {
        //get values
        console.log(this)
        var text = $(this).siblings(".appointment").val();
        var time = $(this).parent().attr("id");

        //set items in local storage
        localStorage.setItem(time, text);

    })
    //load any saved data from LocalStorage - do this for each hour created.
    $("#9am .appointment").val(localStorage.getItem("9am"));
    $("#10am .appointment").val(localStorage.getItem("10am"));
    $("#11am .appointment").val(localStorage.getItem("11am"));
    $("#12pm .appointment").val(localStorage.getItem("12pm"));
    $("#1pm .appointment").val(localStorage.getItem("1pm"));
    $("#2pm.appointment").val(localStorage.getItem("2pm"));
    $("#3pm .appointment").val(localStorage.getItem("3pm"));
    $("#4pm .appointment").val(localStorage.getItem("4pm"));
    $("#5pm .appointment").val(localStorage.getItem("5pm"));


    function hourTracker() {
        //get current number of hours.
        var currentHour = moment().hour();

        // loop over time blocks
        $(".appointment").each(function () {
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);
            console.log( blockHour, currentHour)

            //check if we've moved past this time
            if (blockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    hourTracker();
})

 







