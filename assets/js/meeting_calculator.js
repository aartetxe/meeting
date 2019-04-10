$('.tooltip-demo').tooltip({
      selector: "[data-toggle=tooltip]",
      container: "body"
    })

$("#start-button").prop('disabled', false);

// Constants
var g1 = 104;
var g2 = 69;
var g3 = 53;
var g4 = 40;
var g5 = 17.5;

$("#start-button").click(function(){

    // Get input data
    var num1 = $("#g1").val();
    var num2 = $("#g2").val();
    var num3 = $("#g3").val();
    var num4 = $("#g4").val();
    var num5 = $("#g5").val();

    // Check that input is valid
    if(isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4) || isNaN(num5)){
        alert("Don't be artaburu and insert valid numbers!");
        return;
    }

    // Disable button
    $("#start-button").prop('disabled', true);

    // Remove text
    document.getElementById("cost").innerHTML = "0.00 €";

    // Calculate cost
    var totalcost = 0;

    var step = num1*(2*g1/3600) +
                num2*(2*g2/3600) +
                num3*(2*g3/3600) +
                num4*(2*g4/3600) +
                num5*(2*g5/3600);

    var costVar = setInterval(function () {costTimer()}, 2000);

    // Auxiliary function for cost calculation and displaying
    function costTimer() {
        totalcost = totalcost + step;
        document.getElementById("cost").innerHTML = totalcost.toFixed(2)+" €";

    }

    // Init chrono
    start = new Date();
    chrono();

});

var start = 0;
var end = 0;
var diff = 0;
var timerID = 0;

function chrono(){

    end = new Date();
    diff = end - start;
    diff = new Date(diff);
    var msec = diff.getMilliseconds();
    var sec = diff.getSeconds();
    var min = diff.getMinutes();
    var hr = diff.getHours()-1;

    if (min < 10){
        min = "0" + min;
    }
    if (sec < 10){
        sec = "0" + sec;
    }
    if(msec < 10){
        msec = "00" +msec;
    }
    else if(msec < 100){
        msec = "0" +msec;
    }
    document.getElementById("time").innerHTML = hr + ":" + min + ":" + sec;
    timerID = setTimeout("chrono()", 10);
}

function share_meeting(){

    c_date = new Date().getTime();

    out_url = "?ts="+ c_date +
              "&g1="+ $("#g1").val() +              "&g2="+ $("#g2").val() +
              "&g3="+ $("#g3").val() +
              "&g4="+ $("#g4").val() +
              "&g5="+ $("#g5").val()

    console.log(out_url)
}

$("#share-button").click(function(){

    c_date = new Date().getTime();

    out_url = "?ts="+ c_date +
              "&g1="+ $("#g1").val() +
              "&g2="+ $("#g2").val() +
              "&g3="+ $("#g3").val() +
              "&g4="+ $("#g4").val() +
              "&g5="+ $("#g5").val()

    alert(window.location.href+out_url)
});

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}


$(document).ready(function() {

    var current_url = window.location.href;

    ts = getUrlVars()['ts']
    p_g1 = getUrlVars()['g1']
    p_g2 = getUrlVars()['g2']
    p_g3 = getUrlVars()['g3']
    p_g4 = getUrlVars()['g4']
    p_g5 = getUrlVars()['g5']

    $("#g1").val(p_g1);
    $("#g2").val(p_g2);
    $("#g3").val(p_g3);
    $("#g4").val(p_g4);
    $("#g5").val(p_g5);

});