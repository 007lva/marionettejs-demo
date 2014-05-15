ContactManager.module("ContactsApp.List", function(List, ContactManager, Backbone, Marionette, $, _){
  List.ContactRow = Marionette.ItemView.extend({
    tagName: "tr",
    template: "ContactManager.ContactsApp.List.Templates.listRowView",
    events: {
      "click": "highlightName",
      "click td": "alertCell"
    },
    highlightName: function(){
      this.$el.toggleClass("warning");
    },
    alertCell: function(e){
      alert($(e.target).text());
    }
  });

  List.ContactItem = Marionette.ItemView.extend({
    tagName: "li",
    template: "ContactManager.ContactsApp.List.Templates.listItemView"
  });

  List.ContactsTable = Marionette.CompositeView.extend({
    tagName: "table",
    className: "table table-hover",
    template: "ContactManager.ContactsApp.List.Templates.tableItemsView",
    itemView: List.ContactRow,
    itemViewContainer: "tbody"
  });

  List.ContactsList = Marionette.CompositeView.extend({
    tagName: "ul",
    template: "ContactManager.ContactsApp.List.Templates.listContainerView",
    itemView: List.ContactItem,
    itemViewContainer: "ul"
  });     
});
