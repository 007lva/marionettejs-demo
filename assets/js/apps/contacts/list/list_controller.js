ContactManager.module("ContactsApp.List", function(List, ContactManager, Backbone, Marionette, $, _){
  List.Controller = {
    listContacts: function(){
      var contacts = ContactManager.request("contact:entities");

      var contactsTableView = new List.ContactsTable({
        collection: contacts
      });

      var contactsListView = new List.ContactsList({
        collection: contacts
      });

      ContactManager.mainRegion.show(contactsTableView);
      ContactManager.secondRegion.show(contactsListView);
    }
  };
});
