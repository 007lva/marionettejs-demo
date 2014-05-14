ContactManager.module("ContactsApp.List", function(List, ContactManager, Backbone, Marionette, $, _){
  List.Contact = Marionette.ItemView.extend({
    tagName: "tr",
    template: "ContactManager.ContactsApp.List.Templates.listItemView"
  });

  List.Contacts = Marionette.CollectionView.extend({
    tagName: "table",
    className: "table table-hover",
    itemView: List.Contact
  });
});
