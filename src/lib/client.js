var $ = require("jquery")
var Backbone = require("backbone")
var migawari = require("migawari")
var hljs = require("highlight.js")
var pd = require("pretty-data").pd


Backbone.$ = $;
hljs.initHighlightingOnLoad()

var ResultView = Backbone.View.extend({
  el : ".result",
  refresh : function(text){
    var html = migawari(text).toString()
    html = pd.xml(html)
    this.$el.text(html)
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
