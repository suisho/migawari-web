var migawari = require("migawari")
/*
$(".input").on("change", function(){
  
})*/
window.migawari = migawari

$("input.selector").on('keydown', function(){
  var migawarid = migawari($(this).val())
  $(".result").text(migawarid.toString())
})