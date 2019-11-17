


$(".saveBtn").click(function () {
    var userEvent = $("#input9").val();
    localStorage.setItem("9am", userEvent);

});
function DisplayEvent9() {
    $("#input9").val(localStorage.getItem("9am"))


}

DisplayEvent9();


$(".saveBtn").click(function () {
    var userEvent = $("#input10").val();
    localStorage.setItem("10am", userEvent);

});
function DisplayEvent10() {
    $("#input10").val(localStorage.getItem("10am"))


}

DisplayEvent10();


$(".saveBtn").click(function () {
    var userEvent = $("#input11").val();
    localStorage.setItem("11am", userEvent);

});
function DisplayEvent11() {
    $("#input11").val(localStorage.getItem("11am"))


}

DisplayEvent11();


$(".saveBtn").click(function () {
    var userEvent = $("#input12").val();
    localStorage.setItem("12pm", userEvent);

});
function DisplayEvent12() {
    $("#input12").val(localStorage.getItem("12pm"))


}

DisplayEvent12();

$(".saveBtn").click(function () {
    var userEvent = $("#input1").val();
    localStorage.setItem("1pm", userEvent);

});
function DisplayEvent1() {
    $("#input1").val(localStorage.getItem("1pm"))


}

DisplayEvent1();

$(".saveBtn").click(function () {
    var userEvent = $("#input2").val();
    localStorage.setItem("2pm", userEvent);

});
function DisplayEvent2() {
    $("#input2").val(localStorage.getItem("2pm"))


}

DisplayEvent2();

$(".saveBtn").click(function () {
    var userEvent = $("#input3").val();
    localStorage.setItem("3pm", userEvent);

});
function DisplayEvent3() {
    $("#input3").val(localStorage.getItem("3pm"))


}

DisplayEvent3();

$(".saveBtn").click(function () {
    var userEvent = $("#input4").val();
    localStorage.setItem("4pm", userEvent);

});
function DisplayEvent4() {
    $("#input4").val(localStorage.getItem("4pm"))


}

DisplayEvent4();

$(".saveBtn").click(function () {
    var userEvent = $("#input5").val();
    localStorage.setItem("5pm", userEvent);

});
function DisplayEvent5() {
    $("#input5").val(localStorage.getItem("5pm"))


}

DisplayEvent5();


var dateEl = $("#currentDay")
var date = new Date();
date = moment().format('LL');
var date1 = moment().format("h A")
console.log(date1)
var FivePm = $("#input5")
var FourPm = $("#input4")
var ThreePm = $("#input3")
var TwoPm = $("#input2")
var OnePm = $("#input1")
var Noon = $("#input12")
var ElevenAm = $("#input11")
var TenAm = $("#input10")
var NineAm = $("#input9")
dateEl.text(date);


if (date1 === "5 PM"){
    FivePm.addClass("present")
}

else {
    FivePm.addClass("future")
}


if (date1 === "4 PM"){
    FourPm.addClass("present")
}

else {
    FourPm.addClass("future")
}

if (date1 === "3 PM"){
    ThreePm.addClass("present")
}

else {
    ThreePm.addClass("future")
}

if (date1 === "2 PM"){
    TwoPm.addClass("present")
}

else {
    TwoPm.addClass("future")
}

if (date1 === "1 PM"){
    OnePm.addClass("present")
}

else {
    OnePm.addClass("future")
}

if (date1 === "12 PM"){
    Noon.addClass("present")
}

else {
    Noon.addClass("future")
}

if (date1 === "11 AM"){
    ElevenAm.addClass("present")
}

else {
    ElevenAm.addClass("future")
}

if (date1 === "10 AM"){
    TenAm.addClass("present")
}

else {
    TenAm.addClass("future")
}

if (date1 === "9 AM"){
    NineAm.addClass("present")
}

else {
    NineAm.addClass("future")
}