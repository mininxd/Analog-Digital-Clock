import {detikFun, menitFun, jamFun} from "./waktu.js";
import {capture} from './toCanvas.js';

  captureEl.addEventListener('click', function() {
    capture();
  })


setInterval(function() {
  detikFun();
  menitFun();
  jamFun();
},100);



$("#roundess").on("input change", function() {
  $("#roundessValue").html($("#roundess").val()*2 + "%");
  $(".second").css("border-radius", $("#roundess").val() + "px");
  $(".minute").css("border-radius", $("#roundess").val() + "px");
  $(".hour").css("border-radius", $("#roundess").val() + "px");
})

$("#roundessDot").on("input change", function() {
  $("#roundessDotValue").html($("#roundessDot").val()*20 + "%");
  $(".dot1").css("border-radius", $("#roundessDot").val() + "px");
  $(".dot2").css("border-radius", $("#roundessDot").val() + "px");
})

$("#borderSize").on("input change", function() {
  $("#borderSizeValue").html($("#borderSize").val()*20 + "%");
  $(".dot1").css("border-width", $("#borderSize").val()*0.5 + "px");
  $(".dot2").css("border-width", $("#borderSize").val()*0.5 + "px");
  
  $(".second").css("border-width", $("#borderSize").val() + "px");
  $(".minute").css("border-width", $("#borderSize").val() + "px");
  $(".hour").css("border-width", $("#borderSize").val() + "px");
})