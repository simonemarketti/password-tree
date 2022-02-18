"use strict";

$(function () {
  // initial animation
  $("#img-container").children().eq(0).fadeIn(3000);
  $("#pswd").keyup(function () {
    // set password strength
    var strength = 0; // set password variable

    var pswd = $(this).val(); //validate length

    if (pswd.length > 8) {
      $("#length").removeClass("invalid").addClass("valid");
      strength += 1;
    } else {
      $("#length").removeClass("valid").addClass("invalid");
    } //validate letter


    if (pswd.match(/[A-z]/)) {
      $("#letter").removeClass("invalid").addClass("valid");
      strength += 1;
    } else {
      $("#letter").removeClass("valid").addClass("invalid");
    } //validate capital letter


    if (pswd.match(/[A-Z]/)) {
      $("#capital").removeClass("invalid").addClass("valid");
      strength += 1;
    } else {
      $("#capital").removeClass("valid").addClass("invalid");
    } //validate number


    if (pswd.match(/\d/)) {
      $("#number").removeClass("invalid").addClass("valid");
      strength += 1;
    } else {
      $("#number").removeClass("valid").addClass("invalid");
    } // conditional rendering image


    $("#img-container").children().hide().eq(strength).show(); // conditional formatting button

    if (strength != 4) {
      $("#submit").prop("disabled", true);
    } else {
      $("#submit").prop("disabled", false);
    }
  });
});
