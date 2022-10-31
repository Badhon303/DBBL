$("#customerNumberTextbox").keyup(function () {
    $("#customerIDTd").text($(this).val());
});
$("#fullNameTextbox").keyup(function () {
    $("#fullNameIDTd").text($(this).val());
});
$("#fatherNameTextbox").keyup(function () {
    $("#fatherNameIDTd").text($(this).val());
});
$("#motherNameTextbox").keyup(function () {
    $("#motherNameIDTd").text($(this).val());
});
$("#spouseNameTextbox").keyup(function () {
    $("#spouseNameIDTd").text($(this).val());
});
$("#permanentAddressTextbox").keyup(function () {
    $("#parmanentAddressIDTd").text($(this).val());
});
$("#presentAddressTextbox").keyup(function () {
    $("#presentAddressIDTd").text($(this).val());
});
$("#professionTextbox").keyup(function () {
    $("#professionIDTd").text($(this).val());
});


$("#phoneTextbox").keyup(function () {
    $("#phoneIDTd").text($(this).val());
});
$("#emailTextbox").keyup(function () {
    $("#emailIDTd").text($(this).val());
});
$("#tinNoTextbox").keyup(function () {
    $("#tinNoIDTd").text($(this).val());
});
$("#nidNoTextbox").keyup(function () {
    $("#nationalIDNoTd").text($(this).val());
});

$("#passportTextbox").keyup(function () {
    $("#PassportIDNoTd").text($(this).val());
});
$( function() {
    $( "#dobTextbox" ).datepicker({
        autoclose:true
        
    });
    $("#dobTextbox").on("change",function(){
        //var selected = $(this).val();
        $("#dobIDTd").text($(this).val());
    });
  } );

