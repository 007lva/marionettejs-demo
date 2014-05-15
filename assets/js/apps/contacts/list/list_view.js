ContactManager.module("ContactsApp.List", function(List, ContactManager, Backbone, Marionette, $, _){
  List.ContactRow = Marionette.ItemView.extend({
    tagName: "tr",
    template: "ContactManager.ContactsApp.List.Templates.listRowView",
    events: {
      "click": "highlightName",
      "click button.js-delete": "deleteClicked",
      "click button.js-show": "showClicked",
      "click td": "alertCell"
    },
    highlightName: function(){
      this.$el.toggleClass("warning");
    },
    alertCell: function(e){
      alert($(e.target).text());
    },
    deleteClicked: function(e){
      e.preventDefault();
      e.stopPropagation();
      this.trigger("contact:delete", this.model);
    },
    showClicked: function(e){
      e.preventDefault();
      e.stopPropagation();
      this.trigger("contact:show", this.model);
    },
    remove: function(){
      var self = this;
      this.$el.fadeOut(function(){
        Marionette.ItemView.prototype.remove.call(self);
      });
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
