var TableHeader = Backbone.Marionette.View.extend({
  tagName: 'thead',
  className: 'thead thead-default',
  // template: require("../templates/table-header-template.html"),
  initialize: function(options){
    this.template = options.template
  },
  events: {
    'click .table-header': 'sortTable',
    'mouseover .table-header': 'mouseoverFunc',
    'mouseout .table-header': 'mouseoutFunc'
  },
  mouseoverFunc: function(event){
    $(event.currentTarget).css({"background-color":"yellow","cursor":"pointer"});
  },
  mouseoutFunc: function(event){
    $(event.currentTarget).css("background-color", "#f5f5f5");
  },
  sortTable: function(e){
    Backbone.trigger('sort:collection', e);
  }
});

module.exports = TableHeader;