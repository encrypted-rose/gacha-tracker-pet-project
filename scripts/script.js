
window.onload = function() {

    countdown_1();
    countdown_2();

    //Variables for the form
    var formHandle = document.forms.form_game;
    var c_gameTitle = document.getElementById("title-fill");
    var c_gameResource = document.getElementById("resource-fill");
    var c_gameTime = document.getElementById("timer-fill");

    //Other variables
    var hiddenGame = document.getElementById("to-fill");
    var formDiv = document.getElementById("fill-out-form");
    var reset = document.getElementById("reset");

    //buttons
    var btnStop = document.getElementsByClassName("stop");
    var btnGetTime = document.getElementById("get-time");

    //Timer 3 - Unfortunately due to time constraints, adjusting the timers won't be possible at the moment.

    //var clockHr_3 = document.getElementById("hours-3");
    //var clockMin_3 = document.getElementById("min-3");
    //var clockSec_3 = document.getElementById("sec-3");

    //Function for timers - will ask for help to adjust
    function countdown_1() {
        var dateNow = document.getElementById("todayDate-1");
        var clockHr_1 = document.getElementById("hours-1");
        var clockMin_1 = document.getElementById("min-1");
        var clockSec_1 = document.getElementById("sec-1");

        var dateVar1 = new Date();
        dateNow.innerHTML = dateVar1.toDateString();

        function displayTime(){
            var currentDate = new Date();

            var outHrs = currentDate.getHours();
            var outMin = currentDate.getMinutes();
            var outSecs = currentDate.getSeconds();

            clockHr_1.innerHTML = outHrs + " Hrs";
            clockMin_1.innerHTML = outMin + " Min";
            clockSec_1.innerHTML = outSecs + " Sec";
        }

        var timeMove;

        function clockMove(){
            timeMove = setInterval (displayTime, 1000)
        }

        clockMove();
    }

    function countdown_2(){
        var dateNow_2 = document.getElementById("todayDate-2");
        var clockHr_2 = document.getElementById("hours-2");
        var clockMin_2 = document.getElementById("min-2");
        var clockSec_2 = document.getElementById("sec-2");

        var dateVar2 = new Date();
        
        dateNow_2.innerHTML = dateVar2.toDateString();

        function displayTime2() {
            var currentDate_2 = new Date();

            var outHrs_2 = currentDate_2.getHours();
            var outMin_2 = currentDate_2.getMinutes();
            var outSecs_2 = currentDate_2.getSeconds();

            clockHr_2.innerHTML = outHrs_2 + " Hrs";
            clockMin_2.innerHTML = outMin_2 + " Min";
            clockSec_2.innerHTML = outSecs_2 + " Sec";
        }
        
        var timeMove2;

        function clockMove2() {
            timeMove2 = setInterval (displayTime2, 1000)
        }

        clockMove2();
    }

    //not working - not sure how to fix
    reset.onclick = function(){
        location.reload;
    }

    //Submit
    formHandle.onsubmit = processForm;

    //Form information
    function processForm() {

        console.log ("Form completed!");

        var titleValue = formHandle.gameTitle;
        console.log (titleValue.value);

        var resourceValue = formHandle.resource;
        console.log (resourceValue.value);

        var timeValue = formHandle.time;
        console.log (timeValue.value);
        
        if (titleValue === ""){
            titleValue.focus();
            titleValue.styles.color = "red";
            return false;
        }

        if (resourceValue ==="") {
            resourceValue.focus();
            resourceValue.style.color = "red";
            return false;
        }

        if (timeValue === "") {
            timeValue.focus();
            resourceValue.style.color = "red";
            return false;
        }

        c_gameTitle.innerHTML = titleValue.value;
        c_gameResource.innerHTML = resourceValue.value;
        c_gameTime.innerHTML = timeValue.value + " Hrs";


        //Calling function to hide form
        hideForm();

        return false;
    }

    //Function to hide form after submission
    function hideForm() {
        hiddenGame.style.display = "flex";
        formDiv.style.display = "none";
    }

    // Reset function - it's located on the logo of the page
    reset.onclick = function() {
        window.location.reload();
    }
}