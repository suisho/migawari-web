var $ = require("jquery")
var Backbone = require("backbone")

var migawari = require("migawari")

var Output = Backbone.view
$("input.selector").on('keydown', function(){
  var migawarid = migawari($(this).val())
  $(".result").text(migawarid.toString())
})