var $ = require("jquery")
var Backbone = require("backbone")
Backbone.$ = $;
var migawari = require("migawari")

var ResultView = Backbone.View.extend({
  el : ".result",
  refresh : function(text){
    this.$el.text(migawari(text).toString())
  }
})
var MigawariView = Backbone.View.extend({
  initialize: function(){
    this.resultView = new ResultView()
    this.$input = $("input.selector")
  },
  el : ".console",
  events: {
    "keydown input.selector" : "refresh"
  },
  refresh : function(){
    this.resultView.refresh(this.$input.val())
  },
})
var migawariView = new MigawariView()
migawariView.refresh()
